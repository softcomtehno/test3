import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:categoryId" element={<CatalogPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postId" element={<BlogPostPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;