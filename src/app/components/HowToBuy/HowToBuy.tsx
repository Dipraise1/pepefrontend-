"use client";

import React from 'react';
import Image from 'next/image';
import AnimateIn from '../AnimateIn/AnimateIn';

const HowToBuy = () => {
  const steps = [
    {
      title: 'create a wallet',
      description: 'download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.',
      icon: '/images/how to buy 1 .avif'
    },
    {
      title: 'get some eth',
      description: 'have ETH in your wallet to switch to $PEPE. If you don\'t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.',
      icon: '/images/eth-icon.png'
    },
    {
      title: 'go to uniswap',
      description: 'connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside Metamask app. Connect your wallet. Paste the $PEPE token address into Uniswap, select $PEPE, and confirm.',
      icon: '/images/uniswap2.avif'
    },
    {
      title: 'switch eth for $pepe',
      description: 'switch ETH for $PEPE. We have ZERO taxes so you don\'t need to worry about buying with specific slippage, although you may need to use slippage during times of market volatility.',
      icon: '/images/switch eth to pepe 4.avif'
    }
  ];

  return (
    <section id="howtobuy" className="bg-pepe-green relative">
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
          <h2 className="section-title">how to buy</h2>
        </AnimateIn>

        <div className="space-y-8 md:space-y-10">
          {steps.map((step, index) => (
            <AnimateIn key={index} direction="right" delay={0.2 * index}>
              <div className="flex items-start bg-pepe-dark-green p-4 md:p-6 rounded-lg">
                <div className="mr-4 md:mr-6 flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 relative">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">{step.title}</h3>
                  <p className="text-sm md:text-base text-white">{step.description}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;