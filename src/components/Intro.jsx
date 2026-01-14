import React from 'react';

const IntroText = () => {
  return (
    <section className="w-full flex flex-col items-center bg-white pt-[140px] pb-[100px] px-6">
      
      {/* 1000000% MATCH: Locked to 1099px for exact text wrapping */}
      <div className="max-w-[1099px] w-full mb-[120px]">
        <p
          className="
            text-center
            text-[34px]
            leading-[42px]
            tracking-[-0.02em]
            text-[#9A9A9A]
            font-[500]
          "
        >
          Zim Sports is the all-in-one platform for club teams — live broadcast,
          <span className="text-black font-[900]">
            {" "}manage, and elevate your game from anywhere.
          </span>{" "}
          <span className="text-[#3B3DFF] font-[900]">
            Trusted by club teams across water polo, volleyball, lacrosse, and more
          </span>{" "}
          <span className="text-black font-[900]">
            From practice scheduling to championship broadcasts, Zim Sports covers every aspect of club sports management.
          </span>
          
        </p>
      </div>

      {/* WAAROM HEADING - Weight 900 and exact 64px scale */}
      <div className="w-full max-w-[1200px] text-center mb-[80px]">
        <h2 
          className="text-black font-[900] text-[64px] leading-[1.1] tracking-tight"
        >
          Everything your club needs
          in one place.
          
        </h2>
      </div>

    </section>
  );
};

export default IntroText;