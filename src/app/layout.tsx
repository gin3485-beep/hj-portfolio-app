import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | 장희진',
  description: 'UI/UX Design Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-purple-500/30 overflow-x-hidden`}>
        <div className="max-w-6xl w-full mx-auto min-h-screen flex flex-col relative shadow-2xl shadow-purple-900/20 bg-[#0d0714]">
          <Navbar />
          <main className="flex-1 flex flex-col pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
