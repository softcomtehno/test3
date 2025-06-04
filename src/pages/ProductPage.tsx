import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { products } from '../data/products';
import { ShoppingCart, Heart, Share2, AlertCircle, TruckIcon, Shield, Award } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState(products.find(p => p.id === productId));
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { addToCart } = useCart();
  
  // Update document title
  useEffect(() => {
    if (product) {
      document.title = `${product.name} - СИЗмаркет`;
    } else {
      document.title = 'Товар не найден - СИЗмаркет';
    }
  }, [product]);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Товар не найден</h1>
          <p className="text-gray-600 mb-8">
            Запрашиваемый товар не существует или был удален.
          </p>
          <Button variant="primary">
            <Link to="/catalog">Вернуться в каталог</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const handleQuantityChange = (value: number) => {
    if (value < 1) return;
    setQuantity(value);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <nav className="flex text-sm">
            <Link to="/" className="text-gray-500 hover:text-red-600">Главная</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/catalog" className="text-gray-500 hover:text-red-600">Каталог</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link 
              to={`/catalog/${product.category}`} 
              className="text-gray-500 hover:text-red-600"
            >
              {product.category === 'head-protection' ? 'Защита головы' : 
               product.category === 'respiratory-protection' ? 'Защита дыхания' :
               product.category === 'hand-protection' ? 'Защита рук' :
               product.category === 'eye-protection' ? 'Защита глаз' :
               product.category === 'foot-protection' ? 'Защита ног' :
               product.category === 'body-protection' ? 'Защита тела' : 
               product.category}
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">{product.name}</span>
          </nav>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="mb-4 h-80 md:h-96 overflow-hidden rounded-lg border border-gray-200">
                <img 
                  src={product.images[activeImageIndex]} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              

            </div>
            
            {/* Product Details */}
            <div>
              <div className="flex items-center mb-2 space-x-2">
                <Badge variant="primary">
                  {product.category === 'head-protection' ? 'Защита головы' : 
                   product.category === 'respiratory-protection' ? 'Защита дыхания' :
                   product.category === 'hand-protection' ? 'Защита рук' :
                   product.category === 'eye-protection' ? 'Защита глаз' :
                   product.category === 'foot-protection' ? 'Защита ног' :
                   product.category === 'body-protection' ? 'Защита тела' : 
                   product.category}
                </Badge>
                
                {product.standards.map((standard, index) => (
                  <Badge key={index} variant="secondary">
                    {standard}
                  </Badge>
                ))}
                
                {product.inStock ? (
                  <Badge variant="success">В наличии</Badge>
                ) : (
                  <Badge variant="danger">Нет в наличии</Badge>
                )}
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                {product.name}
              </h1>
              
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">
                    {product.price} сом
                  </span>
                  {product.wholesalePrice && (
                    <span className="text-sm text-gray-500 ml-2">
                      от {product.minWholesaleOrder} шт: {product.wholesalePrice} сом
                    </span>
                  )}
                </div>
              </div>
              
              {product.inStock && (
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <label htmlFor="quantity" className="mr-4 text-gray-700 font-medium">
                      Количество:
                    </label>
                    <div className="flex items-center border border-gray-300 rounded">
                      <button 
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        onClick={() => handleQuantityChange(quantity - 1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        id="quantity"
                        min="1"
                        value={quantity}
                        onChange={(e) => handleQuantityChange(Number(e.target.value))}
                        className="w-12 text-center border-x border-gray-300 py-1 focus:outline-none"
                      />
                      <button 
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        onClick={() => handleQuantityChange(quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button 
                      variant="primary" 
                      onClick={handleAddToCart}
                      icon={<ShoppingCart size={18} />}
                    >
                      В корзину
                    </Button>
                    <Button 
                      variant="outline" 
                      icon={<Heart size={18} />}
                    >
                      В избранное
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Additional Info */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <TruckIcon size={20} className="text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Доставка</h3>
                    <p className="text-sm text-gray-600">1-3 рабочих дня по городу, 3-7 дней по стране</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield size={20} className="text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Гарантия</h3>
                    <p className="text-sm text-gray-600">14 дней на возврат, гарантия соответствия ГОСТ</p>
                  </div>
                </div>
                
                {product.expiryDate && (
                  <div className="flex items-start">
                    <AlertCircle size={20} className="text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Срок годности</h3>
                      <p className="text-sm text-gray-600">До {product.expiryDate}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="border-b border-gray-200 mb-6">
            <div className="flex -mb-px">
              <button className="px-4 py-2 font-medium text-red-600 border-b-2 border-red-600">
                Характеристики
              </button>
              <button className="px-4 py-2 font-medium text-gray-500 hover:text-gray-700">
                Документы
              </button>
              <button className="px-4 py-2 font-medium text-gray-500 hover:text-gray-700">
                Отзывы
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Технические характеристики</h3>
            <div className="space-y-2">
              {product.features.map((feature, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 py-2 border-b border-gray-100">
                  <div className="text-gray-600">{feature.split(':')[0]}</div>
                  <div className="md:col-span-2 font-medium">
                    {feature.includes(':') ? feature.split(':')[1] : feature}
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="font-semibold text-lg mt-6 mb-4">Сертификаты и стандарты</h3>
            <div className="space-y-2">
              {product.standards.map((standard, index) => (
                <div key={index} className="flex items-center">
                  <Award size={18} className="text-green-500 mr-2" />
                  <span>{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Похожие товары</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <div 
                  key={relatedProduct.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Link to={`/product/${relatedProduct.id}`}>
                    <img 
                      src={relatedProduct.images[0]} 
                      alt={relatedProduct.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-2">{relatedProduct.name}</h3>
                      <p className="text-lg font-bold text-gray-900">{relatedProduct.price} сом</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;