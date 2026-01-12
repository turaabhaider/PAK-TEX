import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import IntroText from './components/Intro'; 
import PainPoints from './components/PainPoints';
import Process from './components/Process'; 
import Ticker from './components/Ticker'; // The Blue Scrolling Strips
import Services from './components/Services'; 
import Testimonials from './components/Testimonials'; 
import About from './components/About';           
import Contact from './components/Contact';       
import FinalCall from './components/FinalCall'; 
import VenueTable from './components/VenueTable'; 
import Footer from './components/Footer';         

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <Hero />
      <LogoStrip />
      <IntroText />
      <PainPoints />
      <Process />

      {/* PLACEMENT 1: Between Process and Services */}
      <Ticker /> 

      <Services />
      <Testimonials /> 
      <About /> 

      {/* PLACEMENT 2: Between About and Contact */}
      <Ticker /> 

      <Contact />
      <FinalCall />
      <VenueTable /> 
      <Footer /> 
    </div>
  );
}

export default App;