import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mempjlccgmjfytrpkunk.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lbXBqbGNjZ21qZnl0cnBrdW5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MTMzMDUsImV4cCI6MjA3MTA4OTMwNX0.hYuKyqfEcmsTU5qenwDysuQb4dxQtisGGUO34qhZUys'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
