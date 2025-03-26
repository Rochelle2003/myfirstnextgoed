import React from 'react'

export default function Showcase() {
  return (
    <main className="templates-container">
      {/* Titel van de Templates-pagina */}
      <h1 className="templates-title">🎨 Next.js Templates</h1>

      {/* Subtitel */}
      <p className="templates-subtitle">
        Kies een template om snel aan de slag te gaan met Next.js! Van eenvoudige statische sites tot volledige e-commerceoplossingen.
      </p>

      {/* Lijst van templates */}
      <div className="templates-list">
        <div className="template-item">
          <h3>Basic Starter Template</h3>
          <p>
            Begin eenvoudig met een minimalistische template die je kunt uitbreiden naar wens.
          </p>
          <a href="#" className="template-button">
            Gebruik Template
          </a>
        </div>

        <div className="template-item">
          <h3>Blog Template</h3>
          <p>
            Start je eigen blog met deze sjabloon, ideaal voor artikelen en nieuws.
          </p>
          <a href="#" className="template-button">
            Gebruik Template
          </a>
        </div>

        <div className="template-item">
          <h3>E-commerce Template</h3>
          <p>
            Bouw een moderne en snelle webshop met deze kant-en-klare e-commerce sjabloon.
          </p>
          <a href="#" className="template-button">
            Gebruik Template
          </a>
        </div>

        <div className="template-item">
          <h3>Portfolio Template</h3>
          <p>
            Laat je werk zien met een sjabloon die perfect is voor portfolio’s en persoonlijke websites.
          </p>
          <a href="#" className="template-button">
            Gebruik Template
          </a>
        </div>
      </div>
    </main>
    )
}