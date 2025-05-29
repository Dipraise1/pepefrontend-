"use client";

import React from 'react';
import Image from 'next/image';
import AnimateIn from '../AnimateIn/AnimateIn';

const Roadmap = () => {
  const phases = [
    'Phase 1: Meme',
    'Phase 2: Vibe and HODL',
    'Phase 3: Meme Takeover'
  ];

  return (
    <section id="roadmap" className="bg-pepe-green relative">
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
          <h2 className="section-title">roadmap</h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <AnimateIn direction="right">
            <div className="flex justify-center md:justify-start">
              <div className="relative w-24 h-24 md:w-32 md:h-32 mr-4">
                <Image
                  src="/images/pepepissingnobackground copyroadmap1.avif"
                  alt="PEPE Roadmap"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <Image
                  src="/images/Untitled design - 2023-03-30T220301_142roadmap2.avif"
                  alt="PEPE Roadmap 2"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </AnimateIn>

          <AnimateIn direction="left" delay={0.2}>
            <div className="bg-pepe-dark-green p-4 md:p-8 rounded-lg">
              {phases.map((phase, index) => (
                <div key={index} className="mb-3 md:mb-4 last:mb-0">
                  <p className="text-base md:text-xl text-white">{phase}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>

        <AnimateIn direction="up" delay={0.4}>
          <div className="mt-10 md:mt-16 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-8 h-8 md:w-12 md:h-12 relative mr-4 bg-white rounded-full p-1">
                <Image
                  src="/images/twitter (2).avif"
                  alt="Twitter"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-8 h-8 md:w-12 md:h-12 relative">
                <Image
                  src="/images/hero image .avif"
                  alt="Pepe"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-white text-sm md:text-base lg:text-lg mb-3 md:mb-4">$pepe coin has no association with Matt Furie or his creation Pepe the Frog.<br className="hidden md:block" /> This token is simply paying homage to a meme we all love and recognize.</p>
            <p className="text-white text-sm md:text-base lg:text-lg">$PEPE is a meme coin with no intrinsic value or expectation of financial<br className="hidden md:block" /> return. There is no formal team or roadmap. the coin is completely useless<br className="hidden md:block" /> and for entertainment purposes only.</p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default Roadmap; 