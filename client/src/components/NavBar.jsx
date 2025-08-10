import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [showDropdown, setShowDropDown] = useState(false);

  return (
    <nav className="bg-white sticky shadow-md top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="font-bold text-3xl">
            <Link to="/">
              Chs<span className="text-blue-500 font-bold text-3xl">.</span>
            </Link>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8">
            <a href="/#projects" className="text-gray-600 hover:text-blue-600 font-medium transition">Projects</a>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition">Contact</Link>
            <a href="/#about" className="text-gray-600 hover:text-blue-600 font-medium transition">About</a>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setShowDropDown(!showDropdown)}
              className="text-gray-800 focus:outline-none"
            >
              {showDropdown ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {showDropdown && (
        <div className="md:hidden px-4 py-4 space-y-6">
          <a
            href="/#projects"
            className="block hover:text-blue-500 font-medium transition text-gray-800"
            onClick={() => setShowDropDown(false)}
          >
            Projects
          </a>
          <Link
            to="/contact"
            className="block hover:text-blue-500 font-medium transition text-gray-800"
            onClick={() => setShowDropDown(false)}
          >
            Contact
          </Link>
          <a
            href="/#about"
            className="block hover:text-blue-500 font-medium transition text-gray-800"
            onClick={() => setShowDropDown(false)}
          >
            About
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
