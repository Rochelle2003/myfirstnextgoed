import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase = null;

// Clean up the URL by removing any comments or extra characters
const cleanUrl = (url) => {
  if (!url) return null;
  // Remove everything after semicolon (comments) and trim whitespace
  return url.split(';')[0].trim();
};

const cleanKey = (key) => {
  if (!key) return null;
  // Remove any comments and trim whitespace
  return key.split('//')[0].trim();
};

const cleanedUrl = cleanUrl(supabaseUrl);
const cleanedKey = cleanKey(supabaseAnonKey);

// Alleen client maken als beide environment variables aanwezig zijn en geldig zijn
if (cleanedUrl && cleanedKey && 
    cleanedUrl !== '' && cleanedKey !== '' &&
    cleanedUrl.startsWith('https://') && 
    cleanedUrl.includes('supabase.co')) {
  try {
    supabase = createClient(cleanedUrl, cleanedKey);
    console.log('✅ Supabase client successfully created');
  } catch (error) {
    console.error('❌ Error creating Supabase client:', error);
    supabase = null;
  }
} else {
  if (typeof window === 'undefined') {
    // Server-side: log warning maar gooi geen error
    console.warn('⚠️ Supabase credentials missing or invalid during build. Client will not be available.');
    console.warn('URL:', cleanedUrl);
    console.warn('Key:', cleanedKey ? `${cleanedKey.substring(0, 20)}...` : 'undefined');
  } else {
    // Client-side: log warning maar gooi geen error
    console.warn('⚠️ Supabase credentials missing or invalid. Some features may not work.');
    console.warn('URL:', cleanedUrl);
    console.warn('Key:', cleanedKey ? `${cleanedKey.substring(0, 20)}...` : 'undefined');
  }
}

export { supabase };
