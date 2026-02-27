import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const amenityIcons = {
  tv: 'tv',
  'aire-acondicionado': 'ac_unit',
  minibar: 'local_bar',
  jacuzzi: 'hot_tub',
  terraza: 'deck',
  'caja-fuerte': 'lock'
};

const SuitesGallery = () => {
  const { suites } = useApp();
  const navigate = useNavigate();

  return (
    <section id="suites" className="py-16 md:py-20 px-6 lg:px-24 bg-background-dark">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
        <div className="max-w-xl">
          <h3 className="text-primary text-xs font-bold uppercase tracking-[0.4em] mb-2">
            La Colección
          </h3>
          <h2 className="serif-text text-3xl md:text-4xl text-white">Galería de Suites</h2>
        </div>
        <p className="text-white/40 max-w-md text-sm leading-relaxed">
          Cada rincón ha sido diseñado para despertar los sentidos. Descubre los beneficios de cada suite y elige la experiencia perfecta para ti.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {suites.map((suite) => (
          <div
            key={suite.id}
            className="group relative flex flex-col h-full bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
          >
            <div className="relative aspect-[4/3] overflow-hidden shrink-0">
              <img
                alt={suite.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={suite.image}
              />
              <div className="absolute inset-0 suite-card-gradient" />
              <div className="absolute top-3 right-3">
                <span className="bg-primary/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {suite.idealFor || 'Experiencia exclusiva'}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
                <h4 className="serif-text text-2xl md:text-3xl mb-0.5">{suite.name}</h4>
                <p className="text-white/70 text-xs uppercase tracking-widest mb-2">
                  {suite.description}
                </p>
                <p className="text-primary text-lg font-bold">
                  ${suite.price?.toLocaleString('es-CO')} COP <span className="text-white/50 text-sm font-normal">el rato</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col flex-1 p-4 md:p-5 border-t border-white/5 min-h-0">
              <h5 className="text-white/80 text-[10px] font-bold uppercase tracking-wider mb-3">
                Beneficios incluidos
              </h5>
              <div className="flex flex-wrap gap-2 mb-4">
                {(suite.benefits || []).map((benefit, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 bg-white/5 text-white/90 text-xs px-2.5 py-1.5 rounded-md border border-white/5"
                  >
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    {benefit}
                  </span>
                ))}
              </div>
              {suite.amenities && suite.amenities.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-4 text-white/50 text-xs">
                  {suite.amenities.map((a) => (
                    <span key={a} className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">{amenityIcons[a] || 'stars'}</span>
                      <span className="capitalize">{a.replace('-', ' ')}</span>
                    </span>
                  ))}
                </div>
              )}
              <button
                type="button"
                onClick={() => navigate('/reservar', { state: { preselectedSuite: suite.id } })}
                className="mt-auto w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30"
                aria-label={`Reservar ${suite.name}`}
              >
                Reservar esta suite
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuitesGallery;
