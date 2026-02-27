import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 glass-nav border-b transition-colors duration-300 ${scrolled ? 'scrolled border-white/10' : 'border-white/5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 focus-ring rounded-lg">
          <div className="size-8 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor" />
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-widest uppercase dark:text-white">
            Ópalo <span className="text-primary font-light">Suites</span>
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <a href="#suites" className="text-xs uppercase tracking-[0.2em] font-medium hover:text-primary transition-colors duration-200 focus-ring rounded">
            Suites
          </a>
          <a href="#experiencias" className="text-xs uppercase tracking-[0.2em] font-medium hover:text-primary transition-colors duration-200 focus-ring rounded">
            Experiencias
          </a>
          <a href="#filosofia" className="text-xs uppercase tracking-[0.2em] font-medium hover:text-primary transition-colors duration-200 focus-ring rounded">
            Filosofía
          </a>
          <a href="#ubicacion" className="text-xs uppercase tracking-[0.2em] font-medium hover:text-primary transition-colors duration-200 focus-ring rounded">
            Ubicación
          </a>
          <button
            type="button"
            onClick={() => navigate('/reservar')}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] focus-ring"
          >
            Reservar
          </button>
          <Link
            to="/admin"
            className="text-xs uppercase tracking-[0.2em] font-medium hover:text-primary transition-colors duration-200 focus-ring rounded"
          >
            Administración
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors duration-200 focus-ring"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-zinc-900/95 backdrop-blur-lg border-t border-white/5 px-6 py-4 space-y-3">
          <a href="#suites" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs uppercase tracking-[0.2em] font-medium hover:text-primary transition-colors duration-200">
            Suites
          </a>
          <a href="#experiencias" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs uppercase tracking-[0.2em] font-medium hover:text-primary transition-colors duration-200">
            Experiencias
          </a>
          <a href="#filosofia" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs uppercase tracking-[0.2em] font-medium hover:text-primary transition-colors duration-200">
            Filosofía
          </a>
          <a href="#ubicacion" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xs uppercase tracking-[0.2em] font-medium hover:text-primary transition-colors duration-200">
            Ubicación
          </a>
          <button
            type="button"
            onClick={() => { navigate('/reservar'); setMobileMenuOpen(false); }}
            className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 mt-2"
          >
            Reservar
          </button>
          <Link
            to="/admin"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-xs uppercase tracking-[0.2em] font-medium hover:text-primary transition-colors duration-200"
          >
            Administración
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
