import React from 'react';

const Testimonials = () => {
  const reviews = [
    { name: "Haris Hodzic", company: "HH Inc.", date: "Jun 9, 2025" },
    { name: "Emiley Rodriguez", company: "GoFish", date: "Jun 12, 2025" },
    { name: "Vincent De Gendt", company: "UP", date: "Jul 24, 2025" }
  ];

  return (
    <section className="w-full py-20 bg-white flex justify-center px-6">
      <div className="max-w-[1300px] w-full">
        {/* Header with Nav Arrows */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-[48px] font-[900] text-black tracking-tighter">
              Dat smaakt naar <span className="text-[#3B3DFF]">meer</span>
            </h2>
            <p className="text-gray-500 font-medium mt-4 max-w-md">
              Wij zijn pas tevreden als jij dat bent. Onze klanten delen graag hun ervaringen:
            </p>
          </div>
          <div className="flex gap-3 mb-2">
            <button className="w-12 h-12 rounded-full bg-[#EEEEFF] flex items-center justify-center text-[#3B3DFF]">←</button>
            <button className="w-12 h-12 rounded-full bg-[#3B3DFF] flex items-center justify-center text-white">→</button>
          </div>
        </div>

        {/* 3 Review Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-[#F8F9FF] p-8 rounded-[24px] border border-transparent hover:shadow-lg transition-all">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-[#EA4335] font-bold">G</span>
                  <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">5/5 Rating</span>
                </div>
                <span className="text-[12px] text-gray-400 font-bold">{rev.date}</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden"></div>
                <div>
                  <h4 className="font-bold text-black text-[15px]">{rev.name}</h4>
                  <p className="text-[13px] text-gray-400 font-bold uppercase tracking-tight">{rev.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;