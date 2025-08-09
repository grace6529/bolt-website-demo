import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowRight, HelpCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const NotFoundPage = () => {
  const popularPages = [
    { name: 'Home', path: '/', description: 'Return to our homepage' },
    { name: 'Services', path: '/services', description: 'Explore our automation services' },
    { name: 'Fractional Services', path: '/fractional-services', description: 'Learn about our fractional offerings' },
    { name: 'About Us', path: '/about', description: 'Discover our story and expertise' },
    { name: 'Contact', path: '/contact', description: 'Get in touch with our team' },
    { name: 'Help Center', path: '/faq', description: 'Find answers to common questions' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <SEOHead
        title="Page Not Found - prettysimpl"
        description="Sorry, the page you're looking for doesn't exist. Find what you need from our popular pages or contact our support team."
        noIndex={true}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Visual */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-primary-600 mb-4">404</div>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Sorry, we couldn't find the page you're looking for. The page might have been moved, 
            deleted, or you might have entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link to="/" className="btn-primary">
            <Home className="mr-2 h-5 w-5" />
            Go to Homepage
          </Link>
          <Link to="/contact" className="btn-secondary">
            <HelpCircle className="mr-2 h-5 w-5" />
            Contact Support
          </Link>
        </div>

        {/* Popular Pages */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Popular Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularPages.map((page, index) => (
              <Link
                key={index}
                to={page.path}
                className="p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 text-left group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600">
                    {page.name}
                  </h3>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary-600" />
                </div>
                <p className="text-sm text-gray-600">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-12 text-gray-500">
          <p>
            If you believe this is an error, please{' '}
            <Link to="/contact" className="text-primary-600 hover:text-primary-700 underline">
              contact our support team
            </Link>{' '}
            and we'll help you find what you're looking for.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;