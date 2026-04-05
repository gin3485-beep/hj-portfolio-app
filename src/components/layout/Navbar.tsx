'use client';
import { useEffect, useState } from 'react';

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
      <button onClick={() => scrollTo('hero')} className="text-xl md:text-2xl font-black tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-white hover:to-white transition-colors cursor-pointer text-left">
        HJ.DESIGN
      </button>
      <ul className="flex items-center gap-1 sm:gap-2 md:gap-4 bg-white/5 backdrop-blur-md px-3 md:px-6 py-2 rounded-full border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
        <li>
          <button onClick={() => scrollTo('hero')} className="px-3 md:px-5 py-1.5 md:py-2 text-[12px] sm:text-sm md:text-base font-bold text-gray-300 hover:text-white rounded-full hover:bg-white/10 hover:shadow-inner transition-all duration-300">
            Home
          </button>
        </li>
        <li>
          <button onClick={() => scrollTo('about')} className="px-3 md:px-5 py-1.5 md:py-2 text-[12px] sm:text-sm md:text-base font-bold text-gray-300 hover:text-white rounded-full hover:bg-white/10 hover:shadow-inner transition-all duration-300">
            About
          </button>
        </li>
        <li>
          <button onClick={() => scrollTo('contact')} className="px-3 md:px-5 py-1.5 md:py-2 text-[12px] sm:text-sm md:text-base font-bold text-white rounded-full bg-purple-600/80 hover:bg-purple-500 shadow-[0_0_15px_rgba(126,34,206,0.3)] hover:shadow-[0_0_20px_rgba(126,34,206,0.5)] transition-all duration-300">
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
