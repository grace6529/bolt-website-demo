import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Linkedin, Facebook, Instagram, Youtube, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary-600 p-2.5 rounded-xl">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">prettysimpl</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Helping businesses grow bigger, stronger and more agile through low-code process automation and systems integration.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Mon-Fri: 9:00-17:00</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/fractional-services" className="hover:text-primary-400 transition-all duration-200 hover:translate-x-1">Fractional Services</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-all duration-200 hover:translate-x-1">Business Automation</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-all duration-200 hover:translate-x-1">Low-Code Development</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-all duration-200 hover:translate-x-1">Systems Integration</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-primary-400 transition-all duration-200 hover:translate-x-1">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-primary-400 transition-all duration-200 hover:translate-x-1">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-all duration-200 hover:translate-x-1">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-primary-400 transition-all duration-200 hover:translate-x-1">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@prettysimpl.com</span>
              </div>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/prettysim-pl/" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 social-icon">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/itsprettysimpl" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 social-icon">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/prettysim.pl/" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 social-icon">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/@itsprettysimpl" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 social-icon">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            <Link to="/discovery-call" className="btn-primary inline-block">
              Book Discovery Call
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-0">
            <p className="text-gray-400 text-sm">
              © 2025 prettysimpl. All rights reserved. Founded 2015.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🌟 5.0/5 Rating</span>
              <span>300+ Happy Clients</span>
              <span>1,500+ Apps Optimized</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;