import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="bg-zinc-950 border-t border-white/5 pt-24 pb-12 px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-8 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold tracking-widest uppercase text-white">
                Ópalo <span className="text-primary font-light">Suites</span>
              </h2>
            </div>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
              Sumérgete en un refugio de sofisticación donde el tiempo se detiene y los sentidos cobran vida.
            </p>
            <div className="flex gap-4">
              <a className="size-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-white text-xl">camera</span>
              </a>
              <a className="size-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-white text-xl">share</span>
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Explora</h5>
            <ul className="space-y-4">
              <li>
                <a href="#suites" className="text-white/40 hover:text-primary transition-colors text-sm">
                  Nuestras Suites
                </a>
              </li>
              <li>
                <a href="#experiencias" className="text-white/40 hover:text-primary transition-colors text-sm">
                  Experiencias
                </a>
              </li>
              <li>
                <Link to="/reservar" className="text-white/40 hover:text-primary transition-colors text-sm">
                  Reservaciones
                </Link>
              </li>
              <li>
                <a href="#contacto" className="text-white/40 hover:text-primary transition-colors text-sm">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Ubicación</h5>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Av. de la Seducción 123<br />
              Barrio Alto, Ciudad de México
            </p>
            <a className="text-primary text-sm font-bold flex items-center gap-2" href="#">
              <span className="material-symbols-outlined text-sm">location_on</span> Ver en mapa
            </a>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs tracking-widest uppercase">
            © 2024 Ópalo Suites. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <a className="text-white/20 hover:text-white transition-colors text-xs uppercase tracking-widest" href="#">
              Privacidad
            </a>
            <a className="text-white/20 hover:text-white transition-colors text-xs uppercase tracking-widest" href="#">
              Términos
            </a>
          </div>
        </div>
      </footer>
      <a className="fixed bottom-8 right-8 z-50 group" href="https://wa.me/#">
        <div className="flex items-center gap-4">
          <span className="opacity-0 group-hover:opacity-100 bg-zinc-900 text-white text-xs py-2 px-4 rounded-lg border border-white/10 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 whitespace-nowrap uppercase tracking-widest font-bold">
            ¿Alguna duda?
          </span>
          <div className="size-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-2xl">chat_bubble</span>
          </div>
        </div>
      </a>
    </>
  );
};

export default Footer;

