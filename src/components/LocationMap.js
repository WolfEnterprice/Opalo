import React from 'react';

const ADDRESS = 'Cl. 26 #19-28, Manizales, Caldas';
const MAP_EMBED_URL = 'https://www.google.com/maps?q=Cl.+26+%2319-28,+Manizales,+Caldas&t=&z=16&ie=UTF8&iwloc=&output=embed';
const MAP_LINK_URL = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(ADDRESS);

const LocationMap = () => {
  return (
    <section id="ubicacion" className="py-24 px-6 lg:px-24 bg-background-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-primary text-sm font-bold uppercase tracking-[0.4em] mb-4">
            Cómo llegar
          </h3>
          <h2 className="serif-text text-4xl md:text-5xl text-white mb-6">Ubicación</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-6">
            Te esperamos en el corazón de Manizales. Ubicación discreta y de fácil acceso.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <p className="text-white font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">location_on</span>
              {ADDRESS}
            </p>
            <a
              href={MAP_LINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02]"
            >
              <span className="material-symbols-outlined text-lg">open_in_new</span>
              Abrir en Google Maps
            </a>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/30">
          <iframe
            title="Ópalo Suites - Ubicación en Google Maps"
            src={MAP_EMBED_URL}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full block"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
