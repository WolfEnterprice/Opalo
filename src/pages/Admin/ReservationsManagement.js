import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

const ReservationsManagement = () => {
  const { reservations, deleteReservation } = useApp();
  const [filter, setFilter] = useState('all');

  const filteredReservations = reservations.filter(res => {
    if (filter === 'all') return true;
    // Aquí puedes agregar más filtros si es necesario
    return true;
  });

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="serif-text text-3xl text-white">Gestión de Reservaciones</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-primary text-white'
                : 'bg-zinc-800 text-white/60 hover:text-white'
            }`}
          >
            Todas
          </button>
        </div>
      </div>

      {filteredReservations.length === 0 ? (
        <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-12 text-center border border-white/10">
          <span className="material-symbols-outlined text-6xl text-white/20 mb-4">event_busy</span>
          <p className="text-white/60">No hay reservaciones registradas</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredReservations.map(reservation => (
            <div
              key={reservation.id}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-white text-xl font-bold mb-1">
                        {reservation.name}
                      </h3>
                      <p className="text-white/60 text-sm">{reservation.email}</p>
                      <p className="text-white/60 text-sm">{reservation.phone}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary text-2xl font-bold">
                        ${reservation.total?.toLocaleString('es-CO')} COP
                      </p>
                      <p className="text-white/40 text-xs">
                        {formatDate(reservation.createdAt)}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Suite</p>
                      <p className="text-white font-medium">
                        {reservation.suite?.name || 'N/A'}
                      </p>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Huéspedes</p>
                      <p className="text-white font-medium">{reservation.guests}</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Llegada</p>
                      <p className="text-white font-medium">{reservation.checkIn}</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Salida</p>
                      <p className="text-white font-medium">{reservation.checkOut}</p>
                    </div>
                  </div>

                  {reservation.services && reservation.services.length > 0 && (
                    <div className="mb-4">
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Servicios</p>
                      <div className="flex flex-wrap gap-2">
                        {reservation.services.map(service => (
                          <span
                            key={service.id}
                            className="bg-primary/20 text-primary px-3 py-1 rounded-lg text-xs font-medium"
                          >
                            {service.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {reservation.specialRequests && (
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                        Solicitudes Especiales
                      </p>
                      <p className="text-white/60 text-sm">{reservation.specialRequests}</p>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 md:flex-col">
                  <button
                    onClick={() => {
                      if (window.confirm('¿Estás seguro de eliminar esta reservación?')) {
                        deleteReservation(reservation.id);
                      }
                    }}
                    className="bg-red-500/20 hover:bg-red-500/30 text-red-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReservationsManagement;

