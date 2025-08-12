import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase = null;

// Alleen client maken als beide environment variables aanwezig zijn
if (supabaseUrl && supabaseAnonKey && supabaseUrl !== '' && supabaseAnonKey !== '') {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  } catch (error) {
    console.error('Error creating Supabase client:', error);
  }
} else {
  if (typeof window === 'undefined') {
    // Server-side: log warning maar gooi geen error
    console.warn('⚠️ Supabase credentials missing during build. Client will not be available.');
  } else {
    // Client-side: log warning maar gooi geen error
    console.warn('⚠️ Supabase credentials missing. Some features may not work.');
  }
}

export { supabase };
