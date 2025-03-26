import React from 'react'
export default function Showcase() {
  return (
    <>
    <main className="blog-container">
      {/* Titel van de Blog-pagina */}
      <h1 className="blog-title">📝 Next.js Blog</h1>

      {/* Subtitel */}
      <p className="blog-subtitle">
        Lees de laatste updates, artikelen en tutorials over Next.js.
      </p>

      {/* Lijst van blogposts */}
      <div className="blog-posts">
        <div className="blog-post">
          <h3>Wat is Next.js?</h3>
          <p>
            Next.js is een krachtige React framework dat server-side rendering (SSR) en statische site generatie (SSG) ondersteunt, waardoor het ideaal is voor SEO en prestaties.
          </p>
          <a href="#" className="read-more-button">
            Lees Meer
          </a>
        </div>

        <div className="blog-post">
          <h3>Waarom Next.js kiezen?</h3>
          <p>
            Leer waarom zoveel developers Next.js kiezen voor hun applicaties: van eenvoud in routing tot geweldige prestaties.
          </p>
          <a href="#" className="read-more-button">
            Lees Meer
          </a>
        </div>

        <div className="blog-post">
          <h3>Hoe Next.js de gebruikerservaring verbetert</h3>
          <p>
            Ontdek hoe Next.js door middel van server-side rendering de tijd tot eerste byte (TTFB) minimaliseert en de algehele gebruikerservaring verbetert.
          </p>
          <a href="#" className="read-more-button">
            Lees Meer
          </a>
        </div>

        <div className="blog-post">
          <h3>Next.js en SEO: Het perfecte duo</h3>
          <p>
            In dit artikel verkennen we hoe Next.js je helpt om beter vindbaar te zijn in zoekmachines door gebruik te maken van server-side rendering.
          </p>
          <a href="#" className="read-more-button">
            Lees Meer
          </a>
        </div>
      </div>
    </main>
  </>
 )
}
