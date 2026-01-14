import React from 'react';

const RisingDough = () => {
  return (
    <section className="w-full py-20 bg-white flex justify-center px-6">
      <div 
        className="max-w-[1250px] w-full rounded-[40px] p-12 md:p-20 flex flex-col lg:flex-row gap-16"
        style={{ background: 'linear-gradient(135deg, #3B3DFF 0%, #000000 55%, #0C0DB3 100%)' }}
      >
        {/* Left Side: Text */}
        <div className="lg:w-1/2 text-white">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8">
            <div className="w-8 h-8 bg-[#3B3DFF] rounded-full opacity-80"></div>
          </div>
          <h2 className="text-[56px] font-black leading-tight mb-8">Get started  <br /> In minutes</h2>
          <p className="text-white/70 text-lg mb-6 leading-relaxed">
           No technical setup required. Just sign up and start managing your club like a pro.
          </p>
          <p className="text-white/70 text-lg mb-6 leading-relaxed">
           Sign up in seconds and set up your club profile with your branding, colors, and team information.
          </p>
          <p className="text-white/70 text-lg leading-relaxed">
            Import rosters, assign coaches, and organize players into teams and training groups.Start broadcasting games, managing schedules, and engaging with your community instantly
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-1/2 bg-white/5 backdrop-blur-md rounded-[30px] p-10 border border-white/10">
          <form className="flex flex-col gap-6">
            <div>
              <label className="text-white/60 text-sm mb-2 block font-bold">YOUR NAME</label>
              <input type="text" placeholder="Uw volledige naam" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-[#3B3DFF]" />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="text-white/60 text-sm mb-2 block font-bold">PHONE NUMBER</label>
                <input type="text" placeholder="Uw telefoonnummer" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-[#3B3DFF]" />
              </div>
              <div className="flex-1">
                <label className="text-white/60 text-sm mb-2 block font-bold">E-MAIL ADDRESS</label>
                <input type="email" placeholder="Voer uw e-mailadres in" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-[#3B3DFF]" />
              </div>
            </div>
            <div>
              <label className="text-white/60 text-sm mb-2 block font-bold">REVIEW</label>
              <textarea placeholder="Vertel ons over uw project" rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-[#3B3DFF] resize-none"></textarea>
            </div>
            <button className="w-full bg-white text-black py-5 rounded-full font-black flex items-center justify-center gap-3 uppercase tracking-widest hover:bg-gray-200 transition-all">
              <div className="bg-[#3B3DFF] rounded-full p-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
              CLICK HERE TO SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RisingDough;