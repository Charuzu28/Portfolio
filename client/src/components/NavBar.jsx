import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [showDropdown, setShowDropDown] = useState(false);
  const items = ['Projects', 'About', 'Contact'];

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="font-bold text-3xl">
            <a href="#home">
              Chs<span className="text-blue-500 font-bold text-3xl">.</span>
            </a>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8">
            {items.map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-blue-600 font-medium transition"
              >
                {item}
              </a>
            ))}
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
          {items.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase()}`}
              className="block hover:text-blue-500 font-medium transition text-gray-800"
              onClick={() => setShowDropDown(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
