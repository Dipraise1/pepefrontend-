"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-pepe-green py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-white text-2xl font-bold mr-2 italic">pepe</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-white/80 transition-colors text-sm font-medium">
              home
            </Link>
            <Link href="#about" className="text-white hover:text-white/80 transition-colors text-sm font-medium">
              about
            </Link>
            <Link href="#howtobuy" className="text-white hover:text-white/80 transition-colors text-sm font-medium">
              how to buy
            </Link>
            <Link href="#bridge" className="text-white hover:text-white/80 transition-colors text-sm font-medium">
              bridge
            </Link>
            <Link href="#tokenomics" className="text-white hover:text-white/80 transition-colors text-sm font-medium">
              tokenomics
            </Link>
            <Link href="#roadmap" className="text-white hover:text-white/80 transition-colors text-sm font-medium">
              roadmap
            </Link>
          </nav>

          {/* Buy Now Button */}
          <div className="hidden md:block">
            <a href="#" className="bg-white text-pepe-green px-4 py-1 rounded-full font-medium text-sm">
              buy now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2"
              aria-label="Toggle mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-white/80 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                home
              </Link>
              <Link
                href="#about"
                className="text-white hover:text-white/80 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                about
              </Link>
              <Link
                href="#howtobuy"
                className="text-white hover:text-white/80 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                how to buy
              </Link>
              <Link
                href="#bridge"
                className="text-white hover:text-white/80 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                bridge
              </Link>
              <Link
                href="#tokenomics"
                className="text-white hover:text-white/80 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                tokenomics
              </Link>
              <Link
                href="#roadmap"
                className="text-white hover:text-white/80 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                roadmap
              </Link>
              <a
                href="#"
                className="bg-white text-pepe-green px-4 py-2 rounded-full font-medium inline-block text-center w-28"
                onClick={() => setMobileMenuOpen(false)}
              >
                buy now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 