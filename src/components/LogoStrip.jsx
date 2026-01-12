import React from 'react';

const LogoStrip = () => {
  return (
    <div className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto py-10 px-6">
        <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale">
          {/* Using text placeholders to match the font styles in the design */}
          <span className="text-2xl font-black italic tracking-tighter text-black">1 DIGITAL</span>
          <span className="text-2xl font-bold tracking-tight text-black flex items-center gap-1">
            <span className="text-3xl">𝗫</span> Nicebyte
          </span>
          <span className="text-3xl font-light tracking-widest text-black">SW</span>
          <span className="text-xl font-bold text-black border-2 border-black px-2 py-0.5">RB POWERSYSTEMS</span>
          <span className="text-2xl font-serif italic font-bold text-black">DIR</span>
        </div>
      </div>
    </div>
  );
};

export default LogoStrip;