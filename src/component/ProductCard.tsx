// src/components/ProductCard.tsx
import React from 'react';
import { Product } from '..';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-4">{product.weight}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">₹{product.price}</span>
          {product.freeDelivery && (
            <span className="text-green-700 text-sm">Free Delivery</span>
          )}
        </div>
        <button 
          onClick={() => onAddToCart(product)}
          className="w-full mt-4 bg-green-700 text-white py-2 rounded hover:bg-green-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
