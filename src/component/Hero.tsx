// src/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => (
  <section className="relative h-96">
    <div className="absolute inset-0 bg-black/50" />
    <img
      src="/api/placeholder/1920/600"
      alt="Fresh Mushrooms"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex items-center justify-center text-center">
      <div className="max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Fresh & Dried Oyster Mushrooms
        </h1>
        <p className="text-xl text-white mb-8">
          Delivered to Your Doorstep with Unmatched Quality
        </p>
        <button className="bg-green-700 text-white px-8 py-3 rounded-full text-lg hover:bg-green-800">
          Shop Now
        </button>
      </div>
    </div>
  </section>
);

export default Hero;