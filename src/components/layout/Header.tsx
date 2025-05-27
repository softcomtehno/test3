import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';
import Button from '../ui/Button';
import { useCart } from '../../context/CartContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-red-600">СИЗмаркет</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-red-600 font-medium">
              Главная
            </Link>
            <Link to="/catalog" className="text-gray-700 hover:text-red-600 font-medium">
              Каталог
            </Link>

            <Link to="/blog" className="text-gray-700 hover:text-red-600 font-medium">
              Блог
            </Link>

          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-gray-700 hover:text-red-600 relative">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button 
              className="text-gray-700 hover:text-red-600 md:hidden"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col py-4 px-4">
            <Link to="/" className="py-2 text-gray-700 hover:text-red-600 font-medium">
              Главная
            </Link>
            <Link to="/catalog" className="py-2 text-gray-700 hover:text-red-600 font-medium">
              Каталог
            </Link>
            <Link to="/wholesale" className="py-2 text-gray-700 hover:text-red-600 font-medium">
              Оптовикам
            </Link>
            <Link to="/certificates" className="py-2 text-gray-700 hover:text-red-600 font-medium">
              Сертификаты
            </Link>
            <Link to="/blog" className="py-2 text-gray-700 hover:text-red-600 font-medium">
              Блог
            </Link>
            <Link to="/contact" className="py-2 text-gray-700 hover:text-red-600 font-medium">
              Контакты
            </Link>
            <Link to="/account" className="py-2 text-gray-700 hover:text-red-600 font-medium">
              Личный кабинет
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;