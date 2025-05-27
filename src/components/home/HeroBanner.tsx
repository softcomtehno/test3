import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, TruckIcon } from 'lucide-react';
import Button from '../ui/Button';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/8961274/pexels-photo-8961274.jpeg)' 
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Профессиональные средства защиты для вашей безопасности
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Сертифицированные СИЗ от ведущих производителей с доставкой по всей стране
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" variant="primary">
              <Link to="/catalog">Перейти в каталог</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link to="/wholesale">Оптовые поставки</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Shield size={24} className="text-red-500 mr-3" />
              <div>
                <h3 className="font-semibold">Сертифицированная продукция</h3>
                <p className="text-sm text-gray-300">Соответствие ГОСТ и EN</p>
              </div>
            </div>
            <div className="flex items-center">
              <Award size={24} className="text-red-500 mr-3" />
              <div>
                <h3 className="font-semibold">Гарантия качества</h3>
                <p className="text-sm text-gray-300">Проверенные производители</p>
              </div>
            </div>
            <div className="flex items-center">
              <TruckIcon size={24} className="text-red-500 mr-3" />
              <div>
                <h3 className="font-semibold">Быстрая доставка</h3>
                <p className="text-sm text-gray-300">По всей стране</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;