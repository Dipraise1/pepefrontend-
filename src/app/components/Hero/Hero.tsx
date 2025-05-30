"use client";

import React from 'react';
import Image from 'next/image';
import AnimateIn from '../AnimateIn/AnimateIn';
import Link from 'next/link';

const Hero = () => {
  const tradingPlatforms = [
    { name: 'robinhood', logo: '/images/robinhood1.avif', url: '#' },
    { name: 'coinbase', logo: '/images/coinbase.avif', url: '#' },
    { name: 'binance', logo: '/images/Binance_Logo_svg.avif', url: '#' },
    { name: 'kraken', logo: '/images/kraken_300x300_x2.avif', url: '#' },
    { name: 'upbit', logo: '/images/upbit.avif', url: '#' },
    { name: 'bybit', logo: '/images/bybit_logo-min.avif', url: '#' },
    { name: 'uniswap', logo: '/images/uniswap2.avif', url: '#' },
    { name: 'etherscan', logo: '/images/etherscan.avif', url: '#' },
    { name: 'coinmarketcap', logo: '/images/cm c.avif', url: '#' },
  ];

  const socialLinks = [
    { name: 'twitter', logo: '/images/twitter (2).avif', url: 'https://x.com/pepe_on_eth' },
    { name: 'telegram', logo: '/images/telegram.avif', url: 'https://t.me/pepecoin_eth_erc' },
    { name: 'website', logo: '/images/website.avif', url: 'https://www.pepe.site' },
    { name: 'reddit', logo: '/images/reddit.avif', url: 'https://www.reddit.com/user/pepecoin_on_eth/' },
  ];

  return (
    <section className="bg-pepe-green pt-12 md:pt-24 pb-10 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <Image
          src="/images/1f3f2b_45e0862f90b549b2b8858d28a44b60cc~mv2.avif"
          alt="PEPE Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <AnimateIn direction="up">
              <h1 className="pepe-title text-white mb-4">
                <span className="block mb-2 italic">pepe</span>
                <span className="text-2xl md:text-3xl font-medium">The most memeable memecoin in existence. The dogs have had their day, it's time for Pepe to take reign.</span>
              </h1>
            </AnimateIn>
            
            <AnimateIn direction="up" delay={0.2}>
              <div className="flex flex-wrap gap-3 mt-6 mb-8">
                {socialLinks.map((platform, index) => (
                  <a 
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pepe-dark-green w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border border-white/30 hover:bg-pepe-light-green transition-colors duration-300"
                    aria-label={platform.name}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 relative">
                      <Image
                        src={platform.logo}
                        alt={`${platform.name} Logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </AnimateIn>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <AnimateIn direction="left" delay={0.3}>
              <div className="w-full h-64 sm:h-80 md:h-[32rem] relative mx-auto">
                <Image
                  src="/images/hero image .avif"
                  alt="PEPE Hero"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                  className="object-contain object-center"
                  priority
                />
              </div>
            </AnimateIn>
          </div>
        </div>

        <AnimateIn direction="up" delay={0.5}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mt-6 md:mt-10">
            {tradingPlatforms.map((platform, index) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="exchange-button text-xs sm:text-sm md:text-base flex items-center justify-center p-2 sm:p-3"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-3 relative flex-shrink-0">
                  <Image 
                    src={platform.logo}
                    alt={`${platform.name} Logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-white truncate">{platform.name}</span>
              </a>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default Hero; 