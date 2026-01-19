
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Differentials from './components/Differentials';
import SocialProof from './components/SocialProof';
import CTAIntermediary from './components/CTAIntermediary';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 scroll-smooth">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <SocialProof />
        <CTAIntermediary />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
