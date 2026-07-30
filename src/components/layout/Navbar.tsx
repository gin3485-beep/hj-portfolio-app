'use client';
import { useEffect, useState } from 'react';

import { ThemeToggle } from '../ui/ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const hero = document.getElementById('hero');
      const about = document.getElementById('about');
      const product = document.getElementById('product-design');
      const web = document.getElementById('web');
      const print = document.getElementById('print');

      const scrollPosition = window.scrollY + window.innerHeight * 0.4;

      if (print && print.offsetTop <= scrollPosition) {
        setActiveSection('print');
      } else if (web && web.offsetTop <= scrollPosition) {
        setActiveSection('web');
      } else if (product && product.offsetTop <= scrollPosition) {
        setActiveSection('product');
      } else if (about && about.offsetTop <= scrollPosition) {
        setActiveSection('about');
      } else {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const getNavClass = (section: string) => {
    const baseClass = "px-2.5 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-bold rounded-full transition-all duration-300 tracking-wider whitespace-nowrap cursor-pointer";
    if (activeSection === section) {
      return `${baseClass} text-white bg-primary shadow-md shadow-primary/20`;
    }
    return `${baseClass} text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10`;
  };

  return (
    <nav className={`fixed top-0 max-w-6xl w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-2.5 px-4 sm:px-12' : 'bg-transparent py-4 sm:py-6 px-4 sm:px-12'} flex justify-between items-center`}>
      <button onClick={() => scrollTo('hero')} className="text-lg sm:text-2xl font-black tracking-[0.15em] text-transparent bg-clip-text bg-primary dark:from-primary dark:to-accent hover:opacity-80 transition-all cursor-pointer text-left shrink-0">
        HJ.DESIGN
      </button>

      <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
        <ul className="flex items-center gap-1 sm:gap-2 bg-white/5 dark:bg-black/10 backdrop-blur-md px-2 sm:px-4 py-1.5 rounded-full border border-black/5 dark:border-white/10 shrink-0">
          <li>
            <button onClick={() => scrollTo('hero')} className={getNavClass('hero')}>
              HOME
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo('about')} className={getNavClass('about')}>
              ABOUT
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo('product-design')} className={getNavClass('product')}>
              PRODUCT
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo('web')} className={getNavClass('web')}>
              WEB&CONTENTS
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo('print')} className={getNavClass('print')}>
              PRINT
            </button>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}
