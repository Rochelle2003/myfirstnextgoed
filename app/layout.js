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
  title: "UX Design Studio - Creëer Betekenisvolle Gebruikerservaringen",
  description: "Ontdek de kunst van UX design met artikelen, case studies en design insights. Leer van experts en verbeter je design skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white min-h-screen`}>
         <Header />
         <main className="pt-16 lg:pt-20">
           {children}
         </main>
      </body>
    </html>
  );
}
