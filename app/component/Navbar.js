// components/Navbar.js
"use client"; 
// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-100 p-2 font-mono text-yellow-500 fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          mairaj event planner
        </Link>
        {/* Mobile Button */}
        <button
          className="md:hidden text-yellow-500 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute z-40 top-full left-0 right-0 w-full bg-gray-100 text-center pt-4 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <Link href="/" className="block text-yellow-500 p-2">
            Home
          </Link>
          <Link href="/services" className="block text-yellow-500 p-2">
            Events
          </Link>
          <Link href="/aboutus" className="block text-yellow-500 p-2">
            About
          </Link>
          <Link href="/contactus" className="block text-yellow-500 p-2">
            Contact
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="relative overflow-hidden">
            Home
            <span className="underline"></span>
          </Link>
          <Link href="/services" className="relative overflow-hidden">
            Services
            <span className="underline"></span>
          </Link>
          <Link href="/aboutus" className="relative overflow-hidden">
            About
            <span className="underline"></span>
          </Link>
          <Link href="/contactus" className="relative overflow-hidden">
            Contact
            <span className="underline"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
