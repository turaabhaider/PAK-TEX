import React from 'react';

const FinalCall = () => {
  return (
    <section className="w-full bg-white pt-24 pb-12 flex flex-col items-center">
      {/* TOP SECTION: HEADING & 4 STEPS */}
      <div className="w-full max-w-[1300px] px-8 mb-20">
        <div className="text-center mb-16">
          <p className="text-[#9A9A9A] text-[14px] font-black uppercase tracking-[0.3em] mb-4">Voor Serieuze Spelers</p>
          <h2 className="text-black text-[56px] font-[900] leading-none tracking-tighter">
            <span className="text-[#3B3DFF]">Ben Jij Dat?</span> Dan Hebben <br /> We Goed Nieuws.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex flex-col gap-4 lg:w-1/2">
            {[
              { id: "01.", text: "Gratis strategiesessie (na screening)" },
              { id: "02.", text: "Een persoonlijke routekaart naar opvallende marketing" },
              { id: "03.", text: "Eerlijk advies – ook als dat betekent dat we u naar een andere instantie moeten verwijzen" },
              { id: "04.", text: "Geen verspilling van ingrediënten. We gebruiken alleen deeg dat kan rijzen." }
            ].map((step) => (
              <div key={step.id} className="bg-[#F8F9FF] rounded-3xl p-8 flex items-start gap-8 border border-transparent hover:border-[#3B3DFF]/20 transition-all group">
                <span className="text-[#3B3DFF]/20 text-[32px] font-[900] group-hover:text-[#3B3DFF] transition-colors">{step.id}</span>
                <p className="text-black font-bold text-[18px] leading-snug">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="lg:w-1/2 relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img src="/team-photo.jpg" alt="OMB Team" className="w-full h-[600px] object-cover" />
              <div className="absolute bottom-10 left-10">
                <button className="bg-[#3B3DFF] text-white px-8 py-4 rounded-full font-black flex items-center gap-4 hover:scale-105 transition-transform">
                  <span className="text-xs uppercase tracking-widest">→ Start Het Vuur</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BLUE BANNER - FIXED MARGIN TO PREVENT OVERLAP */}
      <div className="w-full max-w-[1300px] px-8 mb-0 relative z-20">
        <div className="bg-[#3B3DFF] rounded-[48px] py-20 px-10 text-center relative overflow-hidden flex flex-col items-center">
          <h2 className="text-white text-[56px] font-[900] leading-tight mb-10 relative z-10">
            Online resultaten? <br />
            Die komen bij ons voor de bakker.
          </h2>
          <button className="bg-white text-[#3B3DFF] px-10 py-5 rounded-full font-black flex items-center gap-4 hover:bg-opacity-90 transition-all relative z-10">
             <span className="text-xs uppercase tracking-widest">→ Bel Ons Nu Snel</span>
          </button>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>
      </div>
    </section>
  );
};

export default FinalCall;