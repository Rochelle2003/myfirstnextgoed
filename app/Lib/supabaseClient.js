import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Check if environment variables are available
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase credentials niet gevonden. Maak een .env.local bestand aan met:')
  console.warn('   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url')
  console.warn('   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key')
  console.warn('   De applicatie zal fallback naar lokale data gebruiken.')
}

// Create a mock client if credentials are missing
let supabase
if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
} else {
  // Mock client for development without credentials
  supabase = {
    auth: {
      getUser: async () => ({ data: { user: null }, error: null }),
      signInWithPassword: async () => ({ data: null, error: { message: 'Supabase niet geconfigureerd' } }),
      signUp: async () => ({ data: null, error: { message: 'Supabase niet geconfigureerd' } }),
      signOut: async () => ({ error: null })
    },
    from: () => ({
      select: () => ({ order: () => ({ data: [], error: null }) }),
      insert: () => ({ select: () => ({ data: null, error: { message: 'Supabase niet geconfigureerd' } }) }),
      update: () => ({ eq: () => ({ select: () => ({ data: null, error: { message: 'Supabase niet geconfigureerd' } }) }) }),
      delete: () => ({ eq: () => ({ error: { message: 'Supabase niet geconfigureerd' } }) })
    })
  }
}

export { supabase }

