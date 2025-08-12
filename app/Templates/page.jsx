import React from 'react';
import Link from 'next/link';

export default function Templates() {
  const templates = [
    {
      id: 1,
      name: 'Blog Template',
      description: 'Een complete blog website template met alle benodigde functionaliteiten.',
      features: ['Blog posts', 'Categorieën', 'Admin dashboard', 'Responsive design'],
      technologies: ['Next.js', 'Tailwind CSS', 'Supabase'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop',
      price: 'Gratis',
      category: 'Blog'
    },
    {
      id: 2,
      name: 'E-commerce Template',
      description: 'Een volledig functioneel e-commerce platform met winkelwagen en betalingen.',
      features: ['Product catalogus', 'Winkelwagen', 'Betalingen', 'Admin panel'],
      technologies: ['Next.js', 'Stripe', 'Tailwind CSS', 'Supabase'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      price: '€99',
      category: 'E-commerce'
    },
    {
      id: 3,
      name: 'Portfolio Template',
      description: 'Een professionele portfolio website voor creatievelingen en freelancers.',
      features: ['Project showcase', 'Over mij', 'Contact formulier', 'Blog sectie'],
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Supabase'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop',
      price: '€49',
      category: 'Portfolio'
    },
    {
      id: 4,
      name: 'Dashboard Template',
      description: 'Een krachtig admin dashboard met data visualisatie en analytics.',
      features: ['Data visualisatie', 'Grafieken', 'Tabellen', 'Filters'],
      technologies: ['Next.js', 'Chart.js', 'Tailwind CSS', 'Supabase'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      price: '€149',
      category: 'Dashboard'
    },
    {
      id: 5,
      name: 'Landing Page Template',
      description: 'Een conversie-geoptimaliseerde landing page voor marketing campagnes.',
      features: ['Hero sectie', 'Features', 'Testimonials', 'CTA buttons'],
      technologies: ['Next.js', 'Tailwind CSS', 'AOS animations', 'Supabase'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      price: '€29',
      category: 'Landing Page'
    },
    {
      id: 6,
      name: 'SaaS Template',
      description: 'Een complete SaaS website template met authenticatie en dashboard.',
      features: ['Authenticatie', 'Dashboard', 'Pricing', 'Documentatie'],
      technologies: ['Next.js', 'Supabase Auth', 'Tailwind CSS', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop',
      price: '€199',
      category: 'SaaS'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Website Templates
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professionele, kant-en-klare website templates gebouwd met moderne technologieën. 
            Start snel met je volgende project!
          </p>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Beschikbare Templates
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div key={template.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={template.image} 
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {template.category}
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      {template.price}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {template.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {template.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {template.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologieën:</h4>
                    <div className="flex flex-wrap gap-2">
                      {template.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Demo Bekijken
                    </button>
                    <button className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Waarom Onze Templates?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Snelle Start</h3>
              <p className="text-gray-600">
                Begin direct met ontwikkelen. Alle templates zijn volledig functioneel en klaar voor gebruik.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kwaliteit</h3>
              <p className="text-gray-600">
                Gebouwd met moderne best practices, SEO optimalisatie en responsive design.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ondersteuning</h3>
              <p className="text-gray-600">
                Uitgebreide documentatie en support voor alle templates. We helpen je op weg!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Klaar om te beginnen?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Kies een template en start vandaag nog met je volgende project!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Neem Contact Op
            </Link>
            <Link 
              href="/Docs"
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
            >
              Bekijk Documentatie
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}