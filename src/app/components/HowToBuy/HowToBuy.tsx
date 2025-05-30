"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import AnimateIn from '../AnimateIn/AnimateIn';

const HowToBuy = () => {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);
  
  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };
  const steps = [
    {
      title: 'create a wallet',
      description: 'download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.',
      icon: '/images/how to buy 1 .avif'
    },
    {
      title: 'get some eth',
      description: 'have ETH in your wallet to switch to $PEPE. If you don\'t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.',
      icon: '/images/pepe-roadmap.png'
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
        
        {/* Donation Wallets Section */}
        <AnimateIn direction="up" delay={0.4}>
          <div className="mt-16 bg-pepe-dark-green p-6 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">★ Donation Addresses ★</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-pepe-green bg-opacity-30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">BNB</h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white break-all pr-2">0xcd7715E2Cd430a6b7A53FDd901CEa4BBC200B5FD</p>
                  <button 
                    onClick={() => handleCopyAddress("0xcd7715E2Cd430a6b7A53FDd901CEa4BBC200B5FD")} 
                    className="flex-shrink-0 text-white hover:text-green-300 transition-colors"
                    title="Copy address"
                  >
                    {copiedAddress === "0xcd7715E2Cd430a6b7A53FDd901CEa4BBC200B5FD" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="bg-pepe-green bg-opacity-30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">Bitcoin BTC</h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white break-all pr-2">3JdjserDepuRFESDPrDLFyLUBfToGgRmC7</p>
                  <button 
                    onClick={() => handleCopyAddress("3JdjserDepuRFESDPrDLFyLUBfToGgRmC7")} 
                    className="flex-shrink-0 text-white hover:text-green-300 transition-colors"
                    title="Copy address"
                  >
                    {copiedAddress === "3JdjserDepuRFESDPrDLFyLUBfToGgRmC7" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="bg-pepe-green bg-opacity-30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">Ethereum ETH</h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white break-all pr-2">0xA5Ff64d9427a2B74Ef39468DDa9392fC61fA0BF0</p>
                  <button 
                    onClick={() => handleCopyAddress("0xA5Ff64d9427a2B74Ef39468DDa9392fC61fA0BF0")} 
                    className="flex-shrink-0 text-white hover:text-green-300 transition-colors"
                    title="Copy address"
                  >
                    {copiedAddress === "0xA5Ff64d9427a2B74Ef39468DDa9392fC61fA0BF0" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="bg-pepe-green bg-opacity-30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">Solana SOL</h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white break-all pr-2">6BdD8y14yTutTx2LwEaMpJaMHTjd1XRFqxGi84tnncBj</p>
                  <button 
                    onClick={() => handleCopyAddress("6BdD8y14yTutTx2LwEaMpJaMHTjd1XRFqxGi84tnncBj")} 
                    className="flex-shrink-0 text-white hover:text-green-300 transition-colors"
                    title="Copy address"
                  >
                    {copiedAddress === "6BdD8y14yTutTx2LwEaMpJaMHTjd1XRFqxGi84tnncBj" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="bg-pepe-green bg-opacity-30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">BCH</h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white break-all pr-2">qq9neh946t6kqhqm8r2z5k54qk3ja9eh6gxnrq8u05</p>
                  <button 
                    onClick={() => handleCopyAddress("qq9neh946t6kqhqm8r2z5k54qk3ja9eh6gxnrq8u05")} 
                    className="flex-shrink-0 text-white hover:text-green-300 transition-colors"
                    title="Copy address"
                  >
                    {copiedAddress === "qq9neh946t6kqhqm8r2z5k54qk3ja9eh6gxnrq8u05" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="bg-pepe-green bg-opacity-30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">Dash</h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white break-all pr-2">Xk6DBLQeA8VzhDWeansUUQBy5BDPJtSv2K</p>
                  <button 
                    onClick={() => handleCopyAddress("Xk6DBLQeA8VzhDWeansUUQBy5BDPJtSv2K")} 
                    className="flex-shrink-0 text-white hover:text-green-300 transition-colors"
                    title="Copy address"
                  >
                    {copiedAddress === "Xk6DBLQeA8VzhDWeansUUQBy5BDPJtSv2K" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="bg-pepe-green bg-opacity-30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">Dot</h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white break-all pr-2">16cUdeCDVr86q6wZjS7rmr217xQ4DLon5eNoBjpt8hu4JM1c</p>
                  <button 
                    onClick={() => handleCopyAddress("16cUdeCDVr86q6wZjS7rmr217xQ4DLon5eNoBjpt8hu4JM1c")} 
                    className="flex-shrink-0 text-white hover:text-green-300 transition-colors"
                    title="Copy address"
                  >
                    {copiedAddress === "16cUdeCDVr86q6wZjS7rmr217xQ4DLon5eNoBjpt8hu4JM1c" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="bg-pepe-green bg-opacity-30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">LTC</h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white break-all pr-2">MKeaxQy6y6uQwSeKizpriLfwmQJmGHeXYU</p>
                  <button 
                    onClick={() => handleCopyAddress("MKeaxQy6y6uQwSeKizpriLfwmQJmGHeXYU")} 
                    className="flex-shrink-0 text-white hover:text-green-300 transition-colors"
                    title="Copy address"
                  >
                    {copiedAddress === "MKeaxQy6y6uQwSeKizpriLfwmQJmGHeXYU" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="bg-pepe-green bg-opacity-30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">TRON</h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white break-all pr-2">TUJfGEvJMwabDRipKEfsQab9uDes1wNETR</p>
                  <button 
                    onClick={() => handleCopyAddress("TUJfGEvJMwabDRipKEfsQab9uDes1wNETR")} 
                    className="flex-shrink-0 text-white hover:text-green-300 transition-colors"
                    title="Copy address"
                  >
                    {copiedAddress === "TUJfGEvJMwabDRipKEfsQab9uDes1wNETR" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="bg-pepe-green bg-opacity-30 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">XRP</h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white break-all pr-2">rJqyDwgmESYDefdegqwjCAQLk7TFokbdGa</p>
                  <button 
                    onClick={() => handleCopyAddress("rJqyDwgmESYDefdegqwjCAQLk7TFokbdGa")} 
                    className="flex-shrink-0 text-white hover:text-green-300 transition-colors"
                    title="Copy address"
                  >
                    {copiedAddress === "rJqyDwgmESYDefdegqwjCAQLk7TFokbdGa" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default HowToBuy;