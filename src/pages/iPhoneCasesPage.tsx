import React from 'react';
import { Link } from 'react-router-dom';

const iPhoneCasesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              iPhone Cases
            </h1>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Premium protective cases for all iPhone models
            </p>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
              Products API coming soon
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="text-6xl mb-6">🚧</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              iPhone Products Coming Soon
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              We've successfully implemented the categories API with AWS DynamoDB, Lambda, and API Gateway. 
              The products API is next on our roadmap and will follow the same serverless architecture.
            </p>
          </div>

          {/* Architecture Info */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Current Backend Implementation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center p-4 bg-green-50 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl mb-2">✅</div>
                  <div className="font-medium text-green-800">Categories API</div>
                  <div className="text-sm text-green-600">DynamoDB + Lambda</div>
                </div>
              </div>
              <div className="flex items-center justify-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl mb-2">⏳</div>
                  <div className="font-medium text-yellow-800">Products API</div>
                  <div className="text-sm text-yellow-600">In Development</div>
                </div>
              </div>
              <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl mb-2">📋</div>
                  <div className="font-medium text-blue-800">Orders API</div>
                  <div className="text-sm text-blue-600">Planned</div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gray-100 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Next Development Steps</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <span className="text-primary-600">1.</span>
                <span className="text-gray-700">Create products DynamoDB table</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary-600">2.</span>
                <span className="text-gray-700">Develop products Lambda functions</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary-600">3.</span>
                <span className="text-gray-700">Configure API Gateway endpoints</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary-600">4.</span>
                <span className="text-gray-700">Integrate with frontend</span>
              </div>
            </div>
          </div>

          {/* Return to Home */}
          <div className="mt-8">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              ← Back to Categories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default iPhoneCasesPage;