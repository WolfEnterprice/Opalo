import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp debe usarse dentro de AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [suites, setSuites] = useState([
    {
      id: 1,
      name: 'Ópalo Sencilla',
      description: 'Elegancia minimalista y confort íntimo',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcBAwc9DMBjju6uD_KBj9LrI4Fl7hSeB2tV1lhS8obd5_QtPEJ3r25t5NDcvzuu8QM3jwO4zn9z1pokg6IlvbhoWg6K0053a7kv7D8tRFelHgIWq9hi3biM-Ew1lOuq7-kz_PcqYimDq2SWIn5KbeYjMbAYbxVsnMBwjaiHhz5vN4uCCJsy73U9pnQ_9DjOoi2jvBQbQZVZKn6ScXTJtgc6Qg55B17BzB6_II4D8P3FhcgvPhCgOJqrYafFqTzkb35uA4IT6TBkxE',
      price: 60000,
      available: true,
      benefits: ['Cama king size', 'Ducha de lluvia', '45 m²', 'TV Smart', 'WiFi premium'],
      amenities: ['tv', 'aire-acondicionado', 'minibar', 'caja-fuerte'],
      idealFor: 'Escapadas íntimas y parejas',
      size: '45 m²'
    },
    {
      id: 2,
      name: 'Ópalo Suite',
      description: 'Lujo total con vistas y exclusividad',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB2ja4JBZZmye3AW_l4-4I0uwfYXqyVYVhEpvt3829HUyFXcHoduk0IPHGGd1109kSqCBH1ItsELCr8oxNc0hZrofDMMzBTE6xAGo_vXnLgST1n6cVqD-oRivX4JYCo5c_kYZ8l06c734nA7Xn-jLiHUB-cJjsCfelVRllCDyqsvb60jmz3BSM87p7n5D7aI_v0L8HzFKGHsXicy3lbqx7lqj0DDa--YVdIYxKJGVsbafF4icwIx58B4q7lfQOpYr2dnRpIKpM878',
      price: 100000,
      available: true,
      benefits: ['Jacuzzi privado', 'Terraza con vista', '60 m²', 'Minibar incluido', 'Servicio de habitación'],
      amenities: ['tv', 'aire-acondicionado', 'minibar', 'jacuzzi', 'terraza', 'caja-fuerte'],
      idealFor: 'Aniversarios y celebraciones especiales',
      size: '60 m²'
    }
  ]);

  const [services, setServices] = useState([
    {
      id: 1,
      name: 'Decoración Romántica',
      description: 'Pétalos de rosa, velas artesanales y aromas que envuelven la atmósfera en misterio.',
      icon: 'loyalty',
      price: 60000
    },
    {
      id: 2,
      name: 'Catering Gourmet (persona extra)',
      description: 'Selección premium de cava, fresas con chocolate y delicias para despertar el paladar.',
      icon: 'bubbles',
      price: 25000
    }
  ]);

  const [reservations, setReservations] = useState([]);

  // Cargar datos del localStorage al iniciar
  useEffect(() => {
    const savedSuites = localStorage.getItem('opalo_suites');
    const savedServices = localStorage.getItem('opalo_services');
    const savedReservations = localStorage.getItem('opalo_reservations');
    const savedAuth = localStorage.getItem('opalo_auth');

    if (savedSuites) setSuites(JSON.parse(savedSuites));
    if (savedServices) setServices(JSON.parse(savedServices));
    if (savedReservations) setReservations(JSON.parse(savedReservations));
    if (savedAuth) setIsAuthenticated(JSON.parse(savedAuth));
  }, []);

  // Guardar datos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('opalo_suites', JSON.stringify(suites));
  }, [suites]);

  useEffect(() => {
    localStorage.setItem('opalo_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('opalo_reservations', JSON.stringify(reservations));
  }, [reservations]);

  useEffect(() => {
    localStorage.setItem('opalo_auth', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const login = (username, password) => {
    // Credenciales por defecto: admin / admin123
    if (username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const addSuite = (suite) => {
    const newSuite = {
      ...suite,
      id: Date.now(),
      available: suite.available !== undefined ? suite.available : true
    };
    setSuites([...suites, newSuite]);
  };

  const updateSuite = (id, updatedSuite) => {
    setSuites(suites.map(suite => suite.id === id ? { ...suite, ...updatedSuite } : suite));
  };

  const deleteSuite = (id) => {
    setSuites(suites.filter(suite => suite.id !== id));
  };

  const addService = (service) => {
    const newService = {
      ...service,
      id: Date.now()
    };
    setServices([...services, newService]);
  };

  const updateService = (id, updatedService) => {
    setServices(services.map(service => service.id === id ? { ...service, ...updatedService } : service));
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  const addReservation = (reservation) => {
    const newReservation = {
      ...reservation,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    setReservations([...reservations, newReservation]);
  };

  const updateReservation = (id, updatedReservation) => {
    setReservations(reservations.map(res => res.id === id ? { ...res, ...updatedReservation } : res));
  };

  const deleteReservation = (id) => {
    setReservations(reservations.filter(res => res.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        suites,
        addSuite,
        updateSuite,
        deleteSuite,
        services,
        addService,
        updateService,
        deleteService,
        reservations,
        addReservation,
        updateReservation,
        deleteReservation
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

