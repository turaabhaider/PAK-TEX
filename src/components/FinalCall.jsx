import React from 'react';

const FinalCall = () => {
  return (
    <section className="w-full py-24 bg-blue-50 flex justify-center px-6">
      <div className="max-w-[1300px] w-full flex flex-col lg:flex-row gap-16 items-start border-0">

        {/* LEFT SIDE: STEPS */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          <div className="mb-8">
            <p className="text-[#3B3DFF] font-bold uppercase tracking-widest text-sm mb-2">Voor Serieuze Spelers</p>
            <h2 className="text-black text-[48px] font-[900] leading-tight">
              Built for every club sport
            </h2>
          </div>

          {[
            { id: "01.", text: "Gratis strategiesessie (na screening)" },
            { id: "02.", text: "Een persoonlijke routekaart naar opvallende marketing" },
            { id: "03.", text: "Eerlijk advies – ook als dat betekent dat we u naar een andere instantie moeten verwijzen" },
            { id: "04.", text: "Geen verspilling van ingrediënten. We gebruiken alleen deeg dat kan rijzen." }
          ].map((item) => (
            <div key={item.id} className="bg-[#F8F9FF] p-8 rounded-[24px] flex items-center gap-6 border border-transparent hover:border-[#3B3DFF]/10 transition-all">
              <span className="text-[#3B3DFF]/20 text-3xl font-black">{item.id}</span>
              <p className="font-bold text-gray-800 leading-tight">{item.text}</p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE: THE FIXED CARD */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <div className="bg-white p-8 rounded-[50px] shadow-[0_40px_100px_rgba(0,0,0,0.08)] w-full max-w-[550px] flex flex-col">

            <div className="flex items-center gap-2 mb-6">
               <div className="w-2 h-2 bg-[#3B3DFF] rounded-full"></div>
               <h3 className="text-black font-black text-xl uppercase tracking-tight">OUR USERS REACTIONS</h3>
            </div>

            {/* FIXED IMAGE PATH */}
            <div className="w-full aspect-[4/5] rounded-[40px] overflow-hidden mb-8 bg-gray-100">
              <img 
                src="/images/team-fixed.jpg" 
                alt="OMB Team" 
                className="w-full h-full object-cover" 
                onError={(e) => { e.target.src = "https://via.placeholder.com/500x600?text=Check+Public+Folder"; }}
              />
            </div>

            <button className="w-full bg-[#3B3DFF] text-white py-5 rounded-full font-black text-sm tracking-[0.2em] uppercase shadow-[0_20px_40px_rgba(59,61,255,0.25)]">
              → EXPLORE MORE
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCall;
