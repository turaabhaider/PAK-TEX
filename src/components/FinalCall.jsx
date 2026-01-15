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
            { id: "01.", text: "Connecting players, coaches, and fans." },
            { id: "02.", text: "Streamline schedules, scores, and stats," },
            { id: "03.", text: "Where teamwork meets technology." },
            { id: "04.", text: "All in one place, built for teams." }
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

            
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCall;
