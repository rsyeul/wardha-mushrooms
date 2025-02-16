// src/pages/Products.tsx
import React from 'react';
import { Product } from '..';
import ProductCard from './ProductCard';

const ProductsList: React.FC = () => {
  const products: Product[] = [
    {
      id: '1',
      title: 'Fresh Oyster Mushrooms',
      price: 50,
      weight: '125g',
      freeDelivery: false,
      image: 'https://troomy.com/cdn/shop/articles/Lion_s_Mane_Mushroom_-_Adaptogenic_Mushrooms_with_Troomy.jpg?v=1675386810',
      description: 'Fresh, locally grown oyster mushrooms',
      category: 'fresh'
    },
    {
      id: '2',
      title: 'Fresh Oyster Mushrooms',
      price: 100,
      weight: '250g',
      freeDelivery: true,
      image: 'https://troomy.com/cdn/shop/articles/Lion_s_Mane_Mushroom_-_Adaptogenic_Mushrooms_with_Troomy.jpg?v=1675386810',
      description: 'Fresh, locally grown oyster mushrooms',
      category: 'fresh'
    },
    {
      id: '3',
      title: 'Dried Oyster Mushrooms',
      price: 100,
      weight: '125g',
      freeDelivery: true,
      image: 'https://troomy.com/cdn/shop/articles/Lion_s_Mane_Mushroom_-_Adaptogenic_Mushrooms_with_Troomy.jpg?v=1675386810',
      description: 'Premium quality dried oyster mushrooms',
      category: 'dried'
    }
  ];

  const handleAddToCart = (product: Product) => {
    // Implement cart functionality
    console.log('Added to cart:', product);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {
                products.map( (product) => {
                    return <ProductCard key ={product.id} product={product} onAddToCart={handleAddToCart}  ></ProductCard>
                }

                )
            }

        </div>
      </div>
    </section>)
}


export default ProductsList;