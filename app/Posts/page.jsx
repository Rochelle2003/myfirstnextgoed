'use client';
import React from 'react';
import Link from 'next/link';

export default function Posts() {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with Next.js 15',
      excerpt: 'Een complete gids voor het opstarten van je eerste Next.js 15 project met alle nieuwe features.',
      author: 'Web Developer',
      date: '2024-01-15',
      category: 'Tutorial',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Mastering Tailwind CSS',
      excerpt: 'Leer hoe je Tailwind CSS effectief kunt gebruiken voor moderne, responsive web designs.',
      author: 'CSS Expert',
      date: '2024-01-12',
      category: 'Design',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Supabase Authentication Guide',
      excerpt: 'Implementeer veilige authenticatie in je Next.js applicatie met Supabase Auth.',
      author: 'Security Specialist',
      date: '2024-01-10',
      category: 'Security',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Building a Blog with Next.js',
      excerpt: 'Stap-voor-stap tutorial voor het bouwen van een volledig functionele blog website.',
      author: 'Full Stack Developer',
      date: '2024-01-08',
      category: 'Tutorial',
      readTime: '15 min',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Performance Optimization Tips',
      excerpt: 'Bewezen technieken om je Next.js applicatie te optimaliseren voor betere prestaties.',
      author: 'Performance Engineer',
      date: '2024-01-05',
      category: 'Performance',
      readTime: '14 min',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Deploying to Vercel',
      excerpt: 'Een complete gids voor het deployen van je Next.js applicatie naar Vercel.',
      author: 'DevOps Engineer',
      date: '2024-01-03',
      category: 'Deployment',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop'
    }
  ];

  const categories = ['All', 'Tutorial', 'Design', 'Security', 'Performance', 'Deployment'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Alle Posts
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Ontdek onze uitgebreide collectie van artikelen, tutorials en gidsen over web development, 
            Next.js en moderne technologieën.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All' 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.readTime} lezen
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>Door {post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString('nl-NL')}</span>
                  </div>
                  
                  <Link 
                    href={`/Posts/${post.id}`}
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium transition-colors"
                  >
                    Lees Meer
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Blijf Op De Hoogte
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schrijf je in voor onze nieuwsbrief en ontvang de nieuwste artikelen en updates direct in je inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Je email adres"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                Inschrijven
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Wil Je Ook Schrijven?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Heb je kennis te delen? Word een contributor en help anderen met jouw expertise!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Word Contributor
            </Link>
            <Link 
              href="/Blog"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors"
            >
              Bekijk Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

