import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  // Direct paths for the public/images folder
  const members = [
    '/images/member-1.jpg',
    '/images/member-2.jpg',
    '/images/member-3.jpg',
    '/images/member-4.jpg'
  ];

  return (
    <section className="w-full flex justify-center mt-4 font-sans overflow-hidden">
      <div
        className="relative w-[98%] h-[820px] rounded-[28px] overflow-hidden flex flex-col items-center justify-center shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #3B3DFF 0%, #000000 55%, #0C0DB3 100%)',
        }}
      >
        <Navbar />

        {/* Trust badge with Overlapping Circles */}
        <div className="z-10 mb-10 flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="flex -space-x-3">
            {members.map((path, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2 border-[#050729] overflow-hidden bg-gray-900"
              >
                <img 
                  src={path} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <span className="text-white text-[11px] font-[900] tracking-[0.15em] uppercase">
            Vertrouwd door meer dan 100+ klanten
          </span>
        </div>

        {/* FIXED HEADLINE: One line, all white, no floating elements */}
        <h1 className="z-10 text-white text-center font-black tracking-tighter leading-none text-[65px] md:text-[85px] lg:text-[105px] w-full max-w-[1300px] whitespace-nowrap">
          B2B Marketing Met Pit
        </h1>

        {/* Bottom Logo Strip */}
        <div className="absolute bottom-12 w-full px-24 flex justify-between items-center opacity-30 grayscale invert brightness-200">
          <span className="font-black italic text-xl text-white">1 DIGITAL</span>
          <span className="font-bold text-xl text-white">Nicebyte</span>
          <span className="tracking-[0.25em] text-2xl text-white font-light">SW</span>
          <span className="font-black text-xl text-white">DIR</span>
          <span className="border-2 border-white px-4 py-1 font-black text-white text-sm tracking-widest">
            RB POWERSYSTEMS
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;