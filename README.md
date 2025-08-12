# Next.js Blog Website

Een moderne, volledig functionele blog website gebouwd met Next.js 15, React 19, Supabase en Tailwind CSS.

## 🚀 Features

- **Moderne UI/UX**: Gebouwd met Tailwind CSS voor een professionele uitstraling
- **Authenticatie**: Veilige gebruikersaccounts met Supabase Auth
- **Blog Management**: Volledig CRUD systeem voor blog posts
- **Responsive Design**: Werkt perfect op alle apparaten
- **SEO Optimized**: Server-side rendering voor betere zoekresultaten
- **Database**: PostgreSQL database met Supabase
- **Real-time Updates**: Live updates van content

## 🛠️ Technologieën

- **Frontend**: Next.js 15, React 19
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Deployment**: Vercel (aanbevolen)

## 📋 Vereisten

- Node.js 18+ 
- npm of yarn
- Supabase account

## 🚀 Installatie

### 1. Clone het project

```bash
git clone <repository-url>
cd myfirstnext
```

### 2. Installeer dependencies

```bash
npm install
```

### 3. Supabase Setup

1. Ga naar [supabase.com](https://supabase.com) en maak een account aan
2. Maak een nieuw project aan
3. Ga naar Settings > API en kopieer je project URL en anon key
4. Maak een `.env.local` bestand aan in de root van je project:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Database Setup

1. Ga naar je Supabase project dashboard
2. Ga naar SQL Editor
3. Kopieer en voer de inhoud van `database-schema.sql` uit

### 5. Start de development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## 🗄️ Database Schema

De website gebruikt een `blog_posts` tabel met de volgende structuur:

```sql
CREATE TABLE blog_posts (
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
```

## 🔐 Authenticatie

- **Registratie**: Gebruikers kunnen accounts aanmaken op `/register`
- **Login**: Bestaande gebruikers kunnen inloggen op `/login`
- **Admin Dashboard**: Ingelogde gebruikers hebben toegang tot `/admin`

## 📝 Blog Functionaliteit

### Voor Bezoekers
- Bekijk alle blog posts op `/Blog`
- Lees individuele posts op `/Blog/[id]`
- Zoek en filter posts op categorie

### Voor Admins
- Maak nieuwe blog posts aan
- Bewerk bestaande posts
- Verwijder posts
- Beheer alle content

## 🎨 Customization

### Styling Aanpassen
- Bewerk `tailwind.config.mjs` voor kleuren en thema's
- Pas componenten aan in `app/components/`
- Wijzig globale stijlen in `app/globals.css`

### Nieuwe Pagina's Toevoegen
- Maak nieuwe mappen aan in `app/` voor nieuwe routes
- Voeg navigatie toe in `app/components/Header.jsx`

### Database Uitbreiden
- Voeg nieuwe tabellen toe via Supabase SQL Editor
- Update de Supabase client code voor nieuwe functionaliteit

## 🚀 Deployment

### Vercel (Aanbevolen)

1. Push je code naar GitHub
2. Verbind je repository met Vercel
3. Voeg je environment variables toe
4. Deploy!

### Andere Platforms

De website kan ook gedeployed worden op:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build voor productie
npm run start        # Start productie server
npm run lint         # Run ESLint
```

## 📱 Responsive Design

De website is volledig responsive en werkt op:
- Desktop computers
- Tablets
- Mobiele telefoons
- Alle moderne browsers

## 🔒 Security Features

- Row Level Security (RLS) in Supabase
- Geauthenticeerde gebruikers kunnen alleen hun eigen content beheren
- Publieke lees toegang voor blog posts
- Veilige authenticatie met Supabase Auth

## 🐛 Troubleshooting

### Veelvoorkomende Problemen

1. **Supabase verbinding werkt niet**
   - Controleer je environment variables
   - Zorg dat je project URL en key correct zijn

2. **Database errors**
   - Voer het database schema opnieuw uit
   - Controleer je RLS policies

3. **Build errors**
   - Verwijder `node_modules` en `package-lock.json`
   - Run `npm install` opnieuw

### Support

Voor vragen of problemen:
1. Controleer de console voor error messages
2. Bekijk de Supabase logs
3. Controleer de browser developer tools

## 📈 Toekomstige Verbeteringen

- [ ] Commentaar systeem
- [ ] Like/dislike functionaliteit
- [ ] Gebruikersprofielen
- [ ] Categorieën beheer
- [ ] Zoekfunctionaliteit
- [ ] Newsletter integratie
- [ ] Social media sharing
- [ ] Analytics dashboard

## 🤝 Bijdragen

Bijdragen zijn welkom! Voel je vrij om:
- Issues te melden
- Feature requests in te dienen
- Pull requests te maken
- Documentatie te verbeteren

## 📄 Licentie

Dit project is open source en beschikbaar onder de MIT licentie.

## 🙏 Dankwoord

- Next.js team voor het geweldige framework
- Supabase team voor de database oplossing
- Tailwind CSS team voor de styling utilities
- Alle contributors en de open source community

---

**Gebouwd met ❤️ en Next.js** 

