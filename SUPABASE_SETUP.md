# 🚀 **Supabase Setup Handleiding**

## **Stap 1: Maak een Supabase Account**
1. Ga naar [https://supabase.com](https://supabase.com)
2. Klik op "Start your project" of "Sign Up"
3. Maak een account aan (GitHub, Google, of email)

## **Stap 2: Maak een Nieuw Project**
1. Klik op "New Project"
2. Kies je organisatie
3. Geef je project een naam (bijv. "myfirstnext-blog")
4. Kies een database wachtwoord (bewaar dit goed!)
5. Kies een regio (bijv. West Europe)
6. Klik "Create new project"

## **Stap 3: Wacht tot het Project Klaar is**
- Dit duurt ongeveer 2-5 minuten
- Je krijgt een groene vinkje als het klaar is

## **Stap 4: Haal je Credentials Op**
1. Ga naar **Settings** → **API** in je project dashboard
2. Kopieer de **Project URL** (ziet eruit als: `https://abc123.supabase.co`)
3. Kopieer de **anon public** key (begint met `eyJ...`)

## **Stap 5: Maak .env.local Bestand**
1. In je project root, maak een bestand aan genaamd `.env.local`
2. Voeg dit toe (vervang met je echte credentials):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://abc123.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## **Stap 6: Voer Database Schema Uit**
1. Ga naar **SQL Editor** in je Supabase dashboard
2. Kopieer de inhoud van `database-schema.sql`
3. Plak het in de SQL editor
4. Klik op **Run** om het schema uit te voeren

## **Stap 7: Test de Verbinding**
1. Herstart je development server: `npm run dev`
2. Ga naar je website
3. Je zou nu geen "Demo Mode" meer moeten zien
4. Alle functionaliteit zou moeten werken met de echte database

## **⚠️ Belangrijke Punten:**
- **Geen commentaar** op dezelfde regel als je credentials
- **Geen puntkomma's** in je URL
- **Geen spaties** rond de = tekens
- **Herstart** je development server na het maken van `.env.local`

## **🔍 Troubleshooting:**
- Als je nog steeds "Demo Mode" ziet, controleer je credentials
- Kijk in de browser console voor error berichten
- Zorg dat je `.env.local` in de root van je project staat
- Controleer of je database schema succesvol is uitgevoerd

## **📱 Test Functionaliteit:**
1. **Registratie**: Maak een nieuw account
2. **Login**: Log in met je account
3. **Admin**: Ga naar admin dashboard
4. **CRUD**: Voeg, bewerk, verwijder blog posts
5. **Blog**: Bekijk je posts op de blog pagina

## **🎯 Volgende Stappen:**
- Stel Row Level Security (RLS) in voor productie
- Voeg email verificatie toe
- Configureer authenticatie providers (Google, GitHub)
- Stel backups in
