import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import HowToBuy from './components/HowToBuy/HowToBuy';
import Bridge from './components/Bridge/Bridge';
import Tokenomics from './components/Tokenomics/Tokenomics';
import Roadmap from './components/Roadmap/Roadmap';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <main className="bg-pepe-green text-white">
      <Header />
      <Hero />
      <About />
      <HowToBuy />
      <Bridge />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </main>
  );
}
