# Blog App - Next.js + Supabase

Een moderne blog applicatie gebouwd met Next.js 15, TypeScript, Tailwind CSS en Supabase voor authenticatie en database functionaliteiten.

## 🚀 Features

- **Authenticatie**: Volledige gebruikersregistratie en login met Supabase Auth
- **CRUD Operaties**: Maak, lees, update en verwijder blog posts
- **Dashboard**: Persoonlijk dashboard voor gebruikers
- **Blog Systeem**: Publieke blog met categorie filtering
- **Responsive Design**: Moderne UI gebouwd met Tailwind CSS
- **TypeScript**: Volledig getypeerd voor betere developer experience
- **Row Level Security**: Beveiligde database toegang met RLS policies

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **Database**: PostgreSQL met Row Level Security
- **Deployment**: Vercel ready

## 📋 Vereisten

- Node.js 18+ 
- npm of yarn
- Supabase account
- PostgreSQL database (via Supabase)

## 🔧 Installatie

### 1. Clone het project

```bash
git clone <repository-url>
cd myfirstnext
```

### 2. Installeer dependencies

```bash
npm install
```

### 3. Configureer environment variables

Maak een `.env.local` bestand aan in de root van het project:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Database Configuration
DATABASE_URL=your_database_connection_string

# Auth Configuration
NEXTAUTH_SECRET=your_nextauth_secret_key
NEXTAUTH_URL=http://localhost:3000
```

### 4. Database Setup

Voer het SQL script uit in je Supabase SQL editor:

```sql
-- Zie database-schema.sql voor het volledige schema
```

### 5. Start de development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## 🗄️ Database Schema

### Blog Posts Table

```sql
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  excerpt VARCHAR(500),
  author VARCHAR(100) NOT NULL,
  category VARCHAR(50) NOT NULL,
  image_url TEXT,
  read_time INTEGER DEFAULT 5,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Profiles Table

```sql
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name VARCHAR(100),
  avatar_url TEXT,
  role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🔐 Authenticatie

De applicatie gebruikt Supabase Auth voor:

- Gebruikersregistratie
- Login/Logout
- Session management
- Row Level Security (RLS)

### RLS Policies

- **Blog Posts**: Iedereen kan lezen, alleen geauthenticeerde gebruikers kunnen schrijven
- **Profiles**: Gebruikers kunnen alleen hun eigen profiel lezen/bewerken
- **Admin Access**: Admins hebben volledige toegang tot alle posts

## 📱 Pagina's

### Publieke Pagina's
- **Home** (`/`): Welkomstpagina met featured posts
- **Blog** (`/blog`): Blog overzicht met categorie filtering
- **Login** (`/auth/login`): Inlogpagina
- **Register** (`/auth/register`): Registratiepagina

### Beveiligde Pagina's (Dashboard)
- **Dashboard** (`/dashboard`): Overzicht van gebruikers posts
- **New Post** (`/dashboard/posts/new`): Nieuwe post maken
- **My Posts** (`/dashboard/posts`): Alle posts van de gebruiker
- **Admin Panel** (`/dashboard/admin`): Admin functionaliteiten (alleen voor admins)

## 🎨 Styling

De applicatie gebruikt Tailwind CSS voor:

- Responsive design
- Moderne UI componenten
- Consistent kleurenschema
- Hover effecten en transities

## 🚀 Deployment

### Vercel

1. Push je code naar GitHub
2. Verbind je repository met Vercel
3. Configureer environment variables in Vercel dashboard
4. Deploy!

### Environment Variables in Vercel

Zorg ervoor dat je deze environment variables instelt in je Vercel dashboard:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`

## 🔒 Beveiliging

- **Row Level Security (RLS)**: Database niveau beveiliging
- **Authenticatie**: Supabase Auth met JWT tokens
- **Authorization**: Role-based access control
- **Input Validation**: Client en server-side validatie
- **SQL Injection Protection**: Supabase query builder

## 📚 API Endpoints

De applicatie gebruikt Supabase client voor alle database operaties:

- **Posts**: `supabase.from('blog_posts')`
- **Profiles**: `supabase.from('profiles')`
- **Auth**: `supabase.auth.*`

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📝 Scripts

```bash
# Development
npm run dev

# Build
npm run build

# Start production server
npm start

# Lint
npm run lint

# Type check
npm run type-check
```

## 🤝 Bijdragen

1. Fork het project
2. Maak een feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit je wijzigingen (`git commit -m 'Add some AmazingFeature'`)
4. Push naar de branch (`git push origin feature/AmazingFeature`)
5. Open een Pull Request

## 📄 Licentie

Dit project is gelicenseerd onder de MIT License - zie het [LICENSE](LICENSE) bestand voor details.

## 🆘 Support

Voor vragen of problemen:

1. Check de [Issues](../../issues) sectie
2. Maak een nieuwe issue aan
3. Neem contact op via [email]

## 🙏 Dankbetuigingen

- [Next.js](https://nextjs.org/) - React framework
- [Supabase](https://supabase.com/) - Backend as a Service
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vercel](https://vercel.com/) - Deployment platform

---

Gebouwd met ❤️ door [Jouw Naam]
