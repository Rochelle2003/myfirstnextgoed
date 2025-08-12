-- Database schema voor Next.js Blog website
-- Voer dit uit in je Supabase SQL editor

-- Maak de blog_posts tabel aan
CREATE TABLE IF NOT EXISTS blog_posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    category TEXT,
    image_url TEXT,
    author TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Maak een index aan voor snelle zoekopdrachten op titel
CREATE INDEX IF NOT EXISTS idx_blog_posts_title ON blog_posts USING gin(to_tsvector('dutch', title));

-- Maak een index aan voor snelle zoekopdrachten op categorie
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);

-- Maak een index aan voor sortering op datum
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);

-- Voeg wat voorbeeld blog posts toe
INSERT INTO blog_posts (title, excerpt, content, category, author, image_url) VALUES
(
    'Wat is Next.js?',
    'Next.js is een krachtige React framework dat server-side rendering (SSR) en statische site generatie (SSG) ondersteunt.',
    'Next.js is een krachtige React framework dat server-side rendering (SSR) en statische site generatie (SSG) ondersteunt, waardoor het ideaal is voor SEO en prestaties.

Server-side rendering betekent dat je React componenten op de server kunt renderen voordat ze naar de browser worden gestuurd. Dit verbetert de SEO omdat zoekmachines de volledige HTML kunnen lezen.

Statische site generatie betekent dat je pagina''s kunt voor-renderen op build time, wat resulteert in extreem snelle laadtijden.

Next.js biedt ook:
- Automatische code splitting
- API routes voor backend functionaliteit
- Ingebouwde CSS en Sass ondersteuning
- Hot reloading tijdens development
- Optimalisatie van afbeeldingen
- En nog veel meer!

Met Next.js kun je moderne, snelle en SEO-vriendelijke web applicaties bouwen.',
    'Next.js',
    'Web Developer',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop'
),
(
    'Waarom kiezen voor Next.js?',
    'Leer waarom zoveel developers Next.js kiezen voor hun applicaties: van eenvoud in routing tot geweldige prestaties.',
    'Next.js is een van de meest populaire React frameworks, en daar zijn goede redenen voor. Hier zijn de belangrijkste voordelen:

1. **Eenvoudige Routing**
   Next.js heeft een bestandsgebaseerd routing systeem. Je hoeft alleen maar bestanden in de `pages` directory te plaatsen en de routing wordt automatisch gegenereerd.

2. **Uitstekende Prestaties**
   Door SSR en SSG zijn Next.js applicaties extreem snel. Gebruikers ervaren snelle laadtijden en een soepele gebruikerservaring.

3. **SEO Optimalisatie**
   Server-side rendering zorgt ervoor dat zoekmachines je content kunnen indexeren, wat resulteert in betere zoekresultaten.

4. **Developer Experience**
   Next.js biedt een geweldige developer experience met hot reloading, automatische code splitting en ingebouwde optimalisaties.

5. **Vercel Integratie**
   Next.js is ontwikkeld door Vercel en integreert naadloos met hun hosting platform voor eenvoudige deployment.

6. **Grote Community**
   Met een grote en actieve community vind je altijd hulp en oplossingen voor problemen.',
    'Development',
    'Tech Blogger',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop'
),
(
    'Hoe Next.js de gebruikerservaring verbetert',
    'Ontdek hoe Next.js door middel van server-side rendering de tijd tot eerste byte (TTFB) minimaliseert.',
    'De gebruikerservaring is cruciaal voor het succes van elke website. Next.js verbetert deze ervaring op verschillende manieren:

**Snelle Laadtijden**
Next.js minimaliseert de Time to First Byte (TTFB) door server-side rendering. Gebruikers zien content sneller, wat resulteert in hogere betrokkenheid en lagere bounce rates.

**Automatische Optimalisatie**
Next.js optimaliseert automatisch:
- Afbeeldingen met de ingebouwde Image component
- JavaScript bundles met code splitting
- CSS met automatische optimalisatie
- Preloading van belangrijke resources

**Responsive Design**
Met Tailwind CSS en de responsive utilities van Next.js kun je websites bouwen die er geweldig uitzien op alle apparaten.

**Progressive Web App Features**
Next.js ondersteunt PWA functionaliteiten zoals:
- Service workers voor offline functionaliteit
- App-like ervaring
- Push notificaties
- Installatie op het startscherm

**Performance Monitoring**
Next.js biedt ingebouwde tools voor het monitoren van prestaties, zodat je altijd kunt zien hoe je website presteert.',
    'Performance',
    'UX Expert',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop'
);

-- Maak een functie aan om de updated_at kolom automatisch bij te werken
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Maak een trigger aan die de updated_at kolom automatisch bijwerkt
CREATE TRIGGER update_blog_posts_updated_at 
    BEFORE UPDATE ON blog_posts 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Geef de juiste rechten aan de anonieme gebruiker (voor publieke lees toegang)
GRANT SELECT ON blog_posts TO anon;

-- Geef de juiste rechten aan geauthenticeerde gebruikers (voor CRUD operaties)
GRANT ALL ON blog_posts TO authenticated;

-- Maak een RLS (Row Level Security) policy aan voor publieke lees toegang
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy voor publieke lees toegang
CREATE POLICY "Public read access" ON blog_posts
    FOR SELECT USING (true);

-- Policy voor geauthenticeerde gebruikers om posts te maken
CREATE POLICY "Users can create posts" ON blog_posts
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Policy voor geauthenticeerde gebruikers om hun eigen posts te bewerken
CREATE POLICY "Users can update posts" ON blog_posts
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Policy voor geauthenticeerde gebruikers om posts te verwijderen
CREATE POLICY "Users can delete posts" ON blog_posts
    FOR DELETE USING (auth.role() = 'authenticated');
