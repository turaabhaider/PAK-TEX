import React from 'react';

const PainPoints = () => {
  const points = [
    {
      title: "Stream Every Moment",
      desc: "Je bent expert in je vakgebied, maar online val je nauwelijks op. Je website is een visitekaartje waar niemand op kijkt, in plaats van een machine die klanten trekt.",
      blueIcon: true
    },
    {
      title: "Simplify Coaching",
      desc: "Schedules, rosters, messaging, and stats — all in one place. Zim makes coaching effortless",
      blueIcon: true
    },
    {
      title: "Train Smarter",
      desc: "Instant cloud storage for every game. Review plays, build highlights, and coach with precision.",
      blueIcon: true
    },
    {
      title: "Watch Live Matches",
      desc: "Experience the thrill of live sports. Watch your favorite teams compete in real-time.You can easily watch matches with best graphics and resolution ",
      blueIcon: true
    }
  ];

  return (
    <div className="w-full bg-white flex justify-center py-20">
      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {points.map((item, idx) => (
          <div key={idx} className="bg-[#F8F9FA] p-10 rounded-[32px] flex flex-col gap-6 border border-transparent hover:border-[#3B3DFF]/10 transition-all">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.blueIcon ? 'bg-[#3B3DFF]' : 'bg-white border border-gray-200'}`}>
              <div className={`w-6 h-6 ${item.blueIcon ? 'bg-white' : 'bg-gray-400'}`} style={{ maskImage: 'url("/icon-placeholder.svg")', maskSize: 'contain' }} />
            </div>
            <div>
              <h4 className="text-[24px] font-[900] text-black mb-3">{item.title}</h4>
              <p className="text-[#666666] leading-relaxed font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PainPoints;