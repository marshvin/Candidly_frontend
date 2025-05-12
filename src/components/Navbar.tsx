
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Brain, BookOpen, Home, LogIn, Menu, X, UserPlus } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const showSignInButton = !['/signin', '/signup'].includes(location.pathname);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="skillforge-container">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-skillforge-600" />
              <span className="text-xl font-bold text-gray-900">Candidly</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-skillforge-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/exams" className="text-gray-700 hover:text-skillforge-600 px-3 py-2 rounded-md text-sm font-medium">
              Assessments
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-skillforge-600 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            {showSignInButton && (
              <div className="flex space-x-2">
                <Link to="/signin">
                  <Button variant="outline" className="border-skillforge-600 text-skillforge-600 hover:bg-skillforge-50">
                    <LogIn className="mr-2 h-4 w-4" /> Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-skillforge-600 hover:bg-skillforge-700">
                    <UserPlus className="mr-2 h-4 w-4" /> Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-skillforge-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden",
          isOpen ? "block animate-fade-in" : "hidden"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-skillforge-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center">
              <Home className="mr-2 h-5 w-5" />
              Home
            </div>
          </Link>
          <Link
            to="/exams"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-skillforge-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Assessments
            </div>
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-skillforge-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          {showSignInButton && (
            <>
              <Link
                to="/signin"
                onClick={() => setIsOpen(false)}
              >
                <Button variant="outline" className="w-full mt-3 border-skillforge-600 text-skillforge-600 hover:bg-skillforge-50">
                  <LogIn className="mr-2 h-4 w-4" /> Sign In
                </Button>
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full mt-3 bg-skillforge-600 hover:bg-skillforge-700">
                  <UserPlus className="mr-2 h-4 w-4" /> Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
