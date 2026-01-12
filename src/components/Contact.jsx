import React from 'react';

const Contact = () => {
  return (
    <section className="w-full px-6 py-20 bg-white flex justify-center">
      <div 
        className="max-w-[1320px] w-full rounded-[48px] p-12 md:p-20 flex flex-col lg:flex-row gap-16 relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #3B3DFF 0%, #000000 100%)' 
        }}
      >
        {/* LEFT CONTENT - 100% MATCH TO FIGMA */}
        <div className="lg:w-1/2 flex flex-col gap-10 relative z-10">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
             <img src="/chef-hat-blue.svg" alt="OMB Logo" className="w-10 h-10" />
          </div>
          
          <h2 className="text-white text-[64px] font-[900] leading-[1.05] tracking-tight">
            Het Deeg Moet <br /> Wel Rijzen
          </h2>
          
          <div className="flex flex-col gap-6 text-white/70 font-medium text-[18px] leading-relaxed max-w-[480px]">
            <p>We voeren onze gratis merkanalyse (ter waarde van € 749) alleen uit voor bedrijven die we écht kunnen helpen.</p>
            <p>Geen halfbakken ideeën of lauwe ambities – we selecteren zorgvuldig met wie we samenwerken.</p>
            <p>Meld je aan voor een screening en als jouw bedrijf écht potentie heeft, zetten we de ovens aan. Want we bakken liever één perfecte taart dan tien middelmatige koekjes.</p>
          </div>
        </div>

        {/* RIGHT FORM - GLASSMORPHISM STYLE */}
        <div className="lg:w-1/2 bg-white/5 backdrop-blur-md p-12 rounded-[40px] border border-white/10 relative z-10 shadow-2xl">
          <form className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <label className="text-white text-xs font-[900] uppercase tracking-[0.2em] opacity-60">Volledige naam</label>
              <input 
                type="text" 
                placeholder="Uw volledige naam" 
                className="bg-white/10 border border-white/10 rounded-2xl p-5 text-white placeholder:text-white/20 outline-none focus:border-[#3B3DFF]/50 transition-all font-medium" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <label className="text-white text-xs font-[900] uppercase tracking-[0.2em] opacity-60">Telefoonnummer</label>
                <input 
                  type="text" 
                  placeholder="Uw telefoonnummer" 
                  className="bg-white/10 border border-white/10 rounded-2xl p-5 text-white placeholder:text-white/20 outline-none focus:border-[#3B3DFF]/50 transition-all font-medium" 
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-white text-xs font-[900] uppercase tracking-[0.2em] opacity-60">E-mailadres</label>
                <input 
                  type="email" 
                  placeholder="Voer uw e-mailadres in" 
                  className="bg-white/10 border border-white/10 rounded-2xl p-5 text-white placeholder:text-white/20 outline-none focus:border-[#3B3DFF]/50 transition-all font-medium" 
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-white text-xs font-[900] uppercase tracking-[0.2em] opacity-60">Bericht</label>
              <textarea 
                placeholder="Vertel ons over uw project" 
                rows="4" 
                className="bg-white/10 border border-white/10 rounded-2xl p-5 text-white placeholder:text-white/20 outline-none resize-none focus:border-[#3B3DFF]/50 transition-all font-medium"
              ></textarea>
            </div>

            <div className="flex items-start gap-3 py-2">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded border-white/20 bg-transparent accent-[#3B3DFF]" />
              <p className="text-white/40 text-[11px] leading-tight font-medium">
                Als u contact met ons opneemt, gaat u akkoord met ons <span className="underline cursor-pointer text-white/60">privacybeleid</span>.
              </p>
            </div>

            <button className="bg-white text-black font-[900] py-5 px-6 rounded-full flex items-center justify-between group hover:scale-[1.02] transition-all duration-500 mt-2">
              <div className="flex items-center gap-4">
                <span className="bg-[#3B3DFF] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">
                  →
                </span>
                <span className="text-[16px] uppercase tracking-wider">Vraag Een Gratis Offerte Aan</span>
              </div>
            </button>
          </form>
        </div>
        
        {/* Subtle background glow effect from Figma */}
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#3B3DFF]/20 blur-[120px] rounded-full pointer-events-none" />
      </div>
    </section>
  );
};

export default Contact;