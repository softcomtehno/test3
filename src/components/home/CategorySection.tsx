import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Settings as Lungs, HandMetal, Eye, Bot as Boot, Shield } from 'lucide-react';
import { categories } from '../../data/categories';

const CategorySection: React.FC = () => {
  // Map category icons to Lucide components
  const getIcon = (iconName: string, size: number = 32) => {
    switch (iconName) {
      case 'HardHat':
        return <HardHat size={size} />;
      case 'Lungs':
        return <Lungs size={size} />;
      case 'HandMetal':
        return <HandMetal size={size} />;
      case 'Eye':
        return <Eye size={size} />;
      case 'Boot':
        return <Boot size={size} />;
      case 'Shield':
        return <Shield size={size} />;
      default:
        return <Shield size={size} />;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Категории товаров</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Широкий ассортимент средств индивидуальной защиты для различных отраслей промышленности и строительства
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/catalog/${category.id}`}
              className="bg-white rounded-lg p-6 text-center shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex justify-center mb-4 text-red-600">
                {getIcon(category.icon)}
              </div>
              <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
              <p className="text-sm text-gray-500">
                {category.subcategories.slice(0, 2).map(sub => sub.name).join(', ')}
                {category.subcategories.length > 2 && '...'}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;