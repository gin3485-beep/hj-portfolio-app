'use client';
import { useEffect, useState } from 'react';

import { ThemeToggle } from '../ui/ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 max-w-6xl w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 px-6 md:px-12' : 'bg-transparent py-5 md:py-8 px-6 md:px-12'} flex justify-between items-center`}>
      <button onClick={() => scrollTo('hero')} className="text-xl md:text-2xl font-black tracking-[0.15em] text-transparent bg-clip-text bg-primary dark:from-primary dark:to-accent hover:opacity-80 transition-all cursor-pointer text-left">
        HJ.DESIGN
      </button>
      
      <div className="flex items-center gap-2 md:gap-4">
        <ul className="flex items-center gap-1 sm:gap-2 md:gap-4 bg-white/5 dark:bg-black/10 backdrop-blur-md px-3 md:px-6 py-2 rounded-full border border-black/5 dark:border-white/10 ">
          <li>
            <button onClick={() => scrollTo('hero')} className="px-3 md:px-5 py-1.5 md:py-2 text-sm sm:text-base md:text-base font-bold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo('about')} className="px-3 md:px-5 py-1.5 md:py-2 text-sm sm:text-base md:text-base font-bold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300">
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo('contact')} className="px-3 md:px-5 py-1.5 md:py-2 text-sm sm:text-base md:text-base font-bold text-white rounded-full bg-primary/80 hover:bg-primary   transition-all duration-300">
              Contact
            </button>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}
