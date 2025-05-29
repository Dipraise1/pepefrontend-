"use client";

import React from 'react';
import Image from 'next/image';
import AnimateIn from '../AnimateIn/AnimateIn';

const About = () => {
  return (
    <section id="about" className="bg-pepe-green relative">
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
          <h2 className="section-title">about</h2>
        </AnimateIn>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <AnimateIn direction="right">
            <div className="flex justify-center">
              <div className="relative w-80 h-80 md:w-[30rem] md:h-[30rem]">
                <Image
                  src="/images/about image.avif"
                  alt="PEPE About"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </AnimateIn>

          <AnimateIn direction="left" delay={0.2}>
            <div>
              <p className="text-base md:text-lg text-white mb-6">
                Pepe is tired of watching everyone play hot potato with the endless derivative 
                ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins. The Inu's have had their day. 
                It's time for the most recognizable meme in the world to take his reign as king 
                of the internet.
              </p>
              <p className="text-base md:text-lg text-white">
                Pepe is here to make memecoins great again. Launched stealth with no presale, 
                zero taxes, LP burnt and contract renounced, $PEPE is a coin for the people, 
                forever. Fueled by pure memetic power, let $PEPE show you the way.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};

export default About; 