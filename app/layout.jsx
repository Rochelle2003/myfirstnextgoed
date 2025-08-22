import './globals.css'

export const metadata = {
  title: 'UX Design Blog - Next.js + Supabase',
  description: 'Een moderne blog applicatie gebouwd met Next.js en Supabase',
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        {children}
      </body>
    </html>
  )
}

