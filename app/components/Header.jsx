import Link from 'next/link';
import React from 'react'

export default function Header() {
  return (
    <header className="grid">
    <Link href="/"><h1>NEXT.JS</h1></Link>
    <nav>
      <Link href="/Showcase">Showcase </Link>
      <Link href="/Docs">Docs</Link>
      <Link href="/Blog">Blog</Link>
      <Link href="/Templates">Templates</Link>
      <Link href="/Enterprise">Enterprise</Link>
      
    </nav>
  </header>
  );
}
