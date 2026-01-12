import React from 'react';

const Ticker = () => {
  const items = [
    "Persoonlijke branding", "Digitale campagnes", "Sociale media", 
    "LAAT JE BEDRIJF GROEIEN", "Strategisch advies", "Content creatie"
  ];

  // Triple the items to ensure the infinite scroll has no gaps
  const scrollingItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-white py-20">
      {/* Container for both strips to allow overlapping */}
      <div className="relative flex flex-col items-center">
        
        {/* TOP STRIP - Tilted Left */}
        <div className="bg-[#3B3DFF] py-5 w-[110%] -rotate-2 absolute z-10 shadow-2xl flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-scroll-left">
            {scrollingItems.map((item, index) => (
              <div key={`top-${index}`} className="flex items-center gap-8 px-6">
                <span className="text-white text-[16px] font-black uppercase tracking-widest flex items-center gap-8">
                  {item}
                  <span className="text-[24px] text-white/40">★</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM STRIP - Tilted Right */}
        <div className="bg-[#2D2FB3] py-5 w-[110%] rotate-1 z-0 flex whitespace-nowrap overflow-hidden mt-2">
          <div className="flex animate-scroll-right">
            {scrollingItems.map((item, index) => (
              <div key={`bottom-${index}`} className="flex items-center gap-8 px-6">
                <span className="text-white/80 text-[16px] font-black uppercase tracking-widest flex items-center gap-8">
                  {item}
                  <span className="text-[24px] text-white/20">★</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scrollLeft 25s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Ticker;