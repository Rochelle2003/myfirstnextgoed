'use client';
import React from 'react';
import Link from 'next/link';

export default function Posts() {
  const posts = [
    {
      id: 1,
      title: '10 UX Principles voor Betere Conversies',
      excerpt: 'Ontdek de fundamentele UX principes die je website of app kunnen transformeren van een digitale brochure naar een conversie-machine.',
      author: 'Sarah Chen',
      date: '2024-01-15',
      category: 'UX Research',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Design Systems: De Complete Gids',
      excerpt: 'Leer hoe je een robuust design system opbouwt dat consistentie, efficiëntie en schaalbaarheid garandeert voor je hele organisatie.',
      author: 'Marcus Rodriguez',
      date: '2024-01-12',
      category: 'Design Systems',
      readTime: '15 min',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'User Testing Methoden die Écht Werken',
      excerpt: 'Verken bewezen user testing methoden die je helpen om echte gebruikersinzichten te verzamelen en je designs te valideren.',
      author: 'Emma Thompson',
      date: '2024-01-10',
      category: 'User Testing',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Mobile-First Design in 2024',
      excerpt: 'Blijf voorop lopen met de nieuwste mobile-first design trends en best practices voor een uitstekende mobiele gebruikerservaring.',
      author: 'Alex Kim',
      date: '2024-01-08',
      category: 'Mobile UX',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Accessibility: Design voor Iedereen',
      excerpt: 'Maak je designs toegankelijk voor alle gebruikers door deze essentiële accessibility principes en technieken te implementeren.',
      author: 'David Park',
      date: '2024-01-05',
      category: 'Accessibility',
      readTime: '14 min',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Figma vs Sketch: Welke Tool Kies Je?',
      excerpt: 'Een uitgebreide vergelijking van de populairste design tools om je te helpen de juiste keuze te maken voor je workflow.',
      author: 'Lisa Wang',
      date: '2024-01-03',
      category: 'Design Tools',
      readTime: '9 min',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop'
    }
  ];

  const categories = [
    'UX Research', 'UI Design', 'User Testing', 'Design Systems', 
    'Case Studies', 'Design Tools', 'Accessibility', 'Mobile UX'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm border border-white/30">
              📝 UX Design Artikelen
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            UX Design Kennis
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
              & Best Practices
            </span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Duik in onze collectie van zorgvuldig gecureerde UX design artikelen, 
            geschreven door ervaren professionals en industry experts.
          </p>
        </div>
      </div>

      {/* Featured Post */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          🌟 Uitgelichte Artikel
        </h2>
        {posts.filter(post => post.featured).map(post => (
          <div key={post.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">⭐ Uitgelicht</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">👤</span>
                    {post.author}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">📅</span>
                    {new Date(post.date).toLocaleDateString('nl-NL')}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">⏱️</span>
                    {post.readTime}
                  </div>
                </div>
                <Link 
                  href={`/Blog/${post.id}`}
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  📖 Lees het Volledige Artikel
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* All Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          📚 Alle UX Design Artikelen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.filter(post => !post.featured).map((post) => (
            <article key={post.id} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800">
                    {post.category}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <span className="mr-2">👤</span>
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">⏱️</span>
                    {post.readTime}
                  </div>
                </div>
                
                {/* Date */}
                <div className="text-sm text-gray-500 mb-4">
                  <span className="mr-2">📅</span>
                  {new Date(post.date).toLocaleDateString('nl-NL')}
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
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Wil je Meer UX Design Kennis?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Word lid van onze community en krijg toegang tot exclusieve content, 
            case studies en design insights die je carrière naar het volgende niveau tillen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register"
              className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-purple-50 transition-all duration-200 shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1"
            >
              🚀 Word Lid
            </Link>
            <Link 
              href="/Blog"
              className="border-2 border-white/80 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-200 transform hover:-translate-y-1"
            >
              📚 Bekijk Alle Artikelen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

