export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Auth Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">🔐 Authenticatie</h1>
            <p className="text-gray-600">Beheer je account en toegang</p>
          </div>
        </div>
      </div>
      
      {/* Auth Content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Auth Footer */}
      <div className="bg-white/80 backdrop-blur-sm border-t border-white/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-600 text-sm">
            <p>© 2024 UX Design Blog. Alle rechten voorbehouden.</p>
            <p className="mt-2">Gebouwd met Next.js en Supabase</p>
          </div>
        </div>
      </div>
    </div>
  );
}
