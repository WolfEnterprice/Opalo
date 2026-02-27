import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate, useLocation } from 'react-router-dom';

const amenityIcons = {
  tv: 'tv',
  'aire-acondicionado': 'ac_unit',
  minibar: 'local_bar',
  jacuzzi: 'hot_tub',
  terraza: 'deck',
  'caja-fuerte': 'lock'
};

const Reservar = () => {
  const { suites, services, addReservation } = useApp();
  const navigate = useNavigate();
  const location = useLocation();
  const preselectedId = location.state?.preselectedSuite;

  const [formData, setFormData] = useState({
    suiteId: preselectedId || '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    selectedServices: [],
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  useEffect(() => {
    if (preselectedId && suites.some(s => s.id === preselectedId)) {
      setFormData(prev => ({ ...prev, suiteId: preselectedId }));
    }
  }, [preselectedId, suites]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedSuite = suites.find(s => s.id === parseInt(formData.suiteId));
    const selectedServicesData = services.filter(s => formData.selectedServices.includes(s.id));

    const reservation = {
      ...formData,
      suite: selectedSuite,
      services: selectedServicesData,
      total: selectedSuite ? selectedSuite.price + selectedServicesData.reduce((sum, s) => sum + s.price, 0) : 0
    };

    addReservation(reservation);
    alert('¡Reservación enviada exitosamente! Nos pondremos en contacto contigo pronto.');
    navigate('/');
  };

  const toggleService = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter(id => id !== serviceId)
        : [...prev.selectedServices, serviceId]
    }));
  };

  const selectedSuite = formData.suiteId ? suites.find(s => s.id === parseInt(formData.suiteId)) : null;
  const availableSuites = suites.filter(s => s.available);

  return (
    <main className="min-h-screen bg-background-dark pt-20 pb-20" role="main">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="serif-text text-5xl text-white mb-4">Reserva tu Experiencia</h1>
          <p className="text-white/60">Elige tu suite ideal y completa el formulario para realizar tu reservación</p>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center size-10 rounded-full bg-primary text-white text-sm font-bold">1</span>
            <span className="text-white/60 text-xs uppercase tracking-wider">Elige suite</span>
          </div>
          <div className="h-px flex-1 max-w-[80px] bg-white/20" aria-hidden="true" />
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center size-10 rounded-full bg-white/20 text-white/60 text-sm font-bold">2</span>
            <span className="text-white/40 text-xs uppercase tracking-wider">Tus datos</span>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-white text-sm font-bold uppercase tracking-wider mb-6">
            Paso 1 — Selecciona tu Suite
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {availableSuites.map((suite) => (
              <button
                key={suite.id}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, suiteId: suite.id }))}
                className={`text-left rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                  String(formData.suiteId) === String(suite.id)
                    ? 'border-primary ring-2 ring-primary/50 bg-primary/10 shadow-xl shadow-primary/25'
                    : 'border-white/10 bg-zinc-900/50 hover:border-white/30'
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={suite.image}
                    alt={suite.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 suite-card-gradient" />
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    {String(formData.suiteId) === String(suite.id) && (
                      <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
                    )}
                    <span className="bg-primary/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      ${suite.price?.toLocaleString('es-CO')} COP el rato
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="serif-text text-2xl font-bold">{suite.name}</h3>
                    <p className="text-white/70 text-sm">{suite.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-3">{suite.idealFor}</p>
                  <div className="flex flex-wrap gap-2">
                    {(suite.benefits || []).slice(0, 4).map((b, idx) => (
                      <span key={idx} className="text-white/80 text-xs bg-white/5 px-2 py-1 rounded">
                        {b}
                      </span>
                    ))}
                  </div>
                  {suite.amenities && suite.amenities.length > 0 && (
                    <div className="flex gap-3 mt-3 text-white/40">
                      {suite.amenities.slice(0, 4).map((a) => (
                        <span key={a} className="flex items-center gap-1 text-xs">
                          <span className="material-symbols-outlined text-sm">{amenityIcons[a] || 'stars'}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center size-8 rounded-full bg-primary/20 text-primary text-xs font-bold">2</span>
            <h2 className="text-white text-sm font-bold uppercase tracking-wider m-0">
              Detalles de tu Reserva
            </h2>
          </div>
          {selectedSuite && (
            <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Suite seleccionada</p>
                <p className="serif-text text-xl text-white">{selectedSuite.name}</p>
                <p className="text-primary font-bold">${selectedSuite.price?.toLocaleString('es-CO')} COP el rato</p>
              </div>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, suiteId: '' }))}
                className="text-white/50 hover:text-white text-sm underline"
              >
                Cambiar suite
              </button>
            </div>
          )}

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">Fecha de llegada</label>
                <input
                  type="date"
                  required
                  value={formData.checkIn}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  className="w-full bg-zinc-800 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">Fecha de salida</label>
                <input
                  type="date"
                  required
                  value={formData.checkOut}
                  onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                  className="w-full bg-zinc-800 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">Número de Huéspedes</label>
              <input
                type="number"
                min="1"
                max="4"
                required
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                className="w-full bg-zinc-800 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-bold mb-4 uppercase tracking-wider">
                Servicios Adicionales
              </label>
              <div className="space-y-3">
                {services.map((service) => (
                  <label key={service.id} className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.selectedServices.includes(service.id)}
                      onChange={() => toggleService(service.id)}
                      className="w-5 h-5 text-primary bg-zinc-800 border-white/10 rounded focus:ring-primary"
                    />
                    <div className="flex-1">
                      <span className="text-white font-medium">{service.name}</span>
                      <span className="text-primary ml-2 font-bold">${service.price.toLocaleString('es-CO')} COP</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">Nombre Completo</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-zinc-800 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-zinc-800 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">Teléfono</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-zinc-800 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">Solicitudes Especiales</label>
              <textarea
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                rows="4"
                placeholder="Rosa en la cama, hora de llegada tarde, etc."
                className="w-full bg-zinc-800 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary placeholder:text-white/30"
              />
            </div>

            <button
              type="submit"
              disabled={!formData.suiteId}
              className="w-full bg-primary hover:bg-primary/90 disabled:bg-zinc-700 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              Confirmar Reservación
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Reservar;
