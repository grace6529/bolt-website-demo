import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    { 
      name: 'Home', 
      href: '/',
      description: 'Back to homepage'
    },
    {
      name: 'Solutions',
      href: '/services',
      description: 'Our automation services',
      hasDropdown: true,
      dropdownItems: [
        {
          category: 'Fractional Services',
          items: [
            { name: 'Fractional CAO', href: '/fractional-services', description: 'Strategic automation leadership' },
            { name: 'Part-Time Support', href: '/fractional-services', description: 'Regular embedded assistance' },
            { name: 'Full-Time Integration', href: '/fractional-services', description: 'Complete team integration' }
          ]
        },
        {
          category: 'Project Services',
          items: [
            { name: 'Automation Projects', href: '/services', description: 'Fixed-scope implementations' },
            { name: 'System Integration', href: '/services', description: 'Connect your tools' },
            { name: 'Process Optimization', href: '/services', description: 'Streamline workflows' }
          ]
        },
        {
          category: 'Support',
          items: [
            { name: 'Ongoing Support', href: '/services', description: 'Maintenance & troubleshooting' },
            { name: 'Emergency Help', href: '/services', description: 'Urgent issue resolution' }
          ]
        }
      ]
    },
    { 
      name: 'About', 
      href: '/about',
      description: 'Our story and expertise'
    },
    { 
      name: 'Help Center', 
      href: '/faq',
      description: 'FAQs and support resources'
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container-max">
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group logo-hover">
            <div className="bg-primary-600 p-2.5 rounded-xl group-hover:bg-primary-700 transition-all duration-300">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">prettysimpl</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.href}
                      className={`font-medium link-hover py-2 flex items-center space-x-1 ${
                        isActive(item.href) ? 'text-primary-600' : 'text-gray-700'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                    
                    {/* Mega Menu Dropdown */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-screen max-w-4xl bg-white rounded-xl shadow-xl border border-gray-100 p-8 transform -translate-x-1/3">
                        <div className="grid grid-cols-3 gap-8">
                          {item.dropdownItems?.map((category, idx) => (
                            <div key={idx}>
                              <h3 className="font-semibold text-gray-900 mb-4">{category.category}</h3>
                              <ul className="space-y-3">
                                {category.items.map((subItem, subIdx) => (
                                  <li key={subIdx}>
                                    <Link
                                      to={subItem.href}
                                      className="block p-2 rounded-lg hover:bg-gray-50 transition-colors"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      <div className="font-medium text-gray-900">{subItem.name}</div>
                                      <div className="text-sm text-gray-600">{subItem.description}</div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        
                        {/* CTA Section in Dropdown */}
                        <div className="border-t border-gray-100 mt-6 pt-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900">Ready to get started?</h4>
                              <p className="text-sm text-gray-600">Book a free discovery call to discuss your needs</p>
                            </div>
                            <Link
                              to="/discovery-call"
                              className="btn-primary"
                              onClick={() => setActiveDropdown(null)}
                            >
                              Book Call
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-medium link-hover py-2 ${
                      isActive(item.href) ? 'text-primary-600' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/contact" 
              className="text-gray-600 hover:text-primary-600 transition-colors flex items-center space-x-1"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">Contact</span>
            </Link>
            <Link to="/discovery-call" className="btn-primary">
              Book Discovery Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            {/* Quick Actions */}
            <div className="flex items-center justify-between mb-6 px-2">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">Contact Us</span>
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">Email</span>
              </Link>
            </div>

            <nav className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg font-medium transition-colors ${
                          isActive(item.href) ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="mt-2 ml-4 space-y-1">
                          {item.dropdownItems?.map((category, idx) => (
                            <div key={idx} className="mb-4">
                              <div className="text-sm font-medium text-gray-500 mb-2 px-3">
                                {category.category}
                              </div>
                              {category.items.map((subItem, subIdx) => (
                                <Link
                                  key={subIdx}
                                  to={subItem.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="block p-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                  <div className="font-medium">{subItem.name}</div>
                                  <div className="text-sm text-gray-600">{subItem.description}</div>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block p-3 rounded-lg font-medium transition-colors ${
                        isActive(item.href) ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div>{item.name}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link
                to="/discovery-call"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary w-full text-center"
              >
                Book Discovery Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;