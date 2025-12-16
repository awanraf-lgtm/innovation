export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  brand: string;
  model: string;
  colors: string[];
  materials: string[];
  features: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  tags: string[];
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  color: string;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Filter {
  brands: string[];
  priceRange: [number, number];
  categories: string[];
  colors: string[];
  materials: string[];
  inStock: boolean;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}