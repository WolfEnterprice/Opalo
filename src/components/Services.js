import React from 'react';
import { useApp } from '../context/AppContext';

const Services = () => {
  const { services } = useApp();

  return (
    <section id="experiencias" className="py-32 px-6 lg:px-24 dark:bg-background-dark">
      <div className="text-center mb-20">
        <h2 className="serif-text text-4xl text-white mb-4">Experiencias de Autor</h2>
        <p className="text-white/40 max-w-xl mx-auto font-light">
          Servicios discretos y personalizados para elevar cada encuentro a la categoría de arte.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service) => (
          <div key={service.id} className="group text-center p-6 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300">
            <div className="mb-8 relative inline-block">
              <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-primary/20">
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
            </div>
            <h4 className="text-white text-lg font-bold mb-4 tracking-wider">{service.name}</h4>
            <p className="text-white/50 text-sm leading-relaxed font-light mb-4">
              {service.description}
            </p>
            <p className="text-primary text-sm font-bold">
              ${service.price.toLocaleString('es-CO')} COP
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

