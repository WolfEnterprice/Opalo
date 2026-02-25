import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

const ServicesManagement = () => {
  const { services, addService, updateService, deleteService } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    icon: 'loyalty',
    price: ''
  });

  const iconOptions = ['loyalty', 'bubbles', 'self_care', 'spa', 'restaurant', 'wine_bar', 'celebration', 'favorite'];

  const openModal = (service = null) => {
    if (service) {
      setEditingService(service);
      setFormData({
        name: service.name,
        description: service.description,
        icon: service.icon,
        price: service.price.toString()
      });
    } else {
      setEditingService(null);
      setFormData({
        name: '',
        description: '',
        icon: 'loyalty',
        price: ''
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingService(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceData = {
      ...formData,
      price: parseFloat(formData.price)
    };

    if (editingService) {
      updateService(editingService.id, serviceData);
    } else {
      addService(serviceData);
    }
    closeModal();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="serif-text text-3xl text-white">Gestión de Servicios</h2>
        <button
          onClick={() => openModal()}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all"
        >
          + Nuevo Servicio
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <div key={service.id} className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="mb-4">
              <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
            </div>
            <h3 className="text-white text-xl font-bold mb-2">{service.name}</h3>
            <p className="text-white/60 text-sm mb-4">{service.description}</p>
            <p className="text-primary text-lg font-bold mb-4">
              ${service.price.toLocaleString()} MXN
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => openModal(service)}
                className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Editar
              </button>
              <button
                onClick={() => {
                  if (window.confirm('¿Estás seguro de eliminar este servicio?')) {
                    deleteService(service.id);
                  }
                }}
                className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-zinc-900 rounded-xl p-8 max-w-2xl w-full border border-white/10">
            <h3 className="serif-text text-2xl text-white mb-6">
              {editingService ? 'Editar Servicio' : 'Nuevo Servicio'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-zinc-800 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                  Descripción
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows="3"
                  className="w-full bg-zinc-800 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                  Icono
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {iconOptions.map(icon => (
                    <button
                      key={icon}
                      type="button"
                      onClick={() => setFormData({ ...formData, icon })}
                      className={`p-3 rounded-lg border transition-all ${
                        formData.icon === icon
                          ? 'bg-primary border-primary text-white'
                          : 'bg-zinc-800 border-white/10 text-white/60 hover:border-primary/50'
                      }`}
                    >
                      <span className="material-symbols-outlined">{icon}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                  Precio (MXN)
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full bg-zinc-800 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all"
                >
                  {editingService ? 'Actualizar' : 'Crear'}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesManagement;

