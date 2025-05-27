export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  description: string;
  features: string[];
  standards: string[];
  images: string[];
  inStock: boolean;
  wholesalePrice?: number;
  minWholesaleOrder?: number;
  expiryDate?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isCompany: boolean;
  companyName?: string;
  companyTaxId?: string;
  address?: string;
  phone?: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalPrice: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
  shippingAddress: string;
  paymentMethod: 'card' | 'cash' | 'bank-transfer';
  isCompanyOrder: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}