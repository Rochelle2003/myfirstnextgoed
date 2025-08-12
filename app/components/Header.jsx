'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '../Lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [demoMode, setDemoMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Alleen authenticatie checken als Supabase beschikbaar is
    if (supabase) {
      checkSession();
    } else {
      checkDemoSession();
    }
  }, []);

  const checkSession = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);

      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
      });
    } catch (error) {
      console.error('Error checking session:', error);
      // Als er een error is, schakel over naar demo mode
      setDemoMode(true);
      checkDemoSession();
    } finally {
      setLoading(false);
    }
  };

  const checkDemoSession = () => {
    try {
      const storedUser = localStorage.getItem('demoUser');
      if (storedUser) {
        setSession(JSON.parse(storedUser));
        setDemoMode(true);
      }
    } catch (error) {
      console.error('Error checking demo session:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    if (supabase) {
      try {
        await supabase.auth.signOut();
        router.push('/login');
      } catch (error) {
        console.error('Error signing out:', error);
      }
    } else if (demoMode) {
      // Demo logout
      localStorage.removeItem('demoUser');
      setSession(null);
      setDemoMode(false);
      router.push('/login');
    }
  };

  if (loading) {
    return (
      <header className="bg-white shadow-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
              NEXT.JS
            </Link>
            <div className="animate-pulse bg-gray-200 h-6 w-32 rounded"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
            NEXT.JS
          </Link>

          <nav className="flex items-center space-x-6">
            <Link href="/Showcase" className="text-gray-700 hover:text-blue-600 transition-colors">Showcase</Link>
            <Link href="/Docs" className="text-gray-700 hover:text-blue-600 transition-colors">Docs</Link>
            <Link href="/Blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
            <Link href="/Templates" className="text-gray-700 hover:text-blue-600 transition-colors">Templates</Link>
            <Link href="/Enterprise" className="text-gray-700 hover:text-blue-600 transition-colors">Enterprise</Link>

            {!supabase && !demoMode ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Database niet beschikbaar</span>
                <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors">Demo Login</Link>
              </div>
            ) : !session ? (
              <div className="flex items-center space-x-4">
                <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors">Login</Link>
                <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Registreren
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">
                    Welkom, {session.user?.email || session.email}
                  </span>
                  {demoMode && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                      Demo
                    </span>
                  )}
                </div>
                <Link href="/admin" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Admin
                </Link>
                <button 
                  onClick={handleLogout} 
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
