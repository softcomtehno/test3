import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';
import { products } from '../../data/products';
import Button from '../ui/Button';

const FeaturedProducts: React.FC = () => {
  // Get first 4 products for featured section
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Популярные товары</h2>
          <Link to="/catalog">
            <Button variant="outline">
              Все товары
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;