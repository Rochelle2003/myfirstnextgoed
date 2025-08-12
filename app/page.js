import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm border border-white/30">
              🎨 UX Design Studio
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Creëer Betekenisvolle
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
              Gebruikerservaringen
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-purple-100 leading-relaxed">
            Ontdek de kunst van UX design met onze uitgebreide collectie artikelen, case studies en design insights. 
            Leer van experts en verbeter je design skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/Blog"
              className="group bg-white text-purple-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-purple-50 transition-all duration-300 shadow-2xl hover:shadow-purple-200/50 transform hover:-translate-y-1"
            >
              🚀 Verken Artikelen
              <span className="block text-sm font-normal text-purple-500 group-hover:text-purple-600">
                Ontdek UX design kennis
              </span>
            </Link>
            <Link 
              href="/register"
              className="group border-2 border-white/80 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1"
            >
              ✨ Start Je Reis
              <span className="block text-sm font-normal text-purple-200 group-hover:text-white">
                Word lid van onze community
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Waarom UX Design Studio?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Onze platform combineert moderne technologie met diepgaande UX kennis om je te helpen excelleren in design
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group text-center p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">User-Centered Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Leer hoe je interfaces ontwerpt die écht aansluiten bij de behoeften van je gebruikers. 
                Van research tot prototyping.
              </p>
            </div>
            
            <div className="group text-center p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Evidence-Based Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Ontdek case studies en onderzoeken die je design beslissingen ondersteunen. 
                Data-driven design voor betere resultaten.
              </p>
            </div>
            
            <div className="group text-center p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Moderne Tools & Trends</h3>
              <p className="text-gray-600 leading-relaxed">
                Blijf op de hoogte van de nieuwste design tools, trends en best practices. 
                Van Figma tot design systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Verken UX Design Categorieën
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Duik in specifieke onderwerpen die je design skills naar het volgende niveau tillen
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🔍', title: 'UX Research', color: 'from-purple-500 to-pink-500' },
              { icon: '🎨', title: 'UI Design', color: 'from-blue-500 to-indigo-500' },
              { icon: '🧪', title: 'User Testing', color: 'from-green-500 to-emerald-500' },
              { icon: '🏗️', title: 'Design Systems', color: 'from-orange-500 to-red-500' },
              { icon: '📱', title: 'Mobile UX', color: 'from-teal-500 to-cyan-500' },
              { icon: '♿', title: 'Accessibility', color: 'from-indigo-500 to-purple-500' },
              { icon: '📊', title: 'Case Studies', color: 'from-pink-500 to-rose-500' },
              { icon: '🛠️', title: 'Design Tools', color: 'from-gray-500 to-slate-500' }
            ].map((category, index) => (
              <div key={index} className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-white hover:to-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-gray-200 hover:border-gray-300">
                <div className={`bg-gradient-to-br ${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {category.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Klaar om je UX Design Skills te Verbeteren?
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Word lid van onze community van UX designers en krijg toegang tot exclusieve content, 
            case studies en design insights die je carrière naar het volgende niveau tillen.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/register"
              className="group bg-white text-purple-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-purple-50 transition-all duration-300 shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1"
            >
              🚀 Start Vandaag Nog
              <span className="block text-sm font-normal text-purple-500 group-hover:text-purple-600">
                Gratis account aanmaken
              </span>
            </Link>
            <Link 
              href="/Blog"
              className="group border-2 border-white/80 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1"
            >
              📚 Verken Artikelen
              <span className="block text-sm font-normal text-purple-200 group-hover:text-white">
                Bekijk onze content
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                🎨 UX Design Studio
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Je ultieme bron voor UX design kennis, case studies en professionele ontwikkeling. 
                Samen maken we het web gebruiksvriendelijker.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Navigatie</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors flex items-center">🏠 Home</Link></li>
                <li><Link href="/Blog" className="text-gray-300 hover:text-white transition-colors flex items-center">📚 Blog</Link></li>
                <li><Link href="/Showcase" className="text-gray-300 hover:text-white transition-colors flex items-center">🌟 Showcase</Link></li>
                <li><Link href="/Docs" className="text-gray-300 hover:text-white transition-colors flex items-center">📖 Documentatie</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Account</h4>
              <ul className="space-y-3">
                <li><Link href="/login" className="text-gray-300 hover:text-white transition-colors flex items-center">🔑 Inloggen</Link></li>
                <li><Link href="/register" className="text-gray-300 hover:text-white transition-colors flex items-center">✨ Registreren</Link></li>
                <li><Link href="/admin" className="text-gray-300 hover:text-white transition-colors flex items-center">⚙️ Admin Dashboard</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Technologieën</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">⚛️ Next.js 15</li>
                <li className="flex items-center">⚡ React 19</li>
                <li className="flex items-center">🔥 Supabase</li>
                <li className="flex items-center">🎨 Tailwind CSS</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2024 UX Design Studio. Alle rechten voorbehouden. | Gemaakt met ❤️ voor designers</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
