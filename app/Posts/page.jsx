"use client";

import { useEffect, useState } from "react";
import { supabase } from "../Lib/supabaseClient";
import Link from "next/link";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      let { data, error } = await supabase.from("posts").select("*");
      if (error) {
        console.error("Fout bij ophalen van posts:", error.message);
      } else {
        setPosts(data);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <main className="container">
      <h1>📢 Blogposts</h1>
      <Link href="/">⬅️ Terug naar Home</Link>

      {loading ? <p>Loading posts...</p> : null}

      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))
        ) : (
          <p>Geen posts gevonden.</p>
        )}
      </ul>
    </main>
  );
}

