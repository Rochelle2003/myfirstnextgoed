'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '../Lib/supabaseClient';
import Link from 'next/link';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState('local'); // 'local' of 'supabase'

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      if (supabase) {
        // Probeer Supabase te gebruiken
        try {
          const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .order('created_at', { ascending: false });

          if (error) throw error;
          
          if (data && data.length > 0) {
            setPosts(data);
            setDataSource('supabase');
          } else {
            // Fallback naar lokale data
            await fetchLocalData();
          }
        } catch (supabaseError) {
          console.warn('Supabase error, falling back to local data:', supabaseError);
          // Fallback naar lokale data
          await fetchLocalData();
        }
      } else {
        // Supabase niet beschikbaar, gebruik lokale data
        await fetchLocalData();
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      // Fallback naar lokale data
      await fetchLocalData();
    } finally {
      setLoading(false);
    }
  };

  const fetchLocalData = async () => {
    try {
      const response = await fetch('/demoData.json');
      const data = await response.json();
      setPosts(data.blog_posts || []);
      setDataSource('local');
    } catch (error) {
      console.error('Error fetching local data:', error);
      setPosts([]);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">📝 Next.js Blog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Lees de laatste updates, artikelen en tutorials over Next.js en web development.
        </p>
        
        {/* Data source indicator */}
        <div className="mt-4">
          {dataSource === 'local' ? (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Demo Mode - Lokale Data
            </div>
          ) : (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Live Database - Supabase
            </div>
          )}
        </div>
      </div>

      {/* Blog posts grid */}
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nog geen blog posts beschikbaar.</p>
          <p className="text-gray-400 mt-2">
            {dataSource === 'local' 
              ? 'Demo data kon niet worden geladen.' 
              : 'Log in als admin om posts toe te voegen.'
            }
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {post.image_url && (
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={post.image_url} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{new Date(post.created_at).toLocaleDateString('nl-NL')}</span>
                  {post.category && (
                    <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt || post.content.substring(0, 150)}...
                </p>
                <Link 
                  href={`/Blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Lees Meer
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Demo info */}
      {dataSource === 'local' && (
        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Demo Mode</h3>
          <p className="text-blue-800 mb-4">
            Je bekijkt momenteel demo data uit een lokaal JSON bestand. Om de volledige functionaliteit te ervaren:
          </p>
          <ol className="text-blue-800 list-decimal list-inside space-y-1">
            <li>Maak een Supabase account aan op <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="underline">supabase.com</a></li>
            <li>Voer het database schema uit uit <code className="bg-blue-100 px-1 rounded">database-schema.sql</code></li>
            <li>Voeg je credentials toe aan <code className="bg-blue-100 px-1 rounded">.env.local</code></li>
            <li>Herstart de development server</li>
          </ol>
        </div>
      )}
    </div>
  );
}
