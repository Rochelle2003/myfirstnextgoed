'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '../../Lib/supabaseClient';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function BlogPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      fetchPost(params.id);
    }
  }, [params.id]);

  const fetchPost = async (id) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
      router.push('/Blog');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Post niet gevonden</h1>
        <Link href="/Blog" className="text-blue-600 hover:text-blue-800">
          Terug naar Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back button */}
      <div className="mb-6">
        <Link 
          href="/Blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Terug naar Blog
        </Link>
      </div>

      {/* Blog post content */}
      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        {post.image_url && (
          <div className="h-64 md:h-96 bg-gray-200 overflow-hidden">
            <img 
              src={post.image_url} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="p-8">
          {/* Meta information */}
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>{new Date(post.created_at).toLocaleDateString('nl-NL')}</span>
            {post.category && (
              <span className="ml-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {post.category}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              {post.excerpt}
            </p>
            
            <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </div>

          {/* Author info if available */}
          {post.author && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Geschreven door <span className="font-medium">{post.author}</span>
              </p>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
