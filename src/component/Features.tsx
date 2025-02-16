// src/components/Features.tsx
import React from 'react';

const Features: React.FC = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <img src="/api/placeholder/32/32" alt="Quality" className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
          <p className="text-gray-600">Grown with care under strict quality standards</p>
        </div>
        <div className="text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <img src="/api/placeholder/32/32" alt="Delivery" className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
          <p className="text-gray-600">On orders above ₹100</p>
        </div>
        <div className="text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <img src="/api/placeholder/32/32" alt="Support" className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600">Dedicated customer service</p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;