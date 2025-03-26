"use client"; // Dit markeert dit bestand als een client-side component

import { useState, useEffect } from 'react';

export default function Showcase() {
  const [posts, setPosts] = useState([]);  
  const [loading, setLoading] = useState(true);  

  // Haal de data op met fetch
  useEffect(() => {
    fetch('/cardData.json')  // Haal de data op uit een JSON-bestand
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);  // Zet loading op false als de data is opgehaald
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <main className="showcase-container">
        <h1 className="showcase-title">🚀 Ontdek de Kracht van Next.js</h1>
        <p className="showcase-text">
          Next.js biedt krachtige tools zoals server-side rendering (SSR) en statische sitegeneratie (SSG) die zorgen voor verbeterde prestaties en SEO. Het is het ideale framework voor zowel statische als dynamische webapplicaties.
        </p>
        <button className="showcase-button">Lees Meer</button>

        {/* Als data aan het laden is, toon een laadbericht */}
        {loading ? (
          <p className="loading-text">Laden...</p>
        ) : (
          <div className="card-container">
            {posts.map(post => (  // Gebruik de aangepaste cardData
              <div key={post.id} className="card">
                <h3 className="card-title">
                  {post.title} {/* Gebruiken de aangepaste titels */}
                </h3>
                <p className="card-body">
                  {post.body} {/* Gebruiken de aangepaste teksten */}
                </p>
                <a href="#" className="card-link">Lees verder</a>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
