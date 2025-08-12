import React from 'react';
import Link from 'next/link';

export default function Docs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-teal-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Documentatie
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Leer hoe je onze Next.js Blog website kunt gebruiken, aanpassen en uitbreiden. 
            Van installatie tot geavanceerde customisatie.
          </p>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2>🚀 Snelle Start</h2>
            <p>
              Welkom bij de documentatie van onze Next.js Blog website! Deze gids helpt je om snel 
              aan de slag te gaan en alle functionaliteiten te begrijpen.
            </p>

            <h3>Installatie</h3>
            <ol>
              <li>Clone het project repository</li>
              <li>Installeer dependencies met <code>npm install</code></li>
              <li>Configureer je Supabase credentials</li>
              <li>Start de development server met <code>npm run dev</code></li>
            </ol>

            <h3>Supabase Setup</h3>
            <p>
              Voor de database functionaliteit heb je een Supabase account nodig:
            </p>
            <ul>
              <li>Maak een account aan op <a href="https://supabase.com" target="_blank" rel="noopener noreferrer">supabase.com</a></li>
              <li>Maak een nieuw project aan</li>
              <li>Voer het database schema uit uit <code>database-schema.sql</code></li>
              <li>Voeg je credentials toe aan <code>.env.local</code></li>
            </ul>

            <h2>📝 Blog Functionaliteit</h2>
            <p>
              De website biedt een volledig blog systeem met de volgende features:
            </p>

            <h3>Voor Bezoekers</h3>
            <ul>
              <li><strong>Blog Overzicht</strong>: Bekijk alle blog posts op de <Link href="/Blog">Blog pagina</Link></li>
              <li><strong>Individuele Posts</strong>: Lees volledige artikelen met dynamische routing</li>
              <li><strong>Categorieën</strong>: Filter posts op onderwerp</li>
              <li><strong>Responsive Design</strong>: Werkt perfect op alle apparaten</li>
            </ul>

            <h3>Voor Admins</h3>
            <ul>
              <li><strong>Content Management</strong>: Volledig CRUD systeem voor blog posts</li>
              <li><strong>Admin Dashboard</strong>: Overzichtelijk beheer van alle content</li>
              <li><strong>Media Ondersteuning</strong>: Voeg afbeeldingen toe aan je posts</li>
              <li><strong>SEO Optimalisatie</strong>: Meta beschrijvingen en excerpts</li>
            </ul>

            <h2>🔐 Authenticatie</h2>
            <p>
              De website gebruikt Supabase Auth voor veilige gebruikersaccounts:
            </p>
            <ul>
              <li><strong>Registratie</strong>: Gebruikers kunnen accounts aanmaken</li>
              <li><strong>Login</strong>: Veilige authenticatie met email/wachtwoord</li>
              <li><strong>Beveiliging</strong>: Row Level Security (RLS) in de database</li>
              <li><strong>Session Management</strong>: Automatische login status tracking</li>
            </ul>

            <h2>🎨 Customisatie</h2>
            <p>
              De website is volledig aanpasbaar aan jouw wensen:
            </p>

            <h3>Styling</h3>
            <ul>
              <li><strong>Tailwind CSS</strong>: Moderne utility-first CSS framework</li>
              <li><strong>Custom Components</strong>: Herbruikbare componenten in <code>app/components/</code></li>
              <li><strong>Responsive Design</strong>: Mobile-first approach</li>
              <li><strong>Dark Mode</strong>: Kan eenvoudig worden toegevoegd</li>
            </ul>

            <h3>Functionaliteit</h3>
            <ul>
              <li><strong>Nieuwe Pagina's</strong>: Voeg eenvoudig nieuwe routes toe</li>
              <li><strong>API Routes</strong>: Maak backend endpoints in <code>app/api/</code></li>
              <li><strong>Database Uitbreiding</strong>: Voeg nieuwe tabellen toe via Supabase</li>
              <li><strong>Third-party Integraties</strong>: Voeg externe services toe</li>
            </ul>

            <h2>🚀 Deployment</h2>
            <p>
              De website kan eenvoudig worden gedeployed op verschillende platforms:
            </p>
            <ul>
              <li><strong>Vercel</strong>: Aanbevolen voor Next.js applicaties</li>
              <li><strong>Netlify</strong>: Goede alternatief met CI/CD</li>
              <li><strong>Railway</strong>: Voor full-stack applicaties</li>
              <li><strong>Docker</strong>: Voor containerized deployment</li>
            </ul>

            <h3>Environment Variables</h3>
            <p>
              Zorg ervoor dat je de volgende environment variables instelt bij deployment:
            </p>
            <pre><code>NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key</code></pre>

            <h2>🔧 Development</h2>
            <p>
              Voor developers biedt de website de volgende tools:
            </p>

            <h3>Scripts</h3>
            <ul>
              <li><code>npm run dev</code> - Start development server</li>
              <li><code>npm run build</code> - Build voor productie</li>
              <li><code>npm run start</code> - Start productie server</li>
              <li><code>npm run lint</code> - Run ESLint</li>
            </ul>

            <h3>Code Structuur</h3>
            <pre><code>app/
├── components/     # Herbruikbare componenten
├── Blog/          # Blog functionaliteit
├── admin/         # Admin dashboard
├── login/         # Authenticatie
├── register/      # Gebruikersregistratie
├── Lib/           # Utilities en configuratie
└── globals.css    # Globale stijlen</code></pre>

            <h2>🐛 Troubleshooting</h2>
            <p>
              Veelvoorkomende problemen en oplossingen:
            </p>

            <h3>Database Verbinding</h3>
            <ul>
              <li>Controleer je Supabase credentials</li>
              <li>Zorg dat je database schema is uitgevoerd</li>
              <li>Verifieer je RLS policies</li>
            </ul>

            <h3>Build Errors</h3>
            <ul>
              <li>Verwijder <code>node_modules</code> en installeer opnieuw</li>
              <li>Controleer je Node.js versie (18+ vereist)</li>
              <li>Update je dependencies</li>
            </ul>

            <h2>📚 Meer Informatie</h2>
            <p>
              Voor meer informatie en hulp:
            </p>
            <ul>
              <li><a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">Next.js Documentatie</a></li>
              <li><a href="https://supabase.com/docs" target="_blank" rel="noopener noreferrer">Supabase Documentatie</a></li>
              <li><a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer">Tailwind CSS Documentatie</a></li>
              <li><a href="https://github.com/vercel/next.js" target="_blank" rel="noopener noreferrer">Next.js GitHub</a></li>
            </ul>

            <h2>🤝 Bijdragen</h2>
            <p>
              Bijdragen zijn welkom! Voel je vrij om:
            </p>
            <ul>
              <li>Issues te melden</li>
              <li>Feature requests in te dienen</li>
              <li>Pull requests te maken</li>
              <li>Documentatie te verbeteren</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-8">
              <p className="text-blue-700">
                <strong>Tip:</strong> Deze documentatie wordt regelmatig bijgewerkt. 
                Controleer regelmatig voor nieuwe features en verbeteringen!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Klaar om te beginnen?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start met het bouwen van je eigen blog website of neem contact op voor hulp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/Blog"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Bekijk Blog
            </Link>
            <Link 
              href="/admin"
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
            >
              Admin Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
