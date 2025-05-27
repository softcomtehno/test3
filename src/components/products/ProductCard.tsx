import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <button className="p-1.5 bg-white rounded-full shadow-sm transition-colors hover:bg-gray-100">
              <Heart size={18} className="text-gray-500" />
            </button>
          </div>
          {!product.inStock && (
            <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-center py-1 text-sm font-medium">
              Нет в наличии
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex items-center mb-2">
            <Badge variant="primary" className="mr-2">
              {product.category === 'head-protection' ? 'Защита головы' : 
               product.category === 'respiratory-protection' ? 'Защита дыхания' :
               product.category === 'hand-protection' ? 'Защита рук' :
               product.category === 'eye-protection' ? 'Защита глаз' :
               product.category === 'foot-protection' ? 'Защита ног' :
               product.category === 'body-protection' ? 'Защита тела' : 
               product.category}
            </Badge>
            {product.standards[0] && (
              <Badge variant="secondary">{product.standards[0]}</Badge>
            )}
          </div>
          
          <h3 className="text-gray-900 font-semibold text-lg mb-1 line-clamp-2">
            {product.name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description.substring(0, 80)}...
          </p>
          
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-xl font-bold text-gray-900">
                {product.price} сом
              </span>
              {product.wholesalePrice && (
                <span className="text-sm text-gray-500 ml-2">
                  от {product.minWholesaleOrder} шт: {product.wholesalePrice} сом
                </span>
              )}
            </div>
          </div>
          
          <Button 
            variant="primary" 
            fullWidth 
            onClick={handleAddToCart}
            disabled={!product.inStock}
            icon={<ShoppingCart size={16} />}
          >
            {product.inStock ? 'В корзину' : 'Сообщить о поступлении'}
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;