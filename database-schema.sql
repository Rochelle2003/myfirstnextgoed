-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create blog_posts table
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

-- Create users table (extends Supabase auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name VARCHAR(100),
  avatar_url TEXT,
  role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for blog_posts
-- Anyone can read published posts
CREATE POLICY "Anyone can read blog posts" ON blog_posts
  FOR SELECT USING (true);

-- Only authenticated users can create posts
CREATE POLICY "Authenticated users can create posts" ON blog_posts
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Users can update their own posts, admins can update any
CREATE POLICY "Users can update own posts, admins can update any" ON blog_posts
  FOR UPDATE USING (
    auth.uid()::text = author OR 
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Users can delete their own posts, admins can delete any
CREATE POLICY "Users can delete own posts, admins can delete any" ON blog_posts
  FOR DELETE USING (
    auth.uid()::text = author OR 
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- RLS Policies for profiles
-- Users can read their own profile
CREATE POLICY "Users can read own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Insert trigger for profiles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert some sample data
INSERT INTO blog_posts (title, content, excerpt, author, category, read_time, featured) VALUES
(
  'Getting Started with Next.js and Supabase',
  'Next.js is a powerful React framework that makes building full-stack web applications simple and efficient. When combined with Supabase, you get a powerful backend-as-a-service that handles authentication, database, and real-time features out of the box...',
  'Learn how to build modern web applications with Next.js and Supabase. This comprehensive guide covers everything from setup to deployment.',
  'admin',
  'Tutorial',
  8,
  true
),
(
  'Understanding Authentication in Web Apps',
  'Authentication is a crucial aspect of web application security. It ensures that only authorized users can access protected resources...',
  'Explore different authentication methods and best practices for securing your web applications.',
  'admin',
  'Security',
  12,
  false
),
(
  'CRUD Operations with Supabase',
  'CRUD operations (Create, Read, Update, Delete) are fundamental to any database-driven application...',
  'Master CRUD operations with Supabase and learn how to implement them efficiently in your applications.',
  'admin',
  'Database',
  10,
  false
);
