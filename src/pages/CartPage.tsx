import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

const CartPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, totalItems, totalPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Update document title
  React.useEffect(() => {
    document.title = 'Корзина - СИЗмаркет';
  }, []);

  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    updateQuantity(productId, quantity);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Корзина</h1>
        
        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Cart Items */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <div className="border-b border-gray-200 p-4 bg-gray-50">
                  <h2 className="font-semibold">Товары в корзине ({totalItems})</h2>
                </div>
                
                <div>
                  {items.map((item) => (
                    <div 
                      key={item.product.id} 
                      className="p-4 border-b border-gray-200 last:border-b-0 flex flex-col sm:flex-row items-start"
                    >
                      <div className="sm:w-20 sm:h-20 w-full h-32 mb-4 sm:mb-0 sm:mr-4">
                        <img 
                          src={item.product.images[0]} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <Link 
                          to={`/product/${item.product.id}`} 
                          className="font-medium text-gray-900 hover:text-red-600"
                        >
                          {item.product.name}
                        </Link>
                        
                        <div className="flex flex-wrap items-baseline mt-1 mb-2">
                          <span className="text-gray-600 mr-2">
                            {item.product.price} сом × {item.quantity}
                          </span>
                          <span className="font-semibold">
                            = {item.product.price * item.quantity} сом
                          </span>
                        </div>
                        
                        <div className="flex items-center mt-2">
                          <div className="flex items-center border border-gray-300 rounded mr-4">
                            <button 
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <span className="w-8 text-center py-1">{item.quantity}</span>
                            <button 
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                          
                          <button 
                            className="text-gray-500 hover:text-red-600 focus:outline-none"
                            onClick={() => removeFromCart(item.product.id)}
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex flex-wrap gap-4 mb-6 lg:mb-0">
                <Link to="/catalog">
                  <Button variant="outline" icon={<ShoppingBag size={18} />}>
                    Продолжить покупки
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
                <div className="border-b border-gray-200 p-4 bg-gray-50">
                  <h2 className="font-semibold">Сумма заказа</h2>
                </div>
                
                <div className="p-4">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Товары ({totalItems})</span>
                      <span>{totalPrice} сом</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Доставка</span>
                      <span>300 сом</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 mt-3">
                      <div className="flex justify-between font-semibold">
                        <span>Итого</span>
                        <span>{totalPrice + 300} сом</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    variant="primary"
                    fullWidth
                    size="lg"
                    icon={<ArrowRight size={18} />}
                    onClick={() => setIsCheckingOut(true)}
                  >
                    Оформить заказ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingBag size={64} className="text-gray-300" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Ваша корзина пуста</h2>
            <p className="text-gray-600 mb-6">
              Добавьте товары в корзину, чтобы оформить заказ
            </p>
            <Link to="/catalog">
              <Button variant="primary">Перейти в каталог</Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;