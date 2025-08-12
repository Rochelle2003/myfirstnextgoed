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
            .update({
              ...formData,
              author: demoUser?.name || 'UX Designer' // Zorg dat author altijd is ingevuld
            })
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
        if (supabase) {
          // Voor Supabase: laat de database automatisch UUID en timestamps genereren
          const { error } = await supabase
            .from('blog_posts')
            .insert([{
              ...formData,
              author: demoUser?.name || 'UX Designer' // Zorg dat author altijd is ingevuld
            }]);

          if (error) throw error;
        } else {
          // Demo mode: voeg toe aan lokale state met lokale ID
          const newPost = {
            ...formData,
            id: Date.now().toString(),
            author: demoUser?.name || 'UX Designer', // Zorg dat author altijd is ingevuld
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          };
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
      alert(`Er is een fout opgetreden bij het opslaan van de post: ${error.message}`);
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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 mb-8 text-white">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2">UX Design Studio</h1>
            <p className="text-purple-100 text-lg mb-4">
              Beheer je UX design artikelen, case studies en design insights
            </p>
            {demoMode && (
              <div className="flex items-center mt-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-400 text-yellow-900 mr-3">
                  Demo Mode
                </span>
                <span className="text-purple-100">
                  Welkom, {demoUser?.name || 'UX Designer'}
                </span>
              </div>
            )}
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-white text-purple-600 px-6 py-3 rounded-xl hover:bg-purple-50 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
          >
            ✨ Nieuw Artikel
          </button>
        </div>
      </div>

      {/* Demo mode info */}
      {demoMode && (
        <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">🎨 Demo Mode Actief</h3>
          <p className="text-blue-800 text-sm">
            Je werkt momenteel in demo mode. Alle wijzigingen worden alleen lokaal opgeslagen en verdwijnen na het verversen van de pagina. 
            Voor permanente opslag, stel Supabase op zoals beschreven in de documentatie.
          </p>
        </div>
      )}

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            {editingPost ? '✏️ Artikel Bewerken' : '✨ Nieuw Artikel Toevoegen'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Titel van het Artikel *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  placeholder="Bijv: '10 UX Principles voor Betere Conversies'"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Categorie
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  <option value="">Selecteer categorie</option>
                  <option value="UX Research">UX Research</option>
                  <option value="UI Design">UI Design</option>
                  <option value="User Testing">User Testing</option>
                  <option value="Design Systems">Design Systems</option>
                  <option value="Case Studies">Case Studies</option>
                  <option value="Design Tools">Design Tools</option>
                  <option value="Accessibility">Accessibility</option>
                  <option value="Mobile UX">Mobile UX</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Samenvatting / Hook
              </label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                rows="3"
                placeholder="Een pakkende samenvatting die lezers overtuigt om verder te lezen..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Inhoud van het Artikel *
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                required
                rows="12"
                placeholder="Schrijf hier je volledige artikel. Je kunt markdown gebruiken voor opmaak..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-mono text-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Afbeelding URL
                </label>
                <input
                  type="url"
                  name="image_url"
                  value={formData.image_url}
                  onChange={handleInputChange}
                  placeholder="https://unsplash.com/photo-..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Auteur
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  placeholder="Jouw naam of pseudoniem"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-3 text-gray-600 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium"
              >
                Annuleren
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
              >
                {editingPost ? '📝 Bijwerken' : '🚀 Publiceren'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Posts list */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="px-8 py-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">📚 Jouw UX Artikelen</h2>
          <p className="text-gray-600 mt-1">Beheer al je gepubliceerde content op één plek</p>
        </div>
        
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-gray-500 text-lg mb-2">Nog geen artikelen gepubliceerd</p>
            <p className="text-gray-400">Begin met het schrijven van je eerste UX design artikel!</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {posts.map((post) => (
              <div key={post.id} className="p-8 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      {post.category && (
                        <span className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      )}
                      <span className="text-sm text-gray-500">
                        📅 {new Date(post.created_at).toLocaleDateString('nl-NL')}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt || post.content.substring(0, 150)}...
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      {post.author && (
                        <span className="flex items-center">
                          👤 Door: <span className="font-medium ml-1">{post.author}</span>
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 ml-6">
                    <button
                      onClick={() => handleEdit(post)}
                      className="px-4 py-2 text-purple-600 hover:text-purple-800 text-sm font-semibold hover:bg-purple-50 rounded-lg transition-all duration-200"
                    >
                      ✏️ Bewerken
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="px-4 py-2 text-red-600 hover:text-red-800 text-sm font-semibold hover:bg-red-50 rounded-lg transition-all duration-200"
                    >
                      🗑️ Verwijderen
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

