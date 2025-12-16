import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  onClose, 
  currentPath, 
  onNavigate 
}) => {
  const menuItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'iPhone Cases', path: '/iphone-cases', icon: '📱' },
    { name: 'Samsung Cases', path: '/samsung-cases', icon: '📱' },
    { name: 'Accessories', path: '/accessories', icon: '🔌' },
    { name: 'New Arrivals', path: '/new-arrivals', icon: '✨' },
    { name: 'Sale', path: '/sale', icon: '🏷️' }
  ];

  const handleItemClick = (path: string) => {
    onNavigate(path);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div
        className={`fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">
            CellCase<span className="text-primary-500">Pro</span>
          </h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 py-4">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleItemClick(item.path)}
                className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-100 transition-colors ${
                  currentPath === item.path 
                    ? 'bg-primary-50 text-primary-600 border-r-2 border-primary-500' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <span className="text-xl mr-3">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
                {currentPath === item.path && (
                  <span className="ml-auto">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4">
          <div className="space-y-3">
            <button 
              onClick={() => handleItemClick('/account')}
              className="w-full flex items-center px-2 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>My Account</span>
            </button>
            
            <button 
              onClick={() => handleItemClick('/support')}
              className="w-full flex items-center px-2 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.196l-1.564 1.564M2.196 12l1.564-1.564M21.804 12l-1.564-1.564M12 21.804l-1.564-1.564" />
              </svg>
              <span>Help & Support</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;