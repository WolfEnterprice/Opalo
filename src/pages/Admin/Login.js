import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useApp();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(credentials.username, credentials.password)) {
      navigate('/admin/dashboard');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="min-h-screen bg-background-dark flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="size-16 text-primary mx-auto mb-4">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
            </svg>
          </div>
          <h1 className="serif-text text-4xl text-white mb-2">Panel Administrativo</h1>
          <p className="text-white/60 text-sm">Ópalo Suites</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                Usuario
              </label>
              <input
                type="text"
                required
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="w-full bg-zinc-800 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                placeholder="admin"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                Contraseña
              </label>
              <input
                type="password"
                required
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full bg-zinc-800 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                placeholder="admin123"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-primary/20"
            >
              Iniciar Sesión
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-white/40 text-xs">
              Credenciales por defecto: admin / admin123
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

