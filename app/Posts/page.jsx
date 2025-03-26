'use client';
import React from 'react';

const data = [
  { id: 1, title: "Card 1", content: "Dit is kaart 1" },
  { id: 2, title: "Card 2", content: "Dit is kaart 2" },
  { id: 3, title: "Card 3", content: "Dit is kaart 3" }
];

export default function PostsPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>JSON Cards</h1>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "8px",
              width: "200px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

