import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

let supabase;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  // Tijdens build (zoals op _not-found) zijn env-variabelen soms niet beschikbaar
  if (typeof window === 'undefined') {
    console.warn('⚠️ Supabase keys missing during build (zoals _not-found). Skipping client creation.');
  } else {
    throw new Error('Supabase credentials zijn verplicht!');
  }
}

export { supabase };
