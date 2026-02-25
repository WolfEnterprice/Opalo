import React from 'react';
import { useApp } from '../context/AppContext';

const SuitesGallery = () => {
  const { suites } = useApp();

  return (
    <section id="suites" className="py-32 px-6 lg:px-24 bg-background-dark">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-xl">
          <h3 className="text-primary text-sm font-bold uppercase tracking-[0.4em] mb-4">
            La Colección
          </h3>
          <h2 className="serif-text text-5xl text-white">The Suites Gallery</h2>
        </div>
        <p className="text-white/40 max-w-md text-sm leading-relaxed">
          Cada rincón ha sido diseñado para despertar los sentidos. Texturas de seda, acabados en cristal y una iluminación que invita a lo prohibido.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {suites.map((suite) => (
          <div
            key={suite.id}
            className="group relative aspect-[4/5] overflow-hidden rounded-xl cursor-pointer"
          >
            <img
              alt={suite.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={suite.image}
            />
            <div className="absolute inset-0 suite-card-gradient"></div>
            <div className="absolute bottom-0 left-0 p-10 w-full transform transition-transform duration-500">
              <h4 className="serif-text text-3xl text-white mb-2">{suite.name}</h4>
              <p className="text-white/60 text-sm uppercase tracking-widest mb-6">
                {suite.description}
              </p>
              <p className="text-primary text-lg font-bold mb-2">
                ${suite.price.toLocaleString()} MXN/noche
              </p>
              <div className="h-px w-0 group-hover:w-full bg-primary transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuitesGallery;

