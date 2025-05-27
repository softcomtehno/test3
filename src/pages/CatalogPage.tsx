import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/products/ProductCard';
import { products } from '../data/products';
import { categories } from '../data/categories';
import Select from '../components/ui/Select';
import Input from '../components/ui/Input';
import { FilterIcon, Search } from 'lucide-react';

const CatalogPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId?: string }>();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryId || 'all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [showFilters, setShowFilters] = useState(false);

  // Update document title
  useEffect(() => {
    document.title = 'Каталог СИЗ - СИЗмаркет';
  }, []);

  // Filter products based on selected filters
  useEffect(() => {
    let result = products;
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
      
      // Filter by subcategory if category is selected
      if (selectedSubcategory && selectedSubcategory !== 'all') {
        result = result.filter(product => product.subcategory === selectedSubcategory);
      }
    }
    
    // Filter by price range
    result = result.filter(
      product => product.price >= priceRange.min && product.price <= priceRange.max
    );
    
    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, selectedSubcategory, priceRange]);

  // Set initial category from URL params
  useEffect(() => {
    if (categoryId) {
      setSelectedCategory(categoryId);
    }
  }, [categoryId]);

  // Get subcategories based on selected category
  const getSubcategories = () => {
    if (selectedCategory === 'all') {
      return [{ id: 'all', name: 'Все подкатегории' }];
    }
    
    const category = categories.find(cat => cat.id === selectedCategory);
    return category 
      ? [{ id: 'all', name: 'Все подкатегории' }, ...category.subcategories] 
      : [{ id: 'all', name: 'Все подкатегории' }];
  };

  // Format category name for display
  const getCategoryName = (id: string) => {
    if (id === 'all') return 'Все категории';
    const category = categories.find(cat => cat.id === id);
    return category ? category.name : id;
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {selectedCategory === 'all' ? 'Каталог товаров' : getCategoryName(selectedCategory)}
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'товар' : 
             filteredProducts.length > 1 && filteredProducts.length < 5 ? 'товара' : 'товаров'}
          </p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Input
                type="text"
                placeholder="Поиск товаров..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                fullWidth
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <div className="flex md:w-1/4">
              <Select
                options={[
                  { value: 'all', label: 'Все категории' },
                  ...categories.map(cat => ({ value: cat.id, label: cat.name }))
                ]}
                value={selectedCategory}
                onChange={setSelectedCategory}
                fullWidth
              />
            </div>
            
            <button 
              className="md:hidden flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FilterIcon size={18} className="mr-2" />
              Фильтры
            </button>
          </div>
          
          {/* Mobile Filters */}
          {showFilters && (
            <div className="mt-4 md:hidden">
              <div className="grid grid-cols-1 gap-4">
                <Select
                  label="Подкатегория"
                  options={getSubcategories().map(sub => ({ value: sub.id, label: sub.name }))}
                  value={selectedSubcategory}
                  onChange={setSelectedSubcategory}
                  fullWidth
                />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Цена (сом)
                  </label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      placeholder="От"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                    />
                    <span>-</span>
                    <Input
                      type="number"
                      placeholder="До"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Desktop Sidebar Filters */}
          <div className="hidden md:block w-64 bg-white rounded-lg shadow-md h-fit sticky top-24">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-semibold">Фильтры</h3>
            </div>
            
            <div className="p-4 border-b border-gray-200">
              <h4 className="font-medium mb-2">Подкатегория</h4>
              <div className="space-y-2">
                {getSubcategories().map(sub => (
                  <div key={sub.id} className="flex items-center">
                    <input
                      type="radio"
                      id={`sub-${sub.id}`}
                      name="subcategory"
                      checked={selectedSubcategory === sub.id}
                      onChange={() => setSelectedSubcategory(sub.id)}
                      className="h-4 w-4 text-red-600 focus:ring-red-500"
                    />
                    <label htmlFor={`sub-${sub.id}`} className="ml-2 text-sm text-gray-700">
                      {sub.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-4">
              <h4 className="font-medium mb-2">Цена (сом)</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    placeholder="От"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                    className="w-20"
                  />
                  <span>-</span>
                  <Input
                    type="number"
                    placeholder="До"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                    className="w-20"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="flex-grow">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">Товары не найдены</h3>
                <p className="text-gray-600">
                  Попробуйте изменить параметры поиска или фильтры
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CatalogPage;