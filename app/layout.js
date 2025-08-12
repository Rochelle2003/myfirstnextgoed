import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js Blog & Admin Dashboard",
  description: "Een complete Next.js website met database functionaliteit en authenticatie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 min-h-screen`}>
         <Header />
         <main className="container mx-auto px-4 py-8">
           {children}
         </main>
      </body>
    </html>
  );
}
