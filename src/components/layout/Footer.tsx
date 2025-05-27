import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">СИЗмаркет</h3>
            <p className="text-gray-400 mb-4">
              Ваш надежный поставщик средств индивидуальной защиты для промышленности, строительства и медицины.
            </p>
            <div className="flex items-center text-gray-400 mb-2">
              <Shield size={18} className="mr-2 text-red-500" />
              <span>Сертифицированная продукция</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-red-500" />
                <div>
                  <p className="text-white">+996 (XXX) XXX-XXX</p>
                  <p className="text-gray-400 text-sm">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-red-500" />
                <p className="text-gray-400">info@sizmarket.kg</p>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-red-500" />
                <p className="text-gray-400">г. Бишкек, ул. Примерная, 123</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} СИЗмаркет. Все права защищены.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-sm text-gray-400">
                <li>
                  <Link to="/privacy" className="hover:text-white transition-colors">
                    Политика конфиденциальности
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-white transition-colors">
                    Условия использования
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;