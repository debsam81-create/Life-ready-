import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/brand/logo-horizontal.png';
import SignupForm from './SignupForm';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <img src={logo} alt="Life Ready Academy" className="h-10 w-auto mb-6 brightness-0 invert" />
            <p className="text-teal-light opacity-80 max-w-sm font-serif">
              Teaching teenagers the practical life skills they don't learn in school. Confidence and capability for the next generation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-coral">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-teal-light hover:text-white transition">Home</Link></li>
              <li><Link to="/courses" className="text-teal-light hover:text-white transition">Courses</Link></li>
              <li><Link to="/about" className="text-teal-light hover:text-white transition">About Us</Link></li>
              <li><Link to="/register" className="text-teal-light hover:text-white transition">Register</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-coral">Contact</h3>
            <p className="text-teal-light mb-2 text-sm break-all">life-ready-academy-c184c209@ctomail.io</p>
            <p className="text-teal-light text-sm">(555) 123-4567</p>
          </div>
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 text-coral">Newsletter</h3>
            <SignupForm variant="compact" />
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-teal/20 text-center text-teal-light opacity-60 text-sm">
          <p>&copy; {new Date().getFullYear()} Life Ready Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
