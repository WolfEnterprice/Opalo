import React from 'react';
import { useApp } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import SuitesManagement from './SuitesManagement';
import ServicesManagement from './ServicesManagement';
import ReservationsManagement from './ReservationsManagement';

const Dashboard = () => {
  const { isAuthenticated, logout } = useApp();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('reservations');

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background-dark">
      <div className="bg-zinc-900/50 backdrop-blur-sm border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
              </svg>
            </div>
            <h1 className="text-xl font-bold tracking-widest uppercase text-white">
              Panel de <span className="text-primary font-light">Administración</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="text-white/60 hover:text-white text-sm uppercase tracking-wider transition-colors"
            >
              Ver Sitio
            </button>
            <button
              onClick={logout}
              className="bg-red-500/20 hover:bg-red-500/30 text-red-300 px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 border-b border-white/10">
            <button
              onClick={() => setActiveTab('reservations')}
              className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'reservations'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Reservaciones
            </button>
            <button
              onClick={() => setActiveTab('suites')}
              className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'suites'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Suites
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'services'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Servicios
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'reservations' && <ReservationsManagement />}
        {activeTab === 'suites' && <SuitesManagement />}
        {activeTab === 'services' && <ServicesManagement />}
      </div>
    </div>
  );
};

export default Dashboard;

