import React from 'react';
import Image from 'next/image';

const Bridge = () => {
  return (
    <section id="bridge" className="bg-pepe-green relative">
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
        <h2 className="section-title">bridge</h2>

        <div className="mt-8">
          <iframe 
            src="https://app.uniswap.org/#/swap?outputCurrency=0x6982508145454ce325ddbe47a25d4ec3d2311933" 
            height="660px" 
            width="100%" 
            style={{
              border: 0,
              margin: "0 auto",
              display: "block",
              borderRadius: "10px",
              maxWidth: "600px",
              minWidth: "300px",
            }}
            title="Uniswap Interface"
          />
        </div>
      </div>
    </section>
  );
};

export default Bridge;
