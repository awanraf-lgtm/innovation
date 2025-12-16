import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import ProductGrid from '../components/product/ProductGrid';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data - replace with API call later
  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Clear Crystal Case - iPhone 15 Pro',
        description: 'Ultra-transparent case with reinforced corners and drop protection',
        price: 24.99,
        originalPrice: 34.99,
        images: ['/placeholder-case.jpg'],
        category: 'clear-cases',
        brand: 'CellCase Pro',
        model: 'iPhone 15 Pro',
        colors: ['Clear', 'Pink', 'Blue'],
        materials: ['TPU', 'Polycarbonate'],
        features: ['Drop Protection', 'Wireless Charging Compatible', 'Easy Installation'],
        inStock: true,
        rating: 4.5,
        reviewCount: 128,
        tags: ['bestseller', 'new-arrival']
      },
      {
        id: '2',
        name: 'Leather Wallet Case - iPhone 15',
        description: 'Premium leather case with card slots and stand function',
        price: 39.99,
        originalPrice: 49.99,
        images: ['/placeholder-case.jpg'],
        category: 'wallet-cases',
        brand: 'CellCase Pro',
        model: 'iPhone 15',
        colors: ['Black', 'Brown', 'Burgundy'],
        materials: ['Genuine Leather', 'Microfiber'],
        features: ['Card Storage', 'Stand Function', 'RFID Blocking'],
        inStock: true,
        rating: 4.8,
        reviewCount: 89,
        tags: ['premium']
      },
      {
        id: '3',
        name: 'Rugged Armor Case - Samsung S24',
        description: 'Military-grade protection with enhanced grip',
        price: 29.99,
        images: ['/placeholder-case.jpg'],
        category: 'rugged-cases',
        brand: 'CellCase Pro',
        model: 'Samsung Galaxy S24',
        colors: ['Black', 'Navy', 'Red'],
        materials: ['TPU', 'Polycarbonate', 'Aluminum'],
        features: ['Military Grade', 'Enhanced Grip', 'Port Protection'],
        inStock: true,
        rating: 4.6,
        reviewCount: 156,
        tags: ['rugged']
      },
      {
        id: '4',
        name: 'Magnetic MagSafe Case - iPhone 15 Pro Max',
        description: 'Perfect MagSafe compatibility with strong magnetic hold',
        price: 27.99,
        images: ['/placeholder-case.jpg'],
        category: 'magsafe-cases',
        brand: 'CellCase Pro',
        model: 'iPhone 15 Pro Max',
        colors: ['Space Black', 'Silver', 'Gold'],
        materials: ['TPU', 'Magnetic Ring'],
        features: ['MagSafe Compatible', 'Strong Magnets', 'Wireless Charging'],
        inStock: false,
        rating: 4.7,
        reviewCount: 203,
        tags: ['magsafe']
      },
      {
        id: '5',
        name: 'Slim Minimalist Case - iPhone 14',
        description: 'Ultra-thin protection without the bulk',
        price: 19.99,
        originalPrice: 24.99,
        images: ['/placeholder-case.jpg'],
        category: 'slim-cases',
        brand: 'CellCase Pro',
        model: 'iPhone 14',
        colors: ['Clear', 'Black', 'White', 'Rose Gold'],
        materials: ['TPU'],
        features: ['Ultra Thin', 'Lightweight', 'Precise Cutouts'],
        inStock: true,
        rating: 4.3,
        reviewCount: 67,
        tags: ['minimalist']
      }
    ];

    // Simulate API loading delay
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Premium Phone Cases
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Protect your device in style with our collection of high-quality phone cases
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Shop iPhone Cases
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                Shop Samsung Cases
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'Clear Cases', icon: '🔍', count: 45 },
              { name: 'Wallet Cases', icon: '👛', count: 32 },
              { name: 'Rugged Cases', icon: '🛡️', count: 28 },
              { name: 'MagSafe Cases', icon: '🧲', count: 23 },
              { name: 'Accessories', icon: '📱', count: 19 }
            ].map((category) => (
              <div key={category.name} className="card p-4 text-center hover:shadow-md transition-shadow cursor-pointer group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-medium text-gray-900 text-sm mb-1">{category.name}</h3>
                <p className="text-xs text-gray-500">{category.count} items</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
              Featured Products
            </h2>
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              View All Products →
            </button>
          </div>
          
          <ProductGrid 
            products={products} 
            loading={loading}
            onAddToCart={(productId) => {
              // This will be connected to cart functionality later
              console.log('Add to cart:', productId);
            }}
            onQuickView={(productId) => {
              console.log('Quick view:', productId);
            }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🚚',
                title: 'Free Shipping',
                description: 'Free shipping on orders over $25'
              },
              {
                icon: '🔒',
                title: 'Secure Payment',
                description: '100% secure payment processing'
              },
              {
                icon: '↩️',
                title: 'Easy Returns',
                description: '30-day return policy'
              },
              {
                icon: '🎧',
                title: '24/7 Support',
                description: 'Round-the-clock customer service'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;