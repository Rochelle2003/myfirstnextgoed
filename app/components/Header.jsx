'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link href="/"><h1 style={{ margin: 0 }}>NEXT.JS</h1></Link>

      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/Showcase">Showcase</Link>
        <Link href="/Docs">Docs</Link>
        <Link href="/Blog">Blog</Link>
        <Link href="/Templates">Templates</Link>
        <Link href="/Enterprise">Enterprise</Link>

        {!session ? (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Registreren</Link>
          </>
        ) : (
          <>
            <Link href="/admin">Admin</Link>
            <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
}
