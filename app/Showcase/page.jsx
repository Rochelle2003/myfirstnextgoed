import React from 'react';
import Link from 'next/link';

export default function Showcase() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Project Showcase
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Ontdek onze beste projecten en creaties. Van web applicaties tot mobiele apps, 
            we laten zien wat er mogelijk is met moderne technologieën.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Onze Projecten
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">E-commerce Platform</h3>
                <p className="text-gray-600 mb-4">
                  Een volledig functioneel e-commerce platform gebouwd met Next.js en Stripe integratie.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Next.js</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Stripe</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">Tailwind</span>
                </div>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  Bekijk Project →
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobiele App</h3>
                <p className="text-gray-600 mb-4">
                  Een cross-platform mobiele app voor fitness tracking en gezondheidsmonitoring.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">React Native</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Firebase</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">TypeScript</span>
                </div>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  Bekijk Project →
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dashboard Systeem</h3>
                <p className="text-gray-600 mb-4">
                  Een uitgebreid dashboard voor data visualisatie en bedrijfsanalytics.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Vue.js</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">D3.js</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Node.js</span>
                </div>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  Bekijk Project →
                </Link>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2m-6 0h6m-6 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Content Management</h3>
                <p className="text-gray-600 mb-4">
                  Een krachtig CMS systeem voor het beheren van digitale content en media.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Laravel</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">MySQL</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Vue.js</span>
                </div>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  Bekijk Project →
                </Link>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Tool</h3>
                <p className="text-gray-600 mb-4">
                  Een tool voor het monitoren en optimaliseren van website prestaties.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Python</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">FastAPI</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">React</span>
                </div>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  Bekijk Project →
                </Link>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">API Gateway</h3>
                <p className="text-gray-600 mb-4">
                  Een schaalbare API gateway voor microservices architectuur.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Go</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Docker</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Kubernetes</span>
                </div>
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  Bekijk Project →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Klaar om samen te werken?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Laat ons je volgende project tot leven brengen met moderne technologieën en creatieve oplossingen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Neem Contact Op
            </Link>
            <Link 
              href="/Blog"
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
            >
              Bekijk Onze Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
