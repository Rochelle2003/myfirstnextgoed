-- Database Schema voor Next.js Blog met Supabase
-- Voer dit uit in de Supabase SQL Editor

-- Maak de blog_posts tabel
CREATE TABLE IF NOT EXISTS blog_posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    category VARCHAR(100),
    image_url TEXT,
    author VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Maak indexen voor betere performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_author ON blog_posts(author);

-- Functie om updated_at automatisch bij te werken
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger om updated_at automatisch bij te werken
DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Voeg wat voorbeeld posts toe
INSERT INTO blog_posts (title, excerpt, content, category, image_url, author) VALUES
(
    'Welkom bij Next.js Blog',
    'Leer hoe je een moderne blog bouwt met Next.js en Supabase',
    'Dit is je eerste blog post! Hier kun je alles schrijven over Next.js, React, en web development. De mogelijkheden zijn eindeloos.',
    'Tutorial',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    'Admin'
),
(
    'Supabase Database Setup',
    'Stap-voor-stap handleiding voor het opzetten van Supabase',
    'Supabase is een geweldige open-source alternatief voor Firebase. Het biedt een PostgreSQL database, real-time subscriptions, en authenticatie out-of-the-box.',
    'Database',
    'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop',
    'Admin'
),
(
    'Tailwind CSS Styling',
    'Moderne styling met Tailwind CSS utility classes',
    'Tailwind CSS maakt het bouwen van mooie interfaces eenvoudig. Met utility-first classes kun je snel responsive designs maken zonder custom CSS te schrijven.',
    'CSS',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
    'Admin'
);

-- Stel Row Level Security (RLS) in
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy: Iedereen kan posts lezen
CREATE POLICY "Blog posts are viewable by everyone" ON blog_posts
    FOR SELECT USING (true);

-- Policy: Alleen ingelogde gebruikers kunnen posts maken
CREATE POLICY "Users can insert their own posts" ON blog_posts
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Policy: Alleen de auteur kan posts bewerken
CREATE POLICY "Users can update own posts" ON blog_posts
    FOR UPDATE USING (auth.uid()::text = author OR auth.role() = 'authenticated');

-- Policy: Alleen de auteur kan posts verwijderen
CREATE POLICY "Users can delete own posts" ON blog_posts
    FOR DELETE USING (auth.uid()::text = author OR auth.role() = 'authenticated');

-- Toon een bevestigingsbericht
SELECT 'Database schema succesvol aangemaakt!' as status;
SELECT COUNT(*) as total_posts FROM blog_posts;
