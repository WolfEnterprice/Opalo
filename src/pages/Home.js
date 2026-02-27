import React from 'react';
import Hero from '../components/Hero';
import SuitesGallery from '../components/SuitesGallery';
import Philosophy from '../components/Philosophy';
import Services from '../components/Services';
import LocationMap from '../components/LocationMap';

const Home = () => {
  return (
    <>
      <Hero />
      <main id="main-content">
        <SuitesGallery />
        <Philosophy />
        <Services />
        <LocationMap />
      </main>
    </>
  );
};

export default Home;

