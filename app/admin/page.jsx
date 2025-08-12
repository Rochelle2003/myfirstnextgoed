'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '../Lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function Admin() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [demoMode, setDemoMode] = useState(false);
  const [demoUser, setDemoUser] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    image_url: '',
    author: ''
  });
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    fetchPosts();
  }, []);

  const checkAuth = async () => {
    if (supabase) {
      try {
        // Echte Supabase authenticatie
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          router.push('/login');
          return;
        }
      } catch (error) {
        console.warn('Supabase auth error, switching to demo mode:', error);
        // Als er een error is, schakel over naar demo mode
        const storedUser = localStorage.getItem('demoUser');
        if (!storedUser) {
          router.push('/login');
          return;
        }
        setDemoUser(JSON.parse(storedUser));
        setDemoMode(true);
      }
    } else {
      // Demo mode authenticatie
      const storedUser = localStorage.getItem('demoUser');
      if (!storedUser) {
        router.push('/login');
        return;
      }
      setDemoUser(JSON.parse(storedUser));
      setDemoMode(true);
    }
  };

  const fetchPosts = async () => {
    try {
      if (supabase) {
        // Haal posts op uit Supabase
        try {
          const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .order('created_at', { ascending: false });

          if (error) throw error;
          setPosts(data || []);
        } catch (supabaseError) {
          console.warn('Supabase error, falling back to local data:', supabaseError);
          // Fallback naar lokale data
          await fetchLocalData();
        }
      } else {
        // Haal posts op uit lokale demo data
        await fetchLocalData();
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      // Fallback naar lokale data
      await fetchLocalData();
    } finally {
      setLoading(false);
    }
  };

  const fetchLocalData = async () => {
    try {
      const response = await fetch('/demoData.json');
      const data = await response.json();
      setPosts(data.blog_posts || []);
    } catch (error) {
      console.error('Error fetching local data:', error);
      setPosts([]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (editingPost) {
        // Update bestaande post
        if (supabase) {
          const { error } = await supabase
            .from('blog_posts')
            .update(formData)
            .eq('id', editingPost.id);

          if (error) throw error;
        } else {
          // Demo mode: update lokale state
          setPosts(prev => prev.map(post => 
            post.id === editingPost.id 
              ? { ...post, ...formData, updated_at: new Date().toISOString() }
              : post
          ));
        }
      } else {
        // Maak nieuwe post
        const newPost = {
          ...formData,
          id: Date.now().toString(),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };

        if (supabase) {
          const { error } = await supabase
            .from('blog_posts')
            .insert([newPost]);

          if (error) throw error;
        } else {
          // Demo mode: voeg toe aan lokale state
          setPosts(prev => [newPost, ...prev]);
        }
      }

      // Reset form en refresh posts
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        category: '',
        image_url: '',
        author: ''
      });
      setEditingPost(null);
      setShowForm(false);
      
      if (supabase) {
        fetchPosts();
      }
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Er is een fout opgetreden bij het opslaan van de post.');
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt || '',
      content: post.content,
      category: post.category || '',
      image_url: post.image_url || '',
      author: post.author || ''
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm('Weet je zeker dat je deze post wilt verwijderen?')) {
      try {
        if (supabase) {
          const { error } = await supabase
            .from('blog_posts')
            .delete()
            .eq('id', id);

          if (error) throw error;
          fetchPosts();
        } else {
          // Demo mode: verwijder uit lokale state
          setPosts(prev => prev.filter(post => post.id !== id));
        }
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('Er is een fout opgetreden bij het verwijderen van de post.');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      image_url: '',
      author: ''
    });
    setEditingPost(null);
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          {demoMode && (
            <div className="flex items-center mt-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800 mr-2">
                Demo Mode
              </span>
              <span className="text-sm text-gray-600">
                Welkom, {demoUser?.name || 'Demo User'}
              </span>
            </div>
          )}
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Nieuwe Post
        </button>
      </div>

      {/* Demo mode info */}
      {demoMode && (
        <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Demo Mode Actief</h3>
          <p className="text-blue-800 text-sm">
            Je werkt momenteel in demo mode. Alle wijzigingen worden alleen lokaal opgeslagen en verdwijnen na het verversen van de pagina. 
            Voor permanente opslag, stel Supabase op zoals beschreven in de documentatie.
          </p>
        </div>
      )}

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {editingPost ? 'Post Bewerken' : 'Nieuwe Post Toevoegen'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Titel *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Categorie
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Samenvatting
              </label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Inhoud *
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                required
                rows="8"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Afbeelding URL
                </label>
                <input
                  type="url"
                  name="image_url"
                  value={formData.image_url}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Auteur
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Annuleren
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                {editingPost ? 'Bijwerken' : 'Toevoegen'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Posts list */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Blog Posts</h2>
        </div>
        
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Nog geen blog posts beschikbaar.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {posts.map((post) => (
              <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {post.excerpt || post.content.substring(0, 100)}...
                    </p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span>{new Date(post.created_at).toLocaleDateString('nl-NL')}</span>
                      {post.category && (
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {post.category}
                        </span>
                      )}
                      {post.author && <span>Door: {post.author}</span>}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => handleEdit(post)}
                      className="px-3 py-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Bewerken
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="px-3 py-1 text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Verwijderen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

