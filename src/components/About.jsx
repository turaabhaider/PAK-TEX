import React from 'react';

const About = () => {
  return (
    <section className="w-full py-24 bg-white flex justify-center px-6">
      <div className="max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image using process-main.jpg */}
        <div className="h-[600px] rounded-[40px] overflow-hidden relative shadow-xl">
          <img 
            src="/images/about-founder.jpg" 
            alt="Rubin Koot - Founder" 
            className="w-full h-full object-cover" 
          />
          
        </div>

        {/* Right Side: Content matched to Figma */}
        <div className="flex flex-col gap-6">
          <div className="w-16 h-16 bg-[#3B3DFF]/10 rounded-2xl flex items-center justify-center mb-2">
            <div className="w-6 h-6 bg-[#3B3DFF] rounded-full"></div>
          </div>
          
          <h2 className="text-[52px] md:text-[64px] font-[900] leading-none tracking-tight">
            Stream Your  <span className="text-[#3B3DFF]"> Game.</span>
          </h2>
          
          <div className="space-y-6 text-gray-700 text-lg font-bold leading-relaxed max-w-[500px]">
            <p>
              ZimSports.com is a comprehensive sports management and engagement platform designed to help coaches, teams, families, and fans stay organized and connected with their sports communities. While it isn’t a traditional mass‑market streaming site like DAZN or sports broadcasters, it provides tools for live game updates, score tracking, and video features that let users follow and share key moments of matches and training sessions in real time.
          
            </p>
            <p>
              For teams and coaches, Zim Sports simplifies game day by offering video analysis tools, performance tracking, and communication features. You can upload game footage, review clips with your players, and use those insights to improve team performance — a useful way to stream game content internally for training and review purposes
            </p>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;