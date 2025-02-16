import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (path: string): string => {
    return location.pathname === path ? 'text-green-700' : 'text-gray-600';
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-green-700">
            Wardha Mushroom
          </Link>
          
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className={`hover:text-green-700 ${isActiveLink('/')}`}>
              Home
            </Link>
            <Link to="/products" className={`hover:text-green-700 ${isActiveLink('/products')}`}>
              Products
            </Link>
            <Link to="/wholesale" className={`hover:text-green-700 ${isActiveLink('/wholesale')}`}>
              Wholesale
            </Link>
            <Link to="/global" className={`hover:text-green-700 ${isActiveLink('/global')}`}>
              Global Trade
            </Link>
            <Link to="/blog" className={`hover:text-green-700 ${isActiveLink('/blog')}`}>
              Blog
            </Link>
            <Link to="/contact" className={`hover:text-green-700 ${isActiveLink('/contact')}`}>
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <ShoppingCart className="text-gray-600 hover:text-green-700 cursor-pointer" />
            <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800">
              Login
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 space-y-2">
            <Link to="/" className="block py-2 text-gray-600 hover:text-green-700">
              Home
            </Link>
            <Link to="/products" className="block py-2 text-gray-600 hover:text-green-700">
              Products
            </Link>
            <Link to="/wholesale" className="block py-2 text-gray-600 hover:text-green-700">
              Wholesale
            </Link>
            <Link to="/global" className="block py-2 text-gray-600 hover:text-green-700">
              Global Trade
            </Link>
            <Link to="/blog" className="block py-2 text-gray-600 hover:text-green-700">
              Blog
            </Link>
            <Link to="/contact" className="block py-2 text-gray-600 hover:text-green-700">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;