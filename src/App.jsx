import React from 'react';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import IntroText from './components/Intro'; 
import PainPoints from './components/PainPoints';
import Process from './components/Process'; 
import Ticker from './components/Ticker'; 
import Services from './components/Services'; 
import RisingDough from './components/RisingDough';
import Results from './components/Results'; 
import Testimonials from './components/Testimonials'; 
import About from './components/About'; 
import Contact from './components/Contact'; 
import FinalCall from './components/FinalCall'; 
import Footer from './components/Footer'; 

const App = () => {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <LogoStrip />
      <IntroText />
      
      <Ticker />

      <PainPoints />
      <Process />
      <Services />
      <RisingDough />
      <Results />
      
      <Testimonials />
      <About />
      <Contact />
     < Ticker />
      <FinalCall />
      <Footer />
    </main>
    
  );
};

export default App;