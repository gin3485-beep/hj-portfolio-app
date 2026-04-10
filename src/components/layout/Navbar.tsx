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
      const contact = document.getElementById('contact');
      
      const scrollPosition = window.scrollY + window.innerHeight * 0.5;

      if (contact && contact.offsetTop <= scrollPosition) {
        setActiveSection('contact');
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
    const baseClass = "px-3 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base sm:text-base font-bold rounded-full transition-all duration-300";
    if (activeSection === section) {
      return `${baseClass} text-white bg-primary`;
    }
    return `${baseClass} text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10`;
  };

  return (
    <nav className={`fixed top-0 max-w-6xl w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 px-6 sm:px-12' : 'bg-transparent py-5 sm:py-8 px-6 sm:px-12'} flex justify-between items-center`}>
      <button onClick={() => scrollTo('hero')} className="text-xl sm:text-2xl font-black tracking-[0.15em] text-transparent bg-clip-text bg-primary dark:from-primary dark:to-accent hover:opacity-80 transition-all cursor-pointer text-left">
        HJ.DESIGN
      </button>
      
      <div className="flex items-center gap-2 sm:gap-4">
        <ul className="flex items-center gap-1 sm:gap-2 sm:gap-4 bg-white/5 dark:bg-black/10 backdrop-blur-md px-3 sm:px-6 py-2 rounded-full border border-black/5 dark:border-white/10 ">
          <li>
            <button onClick={() => scrollTo('hero')} className={getNavClass('hero')}>
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo('about')} className={getNavClass('about')}>
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo('contact')} className={getNavClass('contact')}>
              Contact
            </button>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}
