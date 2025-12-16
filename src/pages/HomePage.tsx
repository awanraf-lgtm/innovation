import React, { useState, useEffect } from 'react';
import { apiService, Category } from '../services/api';

const HomePage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedCategories = await apiService.fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Failed to load categories:', error);
        setError('Failed to load categories. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading categories...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Categories</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              CellCase Pro
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Premium phone cases and accessories powered by AWS serverless technology
            </p>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Live data from AWS DynamoDB
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of {categories.length} categories, loaded directly from our AWS backend API
            </p>
          </div>

          {categories.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Categories Found</h3>
              <p className="text-gray-600">Categories will appear here once loaded from the API.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {categories.map((category) => (
                <div key={category.categoryId} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer">
                  <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-primary-100 to-primary-200">
                    <div className="flex items-center justify-center">
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {category.categoryId === 'iphone-cases' && '📱'}
                        {category.categoryId === 'samsung-cases' && '📲'}
                        {category.categoryId === 'accessories' && '🎧'}
                        {category.categoryId === 'wireless-chargers' && '🔌'}
                        {category.categoryId === 'screen-protectors' && '🛡️'}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-primary-600 font-medium">
                        #{category.slug}
                      </span>
                      <span className="text-xs text-gray-500">
                        Order: {category.displayOrder}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* API Status Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Backend API Status</h3>
              <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Connected to AWS
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-600">{categories.length}</div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">✓</div>
                <div className="text-sm text-gray-600">DynamoDB</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">✓</div>
                <div className="text-sm text-gray-600">Lambda</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">✓</div>
                <div className="text-sm text-gray-600">API Gateway</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                API Endpoint: https://ynrbuyia43.execute-api.us-east-1.amazonaws.com/prod/categories
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;