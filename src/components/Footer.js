import React from 'react';
import { Link } from 'react-router-dom';

const INSTAGRAM_URL = 'https://www.instagram.com/opalosuites/?hl=es';
const PHONE_NUMBER = '+57 313 7374108';
const PHONE_LINK = 'tel:+573137374108';
const WHATSAPP_LINK = 'https://wa.me/573137374108';

const InstagramIcon = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const Footer = () => {
  return (
    <>
      <footer className="bg-zinc-950 border-t border-white/5 pt-24 pb-12 px-6 lg:px-24" role="contentinfo">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-20">
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-8 text-primary" aria-hidden="true">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold tracking-widest uppercase text-white">
                Ópalo <span className="text-primary font-light">Suites</span>
              </h2>
            </div>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
              Sumérgete en un refugio de sofisticación donde el tiempo se detiene y los sentidos cobran vida.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Explora</h3>
            <ul className="space-y-4">
              <li>
                <a href="#suites" className="text-white/40 hover:text-primary transition-colors duration-200 text-sm inline-block hover:underline underline-offset-2">
                  Nuestras Suites
                </a>
              </li>
              <li>
                <a href="#experiencias" className="text-white/40 hover:text-primary transition-colors duration-200 text-sm inline-block hover:underline underline-offset-2">
                  Experiencias
                </a>
              </li>
              <li>
                <Link to="/reservar" className="text-white/40 hover:text-primary transition-colors duration-200 text-sm inline-block hover:underline underline-offset-2">
                  Reservaciones
                </Link>
              </li>
              <li>
                <a href="#ubicacion" className="text-white/40 hover:text-primary transition-colors duration-200 text-sm inline-block hover:underline underline-offset-2">
                  Ubicación
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Ubicación</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Cl. 26 #19-28<br />
              Manizales, Caldas
            </p>
            <a
              href="#ubicacion"
              className="text-primary text-sm font-bold inline-flex items-center gap-2 hover:text-primary/90 transition-colors duration-200 hover:underline underline-offset-2"
              aria-label="Ver ubicación en mapa"
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">location_on</span>
              Ver en mapa
            </a>
          </div>
          <div>
            <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-3 text-white/40 hover:text-primary transition-colors text-sm group"
                  aria-label="Llamar por teléfono"
                >
                  <span className="flex items-center justify-center size-10 rounded-lg bg-white/5 text-primary group-hover:bg-primary/10 transition-colors shrink-0" aria-hidden="true">
                    <span className="material-symbols-outlined text-xl">call</span>
                  </span>
                  <span className="font-medium text-white/90">{PHONE_NUMBER}</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white/40 hover:text-primary transition-colors text-sm group"
                  aria-label="Seguir a Ópalo Suites en Instagram"
                >
                  <span className="flex items-center justify-center size-10 rounded-lg bg-white/5 text-primary group-hover:bg-primary/10 transition-colors shrink-0" aria-hidden="true">
                    <InstagramIcon className="w-5 h-5" />
                  </span>
                  <span className="font-medium text-white/90">@opalosuites</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Ópalo Suites. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <a href="/privacidad" className="text-white/20 hover:text-white transition-colors text-xs uppercase tracking-widest">
              Privacidad
            </a>
            <a href="/terminos" className="text-white/20 hover:text-white transition-colors text-xs uppercase tracking-widest">
              Términos
            </a>
          </div>
        </div>
      </footer>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
        aria-label="Contactar por WhatsApp"
      >
        <span className="sr-only">¿Alguna duda? Escríbenos por WhatsApp</span>
        <div className="flex items-center gap-4">
          <span className="opacity-0 group-hover:opacity-100 bg-zinc-900 text-white text-xs py-2 px-4 rounded-lg border border-white/10 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 whitespace-nowrap uppercase tracking-widest font-bold pointer-events-none">
            ¿Alguna duda?
          </span>
          <div className="size-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-110 transition-transform duration-300 animate-pulse-soft" aria-hidden="true">
            <span className="material-symbols-outlined text-2xl">chat_bubble</span>
          </div>
        </div>
      </a>
    </>
  );
};

export default Footer;
