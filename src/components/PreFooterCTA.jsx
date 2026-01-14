import React from 'react';

const PreFooterCTA = () => {
  return (
    <section className="w-full px-6 py-20 bg-white">
      <div className="max-w-[1300px] mx-auto bg-[#3B3DFF] rounded-[40px] py-24 px-8 flex flex-col items-center text-center relative overflow-hidden shadow-2xl shadow-blue-200">
        
        {/* Decoratieve achtergrond elementen (blokken uit Figma) */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-[10%] w-32 h-32 bg-white rounded-2xl rotate-12"></div>
          <div className="absolute bottom-[-20px] right-[5%] w-48 h-48 bg-white rounded-3xl -rotate-12"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[1px] border-white/20 scale-150 rounded-full"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-white text-[42px] md:text-[64px] font-[900] leading-tight mb-4 tracking-tight">
            Online resultaten?
          </h2>
          <p className="text-white text-[24px] md:text-[36px] font-medium mb-12 opacity-90">
            Die komen bij ons voor de bakker.
          </p>

          <button className="group bg-white text-[#3B3DFF] pl-2 pr-8 py-2 rounded-full font-bold text-lg flex items-center gap-4 hover:scale-105 transition-all duration-300 shadow-xl">
            {/* De ronde pijl knop uit de Figma screenshot */}
            <div className="w-12 h-12 bg-[#3B3DFF] rounded-full flex items-center justify-center text-white text-xl group-hover:rotate-45 transition-transform">
              →
            </div>
            <span className="uppercase tracking-wider text-sm font-black">
              Bel Ons Nu Snel!
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default PreFooterCTA;