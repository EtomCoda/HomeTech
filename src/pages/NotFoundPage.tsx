import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found - HomeTech';
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="text-9xl font-bold text-blue-900 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-medium rounded-md hover:bg-blue-800 transition-colors"
      >
        <Home className="mr-2 h-5 w-5" /> Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;