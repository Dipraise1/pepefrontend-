import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-pepe-green py-6 md:py-8 relative">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <Image
          src="/images/1f3f2b_45e0862f90b549b2b8858d28a44b60cc~mv2.avif"
          alt="PEPE Background"
          fill
          className="object-cover opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center">
          <p className="text-white text-xs md:text-sm font-light">
            © 2024 by Pepe. All rights reserved!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;