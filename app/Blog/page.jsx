'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '../Lib/supabaseClient';
import axios from 'axios';
import Link from 'next/link';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState('local'); // 'local', 'online', 'supabase'
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      // Probeer eerst Supabase (alleen als credentials beschikbaar zijn)
      if (supabase && process.env.NEXT_PUBLIC_SUPABASE_URL) {
        try {
          const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .order('created_at', { ascending: false });

          if (error) throw error;
          
          if (data && data.length > 0) {
            setPosts(data);
            setDataSource('supabase');
            return;
          }
        } catch (supabaseError) {
          console.warn('Supabase error, trying online JSON:', supabaseError);
        }
      }

      // Probeer online JSON bestand
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const onlinePosts = response.data.map(post => ({
          id: post.id.toString(),
          title: post.title,
          content: post.body,
          excerpt: post.body.substring(0, 100) + '...',
          author: 'Online Author',
          category: getRandomCategory(),
          created_at: new Date().toISOString(),
          image_url: `https://picsum.photos/500/300?random=${post.id}`
        }));
        
        setPosts(onlinePosts);
        setDataSource('online');
        return;
      } catch (onlineError) {
        console.warn('Online JSON error, falling back to local data:', onlineError);
      }

      // Fallback naar lokale data
      await fetchLocalData();
    } catch (error) {
      console.error('Error fetching posts:', error);
      await fetchLocalData();
    } finally {
      setLoading(false);
    }
  };

  const getRandomCategory = () => {
    const categories = ['UX Research', 'UI Design', 'User Testing', 'Design Systems', 'Case Studies', 'Design Tools', 'Accessibility', 'Mobile UX'];
    return categories[Math.floor(Math.random() * categories.length)];
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
    { name: 'UX Research', icon: '🔍', description: 'Gebruikersonderzoek & inzichten' },
    { name: 'UI Design', icon: '🎨', description: 'Visuele interface design' },
    { name: 'User Testing', icon: '🧪', description: 'Gebruikerstests & validatie' },
    { name: 'Design Systems', icon: '🏗️', description: 'Schaalbare design systemen' },
    { name: 'Case Studies', icon: '📋', description: 'Praktijkvoorbeelden & analyses' },
    { name: 'Design Tools', icon: '🛠️', description: 'Moderne design software' },
    { name: 'Accessibility', icon: '♿', description: 'Toegankelijk design voor iedereen' },
    { name: 'Mobile UX', icon: '📱', description: 'Mobiele gebruikerservaringen' }
  ];

  const filteredPosts = selectedCategory 
    ? posts.filter(post => post.category === selectedCategory)
    : posts;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-20 w-20 border-4 border-purple-200 mx-auto mb-6"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-600 animate-spin"></div>
          </div>
          <p className="text-purple-600 font-semibold text-lg">UX Design Studio laden...</p>
          <p className="text-purple-500 text-sm mt-2">Even geduld terwijl we de beste content voor je verzamelen</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Hero Header */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/95 via-pink-600/90 to-indigo-600/95"></div>
        {/* Background Elements */}
        <div className="absolute inset-0 bg-white/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
            <span className="mr-2">📚</span>
            UX Design Blog & Kennisbank
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="block">UX Design Kennis</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
              & Inzichten
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Duik in de wereld van UX design met artikelen, case studies en best practices 
            van ervaren designers en industry experts. Ontdek methoden die écht werken.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300">{posts.length}+</div>
              <div className="text-purple-200 text-sm">Artikelen</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
              <div className="text-3xl font-bold text-pink-300">{categories.length}</div>
              <div className="text-purple-200 text-sm">Categorieën</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
              <div className="text-3xl font-bold text-purple-300">24/7</div>
              <div className="text-purple-200 text-sm">Beschikbaar</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-16 border border-white/50">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🎯 Filter op Expertise Gebied
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kies een categorie om je te focussen op specifieke UX design onderwerpen 
              en ontdek content die perfect aansluit bij jouw interesses.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('')}
              className={`group px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === '' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-lg'
              }`}
            >
              <span className="flex items-center">
                🌟 Alle Categorieën
                <span className="ml-2 group-hover:rotate-12 transition-transform duration-300">✨</span>
              </span>
            </button>
            
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`group px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.name 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-lg'
                }`}
              >
                <span className="flex items-center">
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-8xl mb-6 animate-bounce">🔍</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Geen artikelen gevonden
            </h3>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              {selectedCategory 
                ? `Er zijn momenteel geen artikelen beschikbaar in de categorie "${selectedCategory}". Probeer een andere categorie of bekijk alle artikelen.`
                : 'Er zijn momenteel geen artikelen beschikbaar. We werken hard aan nieuwe content!'
              }
            </p>
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory('')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                🌟 Bekijk alle artikelen
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50">
                {post.image_url && (
                  <div className="h-56 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
                    <img 
                      src={post.image_url} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                )}
                
                <div className="p-8">
                  {/* Category Badge */}
                  {post.category && (
                    <div className="mb-6">
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-200/50">
                        <span className="mr-2">
                          {categories.find(cat => cat.name === post.category)?.icon || '📝'}
                        </span>
                        {post.category}
                      </span>
                    </div>
                  )}
                  
                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300 leading-tight line-clamp-2">
                    {post.title}
                  </h2>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 text-lg">
                    {post.excerpt || post.content.substring(0, 150)}...
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center bg-gray-50 px-3 py-2 rounded-xl">
                      <span className="mr-2">📅</span>
                      {new Date(post.created_at).toLocaleDateString('nl-NL', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    {post.author && (
                      <div className="flex items-center bg-gray-50 px-3 py-2 rounded-xl">
                        <span className="mr-2">👤</span>
                        {post.author}
                      </div>
                    )}
                  </div>
                  
                  {/* Read More Button */}
                  <Link 
                    href={`/Blog/${post.id}`}
                    className="group/btn inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden relative"
                  >
                    <span className="relative z-10 flex items-center">
                      📖 Lees het Volledige Artikel
                      <span className="ml-2 group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Data Source Info */}
        {dataSource === 'local' && (
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-8 max-w-3xl mx-auto shadow-lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Demo Mode Actief</h3>
              <p className="text-blue-800 text-lg leading-relaxed">
                Je bekijkt momenteel demo content ter demonstratie. Voor live artikelen, real-time updates 
                en een volledige UX design community, stel Supabase op zoals beschreven in de documentatie.
              </p>
              <div className="mt-6">
                <Link 
                  href="/admin"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300"
                >
                  🚀 Ga naar Admin Dashboard
                </Link>
              </div>
            </div>
          </div>
        )}

        {dataSource === 'online' && (
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-8 max-w-3xl mx-auto shadow-lg">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-green-900 mb-3">Online Data Mode</h3>
              <p className="text-green-800 text-lg leading-relaxed">
                Je bekijkt momenteel content van een online JSON API (JSONPlaceholder). Dit toont aan dat 
                de applicatie ook externe data bronnen kan gebruiken naast lokale en database data.
              </p>
              <div className="mt-6">
                <Link 
                  href="/admin"
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300"
                >
                  🚀 Ga naar Admin Dashboard
                </Link>
              </div>
            </div>
          </div>
        )}

        {dataSource === 'supabase' && (
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-3xl p-8 max-w-3xl mx-auto shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-purple-900 mb-3">Live Database Mode</h3>
              <p className="text-purple-800 text-lg leading-relaxed">
                Je bekijkt momenteel live content uit je Supabase database! Alle CRUD operaties 
                worden real-time gesynchroniseerd en opgeslagen in de cloud.
              </p>
              <div className="mt-6">
                <Link 
                  href="/admin"
                  className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300"
                >
                  🚀 Ga naar Admin Dashboard
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
