import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Truck, Receipt, CreditCard } from 'lucide-react';
import Button from '../ui/Button';

const WholesaleSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Специальные условия для оптовых клиентов</h2>
            <p className="text-xl text-gray-300 mb-8">
              Предлагаем выгодные условия сотрудничества для строительных компаний, промышленных предприятий и клиник
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex">
                <div className="mr-4 text-red-500">
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Юридическим лицам</h3>
                  <p className="text-gray-400 text-sm">
                    Работаем с НДС, предоставляем все необходимые документы
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 text-red-500">
                  <Truck size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Бесплатная доставка</h3>
                  <p className="text-gray-400 text-sm">
                    При заказе от 30,000 сом доставка бесплатна
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 text-red-500">
                  <Receipt size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Отсрочка платежа</h3>
                  <p className="text-gray-400 text-sm">
                    Возможность отсрочки платежа для постоянных клиентов
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 text-red-500">
                  <CreditCard size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Скидки</h3>
                  <p className="text-gray-400 text-sm">
                    Прогрессивная система скидок в зависимости от объема
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                <Link to="/wholesale">Условия для оптовиков</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Связаться с менеджером</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-500/20 rounded-full mix-blend-multiply filter blur-xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl"></div>
            <img 
              src="https://images.pexels.com/photos/8943640/pexels-photo-8943640.jpeg" 
              alt="Оптовые поставки СИЗ" 
              className="relative z-10 rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WholesaleSection;