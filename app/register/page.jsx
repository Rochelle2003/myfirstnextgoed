'use client';
import React, { useState, useEffect } from 'react';
import { supabase } from '../Lib/supabaseClient';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [demoMode, setDemoMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if Supabase is available
    if (!supabase) {
      setDemoMode(true);
    } else {
      // Check if user is already logged in
      try {
        supabase.auth.getSession().then(({ data: { session } }) => {
          if (session) {
            router.push('/admin');
          }
        });
      } catch (error) {
        // Als er een error is, schakel over naar demo mode
        console.warn('Supabase error, switching to demo mode:', error);
        setDemoMode(true);
      }
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Wachtwoorden komen niet overeen');
      setLoading(false);
      return;
    }

    // Validate password length
    if (password.length < 6) {
      setError('Wachtwoord moet minimaal 6 karakters lang zijn');
      setLoading(false);
      return;
    }

    try {
      if (demoMode || !supabase) {
        // Demo registratie - sla gebruiker op in localStorage
        const newUser = {
          email,
          password,
          name: email.split('@')[0], // Gebruik email prefix als naam
          role: 'user',
          createdAt: new Date().toISOString()
        };
        
        // Haal bestaande gebruikers op en voeg nieuwe toe
        const existingUsers = JSON.parse(localStorage.getItem('demoUsers') || '[]');
        existingUsers.push(newUser);
        localStorage.setItem('demoUsers', JSON.stringify(existingUsers));
        
        setSuccess('Demo registratie succesvol! Je kunt nu inloggen met je gegevens.');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        
        // Redirect naar login na 2 seconden
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      } else if (supabase) {
        // Echte Supabase registratie
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;

        setSuccess('Account succesvol aangemaakt! Controleer je email om je account te bevestigen.');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.message || 'Er is een fout opgetreden bij het registreren.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Maak een nieuw account aan
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Of{' '}
            <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
              log in op je bestaande account
            </Link>
          </p>
          
          {/* Demo mode indicator */}
          {demoMode && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <span className="text-sm text-yellow-800 font-medium">Demo Mode</span>
              </div>
              <p className="text-xs text-yellow-700 mt-1">
                Database niet beschikbaar. Registratie wordt gesimuleerd.
              </p>
            </div>
          )}
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
              {error}
            </div>
          )}
          
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
              {success}
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email adres
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Email adres"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Wachtwoord
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Wachtwoord (minimaal 6 karakters)"
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Bevestig wachtwoord
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Bevestig wachtwoord"
              />
            </div>
          </div>

          {/* Demo info */}
          {demoMode && (
            <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
              <h4 className="text-sm font-medium text-blue-900 mb-2">Demo Registratie</h4>
              <p className="text-xs text-blue-800">
                In demo mode wordt registratie gesimuleerd. Je kunt daarna inloggen met je ingevoerde gegevens.
              </p>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                'Account aanmaken'
              )}
            </button>
          </div>

          <div className="text-center">
            <Link href="/" className="text-blue-600 hover:text-blue-500 text-sm">
              Terug naar home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
