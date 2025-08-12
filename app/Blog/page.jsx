'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '../Lib/supabaseClient';
import Link from 'next/link';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState('local'); // 'local' of 'supabase'
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      if (supabase) {
        // Probeer Supabase te gebruiken
        try {
          const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .order('created_at', { ascending: false });

          if (error) throw error;
          
          if (data && data.length > 0) {
            setPosts(data);
            setDataSource('supabase');
          } else {
            // Fallback naar lokale data
            await fetchLocalData();
          }
        } catch (supabaseError) {
          console.warn('Supabase error, falling back to local data:', supabaseError);
          // Fallback naar lokale data
          await fetchLocalData();
        }
      } else {
        // Supabase niet beschikbaar, gebruik lokale data
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
      setDataSource('local');
    } catch (error) {
      console.error('Error fetching local data:', error);
      setPosts([]);
    }
  };

  const categories = [
    'UX Research', 'UI Design', 'User Testing', 'Design Systems', 
    'Case Studies', 'Design Tools', 'Accessibility', 'Mobile UX'
  ];

  const filteredPosts = selectedCategory 
    ? posts.filter(post => post.category === selectedCategory)
    : posts;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-purple-600 font-medium">UX Design Studio laden...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm border border-white/30">
              📚 UX Design Blog
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            UX Design Kennis
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
              & Inzichten
            </span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Duik in de wereld van UX design met artikelen, case studies en best practices 
            van ervaren designers en experts.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🎯 Filter op Categorie
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                selectedCategory === '' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🌟 Alle Categorieën
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedCategory === category 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Geen artikelen gevonden
            </h3>
            <p className="text-gray-600 mb-8">
              {selectedCategory 
                ? `Er zijn momenteel geen artikelen in de categorie "${selectedCategory}"`
                : 'Er zijn momenteel geen artikelen beschikbaar.'
              }
            </p>
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory('')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
              >
                Bekijk alle artikelen
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                {post.image_url && (
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img 
                      src={post.image_url} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  {/* Category Badge */}
                  {post.category && (
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800">
                        {post.category}
                      </span>
                    </div>
                  )}
                  
                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt || post.content.substring(0, 120)}...
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <span className="mr-2">📅</span>
                      {new Date(post.created_at).toLocaleDateString('nl-NL')}
                    </div>
                    {post.author && (
                      <div className="flex items-center">
                        <span className="mr-2">👤</span>
                        {post.author}
                      </div>
                    )}
                  </div>
                  
                  {/* Read More Button */}
                  <Link 
                    href={`/Blog/${post.id}`}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    📖 Lees Meer
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Data Source Info */}
        {dataSource === 'local' && (
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">🎨 Demo Mode Actief</h3>
              <p className="text-blue-800 text-sm">
                Je bekijkt momenteel demo content. Voor live artikelen en real-time updates, 
                stel Supabase op zoals beschreven in de documentatie.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
