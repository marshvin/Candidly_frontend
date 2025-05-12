import React from 'react';
import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="candidly-container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-candidly-600" />
              <span className="text-lg font-bold text-gray-900">Candidly</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              AI-powered recruitment platform to help you find the perfect candidates for your team.
            </p>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Platform
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/features" className="text-sm text-gray-600 hover:text-candidly-600">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-sm text-gray-600 hover:text-candidly-600">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-gray-600 hover:text-candidly-600">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Resources
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/blog" className="text-sm text-gray-600 hover:text-candidly-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/guides" className="text-sm text-gray-600 hover:text-candidly-600">
                    Hiring Guides
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" className="text-sm text-gray-600 hover:text-candidly-600">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-gray-600 hover:text-candidly-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-sm text-gray-600 hover:text-candidly-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-sm text-gray-600 hover:text-candidly-600">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Candidly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
