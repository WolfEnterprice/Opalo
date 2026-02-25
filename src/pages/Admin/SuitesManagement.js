import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

const SuitesManagement = () => {
  const { suites, addSuite, updateSuite, deleteSuite } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSuite, setEditingSuite] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    available: true
  });

  const openModal = (suite = null) => {
    if (suite) {
      setEditingSuite(suite);
      setFormData({
        name: suite.name,
        description: suite.description,
        image: suite.image,
        price: suite.price.toString(),
        available: suite.available
      });
    } else {
      setEditingSuite(null);
      setFormData({
        name: '',
        description: '',
        image: '',
        price: '',
        available: true
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingSuite(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const suiteData = {
      ...formData,
      price: parseFloat(formData.price)
    };

    if (editingSuite) {
      updateSuite(editingSuite.id, suiteData);
    } else {
      addSuite(suiteData);
    }
    closeModal();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="serif-text text-3xl text-white">Gestión de Suites</h2>
        <button
          onClick={() => openModal()}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all"
        >
          + Nueva Suite
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {suites.map(suite => (
          <div key={suite.id} className="bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
            <img src={suite.image} alt={suite.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="serif-text text-2xl text-white mb-2">{suite.name}</h3>
              <p className="text-white/60 text-sm mb-4">{suite.description}</p>
              <p className="text-primary text-lg font-bold mb-4">
                ${suite.price.toLocaleString()} MXN/noche
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-xs px-2 py-1 rounded ${suite.available ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                  {suite.available ? 'Disponible' : 'No Disponible'}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => openModal(suite)}
                  className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Editar
                </button>
                <button
                  onClick={() => {
                    if (window.confirm('¿Estás seguro de eliminar esta suite?')) {
                      deleteSuite(suite.id);
                    }
                  }}
                  className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-zinc-900 rounded-xl p-8 max-w-2xl w-full border border-white/10">
            <h3 className="serif-text text-2xl text-white mb-6">
              {editingSuite ? 'Editar Suite' : 'Nueva Suite'}
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
                <input
                  type="text"
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-zinc-800 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                  URL de Imagen
                </label>
                <input
                  type="url"
                  required
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full bg-zinc-800 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                  Precio por Noche (MXN)
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
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="available"
                  checked={formData.available}
                  onChange={(e) => setFormData({ ...formData, available: e.target.checked })}
                  className="w-5 h-5 text-primary bg-zinc-800 border-white/10 rounded focus:ring-primary"
                />
                <label htmlFor="available" className="text-white text-sm">
                  Disponible
                </label>
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all"
                >
                  {editingSuite ? 'Actualizar' : 'Crear'}
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

export default SuitesManagement;

