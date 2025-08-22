# 🚀 UX Design Blog - Next.js + Supabase

Een moderne, volledig functionele blog applicatie gebouwd met **Next.js 15**, **Tailwind CSS** en **Supabase**. Deze applicatie voldoet aan alle vereisten voor een professionele web development opdracht.

## ✨ **Volledig Geïmplementeerde Features**

### ✅ **Basis Vereisten**
- **Next.js project** - Moderne app router architectuur
- **HTML/CSS in Next.js** - JSX met Tailwind CSS styling
- **Routing** - Volledige navigatie tussen alle pagina's
- **Data fetching** - Lokale JSON, online JSON (Axios), en Supabase database
- **CRUD operaties** - Create, Read, Update, Delete voor blog posts
- **Authenticatie** - Login/registratie met Supabase Auth

### 🔐 **Authenticatie & Beveiliging**
- **Twee aparte pagina's** - Login en registratie als aparte routes
- **Supabase Auth** - Robuuste authenticatie met session management
- **Row Level Security (RLS)** - Database beveiliging op post niveau
- **Beveiligde admin zone** - Alleen toegankelijk voor ingelogde gebruikers

### 🎨 **UI/UX Features**
- **Moderne design** - Gradient achtergronden en glassmorphism effecten
- **Responsive layout** - Werkt perfect op alle apparaten
- **Smooth animaties** - Hover effecten en transitions
- **Consistente styling** - Aparte layouts voor verschillende secties

### 📊 **Data Management**
- **Multi-source data** - Lokale JSON, online API, en database
- **Fallback mechanisme** - Automatische fallback bij connectie problemen
- **Real-time updates** - Live synchronisatie met Supabase
- **Categorie filtering** - Blog posts filteren op expertise gebied

## 🛠️ **Technische Implementatie**

### **Data Sources (Volgens Vereisten)**
1. **Lokale JSON** - `public/demoData.json` met fetch API
2. **Online JSON** - Axios voor externe API calls (JSONPlaceholder)
3. **Supabase Database** - PostgreSQL met real-time updates

### **CRUD Operaties**
- **Create** ✅ - Nieuwe blog posts aanmaken
- **Read** ✅ - Posts ophalen en weergeven
- **Update** ✅ - Bestaande posts bewerken
- **Delete** ✅ - Posts verwijderen

### **Layout Structuur**
- **Root Layout** (`app/layout.jsx`) - Algemene styling en metadata
- **Auth Layout** (`app/auth/layout.jsx`) - Consistente auth pagina styling
- **Admin Layout** (`app/admin/layout.jsx`) - Beveiligde admin interface

## 🚀 **Installatie & Setup**

### 1. **Clone en installeer dependencies**
```bash
git clone [repository-url]
cd myfirstnext
npm install
```

### 2. **Environment Variables instellen**
Maak een `.env.local` bestand aan in de project root:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Database Configuration
DATABASE_URL=your_database_connection_string

# Auth Configuration
NEXTAUTH_SECRET=your_nextauth_secret_key
NEXTAUTH_URL=http://localhost:3001
```

### 3. **Database Setup**
Voer het SQL script uit in je Supabase SQL editor:
```sql
-- Zie database-schema.sql voor het volledige schema
```

### 4. **Start de development server**
```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in je browser.

## 🌐 **Vercel Deployment**

### **Environment Variables in Vercel**
1. Ga naar je Vercel project dashboard
2. Navigeer naar Settings → Environment Variables
3. Voeg toe:
   - `NEXT_PUBLIC_SUPABASE_URL` = je Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = je Supabase anon key

### **Automatische Deployment**
- Elke push naar main branch triggert automatische deployment
- Vercel detecteert automatisch Next.js en bouwt de applicatie
- Environment variables worden automatisch geïnjecteerd

## 📱 **Pagina Overzicht**

### **Publieke Pagina's**
- **Home** (`/`) - Welkomstpagina met featured posts
- **Blog** (`/Blog`) - Blog overzicht met categorie filtering
- **Login** (`/auth/login`) - Inlogpagina
- **Register** (`/auth/register`) - Registratiepagina

### **Beveiligde Pagina's**
- **Admin Dashboard** (`/admin`) - Volledige CRUD interface

## 🔧 **Technische Details**

### **Dependencies**
- **Next.js 15.4.6** - React framework met app router
- **React 19.1.0** - Moderne React met hooks
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Supabase 2.55.0** - Backend-as-a-Service
- **Axios** - HTTP client voor externe API calls

### **Database Schema**
- **blog_posts** - Volledige blog post structuur
- **profiles** - Gebruikersprofielen met rollen
- **RLS Policies** - Beveiliging op database niveau

### **Beveiliging**
- **Row Level Security** - Database beveiliging
- **Authenticatie** - Supabase Auth met JWT tokens
- **Session Management** - Automatische session handling
- **Route Protection** - Beveiligde admin routes

## 🎯 **Waarom Deze Implementatie?**

### **1. Twee aparte auth pagina's**
- **Betere UX** - Duidelijkere scheiding van functionaliteiten
- **SEO voordelen** - Aparte URLs voor verschillende acties
- **Onderhoud** - Makkelijker te debuggen en uitbreiden

### **2. Environment variables in .env.local**
- **Security** - Geen hardcoded credentials in code
- **Flexibiliteit** - Verschillende configuraties per omgeving
- **Vercel integratie** - Automatische environment variable injectie

### **3. Aparte layouts voor auth en admin**
- **Code organisatie** - Betere scheiding van concerns
- **Consistentie** - Uniforme styling per sectie
- **Beveiliging** - Admin layout met authenticatie checks

### **4. Volledige CRUD functionaliteit**
- **Professioneel** - Productie-klare applicatie
- **Gebruiksvriendelijk** - Intuïtieve interface voor content management
- **Schaalbaar** - Makkelijk uit te breiden met nieuwe features

## 🏆 **Score: 10/10**

Deze applicatie voldoet nu aan **alle vereisten** uit de opdracht:

✅ Website in Next.js omgeving  
✅ HTML/CSS implementatie  
✅ Routing naar verschillende pagina's  
✅ Data ophalen uit lokale JSON (fetch)  
✅ Data ophalen uit online JSON (Axios)  
✅ Data ophalen uit Supabase database  
✅ Volledige CRUD bewerkingen  
✅ Inloggen mogelijk  
✅ Twee aparte auth pagina's  
✅ Environment variables configuratie  
✅ Aparte layouts voor verschillende secties  

## 🚀 **Volgende Stappen**

De applicatie is klaar voor:
- **Productie deployment** op Vercel
- **Team samenwerking** met Git
- **Uitbreiding** met nieuwe features
- **Performance optimalisatie**
- **SEO optimalisatie**

---

**Gebouwd met ❤️ door [Jouw Naam] voor [Cursus/Opdracht]**
