import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Habitación de lujo con luz ambiental tenue"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcVaR2FoKYoqdjCUhgeNQw6hJNcnwrY5MgHIhhATBrglYSTca_8TUhjwc6cUGpGmKw9Gh2Z0gxjpDlhZRz2YHjCo1k9hnLjmPEMg19_xKahPTdhILv5vSv592b-cmI9TemBk-IhJ41gJTB1iUWkBaJh_JtSc6Mm3w6S6jIcjtqO8gvwEctBjABRNq1q7cXviOpI5S_AySRfUHuIEqo0VZLnPJyUNPUxNjv25UYL4rLBBoFaV6m82pNKbJyr_0qLED9xgqnGc0J_0E"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="serif-text text-4xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight italic animate-fade-in-up">
          Aquí vives el arte de la seducción
        </h2>
        <p className="text-white/60 text-lg md:text-xl font-light tracking-widest uppercase mb-12 animate-fade-in-up-delay-1">
          Exclusividad y misterio en cada detalle
        </p>
        <div className="animate-fade-in-up-delay-2">
          <button
            type="button"
            onClick={() => navigate('/reservar')}
            className="border-2 border-white/40 hover:border-primary hover:bg-primary text-white px-10 py-4 rounded-lg text-sm font-bold uppercase tracking-[0.3em] transition-all duration-300 backdrop-blur-sm shadow-lg shadow-black/20 hover:shadow-primary/30 hover:scale-[1.02] focus-ring"
            aria-label="Ir a reservar tu experiencia"
          >
            Explorar el Misterio
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50 animate-bounce" aria-hidden="true">
        <span className="material-symbols-outlined text-white text-3xl">expand_more</span>
      </div>
    </header>
  );
};

export default Hero;
