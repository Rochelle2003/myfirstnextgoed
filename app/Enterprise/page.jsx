import React from 'react'


export default function Docs() {
  return (
      <main className="enterprise-container">
        {/* Titel van de Enterprise-pagina */}
        <h1 className="enterprise-title">🏢 Next.js voor Enterprise</h1>

        {/* Subtitel */}
        <p className="enterprise-subtitle">
          Next.js biedt de prestaties, schaalbaarheid en enterprise-grade functies die bedrijven nodig hebben om succesvolle digitale producten te bouwen.
        </p>

        {/* Sectie met voordelen voor Enterprise */}
        <div className="enterprise-benefits">
          <div className="benefit-item">
            <h3>Prestaties op schaal</h3>
            <p>
              Next.js biedt uitzonderlijke prestaties, zelfs voor de meest veeleisende apps, dankzij server-side rendering en statische generatie.
            </p>
          </div>

          <div className="benefit-item">
            <h3>Beveiliging van bedrijfsniveau</h3>
            <p>
              Next.js biedt robuuste beveiligingsmaatregelen om de veiligheid van je applicaties te waarborgen, wat essentieel is voor bedrijven.
            </p>
          </div>

          <div className="benefit-item">
            <h3>Naadloze integraties</h3>
            <p>
              Integreer eenvoudig met populaire tools en backends, zoals CMS’en, databases en cloudservices, dankzij de flexibele API.
            </p>
          </div>

          <div className="benefit-item">
            <h3>Moderne architectuur</h3>
            <p>
              Next.js biedt een moderne ontwikkelervaring met features zoals API-routes, dynamische imports en geavanceerde optimalisaties.
            </p>
          </div>
        </div>

        {/* Call-to-action knop voor bedrijven */}
        <button className="enterprise-cta">
          Ontdek hoe Next.js je bedrijf kan helpen
        </button>
      </main>
)
}