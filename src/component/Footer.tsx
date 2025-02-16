// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">About Us</h4>
            <p className="text-gray-400">
              Wardha Mushroom is a leading producer of premium-quality oyster mushrooms,
              serving customers locally and globally.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/wholesale" className="text-gray-400 hover:text-white">
                  Wholesale
                </Link>
              </li>
              <li>
                <Link to="/global" className="text-gray-400 hover:text-white">
                  Global Trade
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                Wardha, Maharashtra
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2" />
                +91 XXXXXXXXXX
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2" />
                info@wardhamushroom.com
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Business Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Clock className="w-5 h-5 mr-2" />
                Mon - Sat: 9:00 AM - 6:00 PM
              </li>
              <li className="flex items-center text-gray-400">
                <Clock className="w-5 h-5 mr-2" />
                Sunday: Closed
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          © 2025 Wardha Mushroom. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;