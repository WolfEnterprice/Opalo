import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Reservar = () => {
  const { suites, services, addReservation } = useApp();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    suiteId: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    selectedServices: [],
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

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

  return (
    <div className="min-h-screen bg-background-dark pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="serif-text text-5xl text-white mb-4">Reserva tu Experiencia</h1>
          <p className="text-white/60">Completa el formulario para realizar tu reservación</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <div className="space-y-6">
            <div>
              <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                Selecciona una Suite
              </label>
              <select
                required
                value={formData.suiteId}
                onChange={(e) => setFormData({ ...formData, suiteId: e.target.value })}
                className="w-full bg-zinc-800 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              >
                <option value="">-- Selecciona --</option>
                {suites.filter(s => s.available).map(suite => (
                  <option key={suite.id} value={suite.id}>
                    {suite.name} - ${suite.price.toLocaleString()} MXN/noche
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                  Check-in
                </label>
                <input
                  type="date"
                  required
                  value={formData.checkIn}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  className="w-full bg-zinc-800 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                  Check-out
                </label>
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
              <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                Número de Huéspedes
              </label>
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
                {services.map(service => (
                  <label key={service.id} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.selectedServices.includes(service.id)}
                      onChange={() => toggleService(service.id)}
                      className="w-5 h-5 text-primary bg-zinc-800 border-white/10 rounded focus:ring-primary"
                    />
                    <div className="flex-1">
                      <span className="text-white font-medium">{service.name}</span>
                      <span className="text-primary ml-2">${service.price.toLocaleString()} MXN</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                Nombre Completo
              </label>
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
                <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-zinc-800 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                  Teléfono
                </label>
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
              <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                Solicitudes Especiales
              </label>
              <textarea
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                rows="4"
                className="w-full bg-zinc-800 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-primary/20"
            >
              Confirmar Reservación
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservar;

