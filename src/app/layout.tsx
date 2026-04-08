import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { PopupProvider } from '@/components/ui/PopupProvider';

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
    <html lang="ko" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-purple-500/30 overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <PopupProvider>
            <div className="max-w-6xl w-full mx-auto min-h-screen flex flex-col relative transition-colors duration-500">
              <Navbar />
              <main className="flex-1 flex flex-col pt-16">
                {children}
              </main>
              <Footer />
            </div>
          </PopupProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
