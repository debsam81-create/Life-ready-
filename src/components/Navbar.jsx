import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/brand/logo-horizontal.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm font-sans sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={logo} alt="Life Ready Academy" className="h-12 w-auto" />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
            <Link to="/" className="text-slate hover:text-teal px-3 py-2 text-sm font-medium transition">Home</Link>
            <Link to="/courses" className="text-slate hover:text-teal px-3 py-2 text-sm font-medium transition">Courses</Link>
            <Link to="/about" className="text-slate hover:text-teal px-3 py-2 text-sm font-medium transition">About</Link>
            <Link to="/register" className="bg-coral text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition shadow-lg shadow-coral/20">Enroll Now</Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate hover:text-teal hover:bg-teal-light focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-warm-white border-t border-teal-light">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-4 text-base font-medium text-navy hover:text-teal hover:bg-teal-light">Home</Link>
            <Link to="/courses" className="block px-3 py-4 text-base font-medium text-navy hover:text-teal hover:bg-teal-light">Courses</Link>
            <Link to="/about" className="block px-3 py-4 text-base font-medium text-navy hover:text-teal hover:bg-teal-light">About</Link>
            <Link to="/register" className="block px-3 py-4 text-base font-medium text-coral font-bold">Enroll Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
