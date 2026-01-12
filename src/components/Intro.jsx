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
          Het online landschap ligt vol met grijze muizen. 
          <span className="text-black font-[900]">
            {" "}Bedrijven die zeggen dat ze "kwalitatief" en "servicegericht" zijn.
          </span>{" "}
          <span className="text-[#3B3DFF] font-[900]">
            Alsof dat onderscheidend is.
          </span>{" "}
          <span className="text-black font-[900]">
            Wij helpen je om te transformeren naar een merk dat mensen zich
          </span>
          <span className="text-black italic font-[900] block mt-1">
            écht herinneren.
          </span>
        </p>
      </div>

      {/* WAAROM HEADING - Weight 900 and exact 64px scale */}
      <div className="w-full max-w-[1200px] text-center mb-[80px]">
        <h2 
          className="text-black font-[900] text-[64px] leading-[1.1] tracking-tight"
        >
          Waarom Potentiële Klanten <br />
          Jou Niet Zien <span className="text-[#3B3DFF]">(Nog)</span>
        </h2>
      </div>

    </section>
  );
};

export default IntroText;