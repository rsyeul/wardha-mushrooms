// src/pages/Home.tsx
import React from 'react';
import Hero from './Hero';
import Features from './Features';
import ProductsList from './Products';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <ProductsList />
    </div>
  );
};

export default Home;