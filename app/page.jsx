'use client';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/95 via-pink-600/90 to-indigo-600/95"></div>
        {/* Background Elements */}
        <div className="absolute inset-0 bg-white/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
            <span className="mr-2">🚀</span>
            UX Design Studio
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="block">Welkom bij Onze</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
              UX Design Blog
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Ontdek geweldige content over UX design, user research en design systemen. 
            Sluit je aan bij onze community en begin met het delen van je kennis.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/Blog"
              className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              📚 Bekijk Blog Posts
            </Link>
            <Link
              href="/admin"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              🚀 Admin Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ✨ Waarom Onze Blog?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ontdek de voordelen van onze moderne blog platform gebouwd met Next.js en Tailwind CSS.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Snel & Modern</h3>
              <p className="text-gray-600 leading-relaxed">
                Gebouwd met Next.js en Tailwind CSS voor de beste performance en developer experience.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mooi Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Modern en responsive design met Tailwind CSS voor een geweldige gebruikerservaring.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Veilig & Betrouwbaar</h3>
              <p className="text-gray-600 leading-relaxed">
                Robuuste authenticatie en beveiliging voor je content en gebruikers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

