'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: '🏠 Home', href: '/', current: pathname === '/' },
    { name: '📚 Blog', href: '/Blog', current: pathname === '/Blog' },
    { name: '🌟 Showcase', href: '/Showcase', current: pathname === '/Showcase' },
    { name: '📖 Docs', href: '/Docs', current: pathname === '/Docs' },
    { name: '🏢 Enterprise', href: '/Enterprise', current: pathname === '/Enterprise' },
    { name: '📋 Templates', href: '/Templates', current: pathname === '/Templates' },
    { name: '🧪 Test', href: '/Test', current: pathname === '/Test' },
  ];

  const authLinks = [
    { name: '🔑 Login', href: '/login', current: pathname === '/login' },
    { name: '✨ Registreren', href: '/register', current: pathname === '/register' },
    { name: '⚙️ Admin', href: '/admin', current: pathname === '/admin' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <span className="text-white text-xl lg:text-2xl font-bold">🎨</span>
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  UX Design Studio
                </h1>
                <p className={`text-sm transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-purple-200'
                }`}>
                  Creëer betekenisvolle ervaringen
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  item.current
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : isScrolled
                    ? 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                    : 'text-white hover:text-purple-200 hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Links */}
          <div className="hidden lg:flex items-center space-x-3">
            {authLinks.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  item.current
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : isScrolled
                    ? 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                    : 'text-white hover:text-purple-200 hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/admin"
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                pathname === '/admin'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : isScrolled
                  ? 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  : 'text-white hover:text-purple-200 hover:bg-white/10'
              }`}
            >
              ⚙️ Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl transition-all duration-200 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-purple-600 hover:bg-purple-50' 
                  : 'text-white hover:text-purple-200 hover:bg-white/10'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 mb-4">
              {/* Main Navigation */}
              <div className="px-3 py-2">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Navigatie
                </h3>
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-3 py-2 rounded-xl font-medium transition-all duration-200 ${
                        item.current
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Auth Links */}
              <div className="px-3 py-2 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Account
                </h3>
                <div className="space-y-1">
                  {authLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-3 py-2 rounded-xl font-medium transition-all duration-200 ${
                        item.current
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
