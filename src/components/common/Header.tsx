import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  cartItemCount?: number;
  onCartClick?: () => void;
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  cartItemCount = 0, 
  onCartClick, 
  onMenuClick 
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile header */}
        <div className="flex items-center justify-between h-16 md:hidden">
          {/* Menu button */}
          <button 
            onClick={onMenuClick}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="text-xl font-bold text-gray-900">
              CellCase<span className="text-primary-500">Pro</span>
            </Link>
          </div>

          {/* Cart button */}
          <button 
            onClick={onCartClick}
            className="relative p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Shopping cart"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount > 99 ? '99+' : cartItemCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile search bar */}
        <div className="pb-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search phone cases..."
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                isSearchFocused ? 'border-primary-500' : 'border-gray-300'
              }`}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <svg 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Desktop header */}
        <div className="hidden md:flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              CellCase<span className="text-primary-500">Pro</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link 
              to="/iphone-cases" 
              className={`px-3 py-2 font-medium transition-colors ${
                location.pathname === '/iphone-cases' 
                  ? 'text-primary-500 border-b-2 border-primary-500' 
                  : 'text-gray-700 hover:text-primary-500'
              }`}
            >
              iPhone Cases
            </Link>
            <Link 
              to="/samsung-cases" 
              className={`px-3 py-2 font-medium transition-colors ${
                location.pathname === '/samsung-cases' 
                  ? 'text-primary-500 border-b-2 border-primary-500' 
                  : 'text-gray-700 hover:text-primary-500'
              }`}
            >
              Samsung Cases
            </Link>
            <Link 
              to="/accessories" 
              className={`px-3 py-2 font-medium transition-colors ${
                location.pathname === '/accessories' 
                  ? 'text-primary-500 border-b-2 border-primary-500' 
                  : 'text-gray-700 hover:text-primary-500'
              }`}
            >
              Accessories
            </Link>
            <Link 
              to="/new-arrivals" 
              className={`px-3 py-2 font-medium transition-colors ${
                location.pathname === '/new-arrivals' 
                  ? 'text-primary-500 border-b-2 border-primary-500' 
                  : 'text-gray-700 hover:text-primary-500'
              }`}
            >
              New Arrivals
            </Link>
          </nav>

          {/* Desktop search */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search phone cases..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <svg 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Desktop cart and user */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={onCartClick}
              className="relative p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
              aria-label="Shopping cart"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount > 99 ? '99+' : cartItemCount}
                </span>
              )}
            </button>
            
            <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;