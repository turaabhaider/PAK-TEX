import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <section className="w-full flex justify-center mt-4">
      <div
        className="relative w-[98%] h-[820px] rounded-[28px] overflow-hidden flex flex-col items-center justify-center"
        style={{
          background:
            'linear-gradient(135deg, #3B3DFF 0%, #000000 55%, #0C0DB3 100%)',
        }}
      >
        <Navbar />

        {/* Trust badge */}
        <div className="z-10 mb-10 flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full bg-blue-500 border-2 border-black"
              />
            ))}
          </div>
          <span className="text-white text-[11px] font-bold tracking-widest uppercase">
            Vertrouwd door meer dan 100+ klanten
          </span>
        </div>

        <h1 className="z-10 text-white text-center font-black tracking-tight leading-[0.95] text-[90px] lg:text-[120px] max-w-[1000px]">
          B2B Marketing Met Pit
        </h1>

        <div className="absolute bottom-12 w-full px-24 flex justify-between items-center opacity-40 grayscale">
          <span className="font-black italic text-xl">1 DIGITAL</span>
          <span className="font-bold text-xl">Nicebyte</span>
          <span className="tracking-[0.2em] text-2xl">SW</span>
          <span className="font-black text-xl">DIR</span>
          <span className="border border-white px-3 py-1 font-semibold">
            RB POWERSYSTEMS
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
