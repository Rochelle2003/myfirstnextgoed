import React from 'react'

export default function Docs() {
  return (
  
      <main className="docs-container">
        {/* Titel van de Docs-pagina */}
        <h1 className="docs-title">📚 Next.js Documentatie</h1>

        {/* Subtitel */}
        <p className="docs-subtitle">
          Next.js maakt webontwikkeling sneller en eenvoudiger. Leer meer over de krachtige functies die het biedt!
        </p>

        {/* Lijst van functies van Next.js */}
        <div className="docs-list">
          <div className="docs-item">
            <h3>Server-side Rendering</h3>
            <p>
              Maak dynamische webpagina’s die snel en SEO-vriendelijk zijn door gebruik te maken van server-side rendering (SSR).
            </p>
          </div>

          <div className="docs-item">
            <h3>Statische Site Generatie</h3>
            <p>
              Genereer statische pagina’s voor de snelste prestaties en schaalbaarheid.
            </p>
          </div>

          <div className="docs-item">
            <h3>API-routes</h3>
            <p>
              Maak eenvoudig API-endpoints binnen je Next.js-app, ideaal voor back-end functionaliteit.
            </p>
          </div>
        </div>

        {/* Call-to-action knop */}
        <button className="cta-button">Start met Next.js</button>
      </main>
  )
}
