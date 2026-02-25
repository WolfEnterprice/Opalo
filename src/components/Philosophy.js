import React from 'react';

const Philosophy = () => {
  return (
    <section id="filosofia" className="py-40 bg-zinc-950 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-primary to-transparent"></div>
      <div className="relative z-10">
        <span className="material-symbols-outlined text-primary text-5xl mb-8 opacity-50">
          flare
        </span>
        <h2 className="serif-text text-5xl md:text-7xl text-white italic max-w-4xl leading-tight">
          "Vive una experiencia, no un momento"
        </h2>
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-primary/30"></div>
          <p className="text-white/30 text-xs uppercase tracking-[0.5em]">Nuestra Filosofía</p>
          <div className="h-px w-12 bg-primary/30"></div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

