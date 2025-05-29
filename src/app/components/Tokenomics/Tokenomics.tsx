"use client";

import React from 'react';
import Image from 'next/image';
import AnimateIn from '../AnimateIn/AnimateIn';

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="bg-pepe-green relative">
      <div className="section-divider"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <Image
          src="/images/1f3f2b_45e0862f90b549b2b8858d28a44b60cc~mv2.avif"
          alt="PEPE Background"
          fill
          className="object-cover opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
        <AnimateIn>
          <h2 className="section-title">tokenomics</h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <AnimateIn direction="right" delay={0.2}>
            <div>
              <div className="mb-6 md:mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4">token supply:</h3>
                <p className="text-3xl md:text-4xl font-bold text-white">420,690,000,000,000</p>
              </div>
              
              <div>
                <p className="text-base md:text-xl text-white mb-3 md:mb-4">0 Taxes, No Bullshit. It's that simple.</p>
                <p className="text-base md:text-xl text-white">LP tokens are burnt, and contract ownership is renounced.</p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn direction="left" delay={0.3}>
            <div className="flex justify-center">
              <div className="relative w-80 h-80 md:w-[30rem] md:h-[30rem]">
                <Image
                  src="/images/pepememe (4)tokenomics.avif"
                  alt="PEPE Tokenomics"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics; 