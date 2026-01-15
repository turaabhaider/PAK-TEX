import React from "react";

const Results = () => {
  return (
    <section className="w-full py-24 bg-white flex flex-col items-center px-6 overflow-hidden">

      {/* Header */}
      <div className="text-center mb-16">
        
        <h2 className="text-black text-[48px] md:text-[56px] font-black leading-tight">
         
          <span className="text-[#3B3DFF]">Our Achievements</span>
        </h2>
      </div>

      {/* Center Layout */}
      <div className="relative mb-32 mt-10">
{/* IMAGE + GREEN SHAPE */}
<div className="relative w-[320px] md:w-[450px] aspect-square overflow-hidden rounded-[40px]">

  {/* Green background */}
  <div className="absolute inset-0 bg-[#33CBB1]" />

  {/* Image INSIDE the box */}
  <img
    src="/images/member-3.jpg"
    alt="Results Presentation"
    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      z-10
    "
  />
</div>


        {/* Badge 1 */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-20 min-w-[180px]">
          <span className="text-black text-3xl font-black">10K+</span>
          <p className="text-gray-400 text-xs font-bold">Teams Powered</p>

          <div className="flex -space-x-2 mt-3">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={`/images/member-${i}.jpg`}
                alt="member"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
            ))}
            <div className="w-8 h-8 rounded-full bg-[#33CBB1] text-white flex items-center justify-center text-xs font-bold border-2 border-white">
              +
            </div>
          </div>
        </div>

        {/* Badge 2 */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-14 bg-white px-10 py-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-20 text-center">
          <p className="text-gray-500 font-bold text-sm">Games Streamed</p>
          <p className="text-[#33CBB1] font-black text-4xl">500K+</p>
        </div>

        {/* Badge 3 */}
        <div className="absolute -right-24 top-2/3 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-20 max-w-[280px]">
          <div className="bg-black w-8 h-8 rounded-lg flex items-center justify-center mb-3">
            <span className="text-white text-xs">“</span>
          </div>
          <p className="text-gray-600 text-[13px] font-bold mb-4 leading-relaxed">
            Trusted by club teams across water polo, volleyball, lacrosse, and more
          </p>
          <img
            src="/images/member-1.jpg"
            alt="Client"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

      </div>

      {/* Bottom Stats */}
      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
        {[
          {
            val: "2M+",
            desc: "Athletes are Connected to this application.That is the reason people loves to watch their favourite sports here.",
          },
          {
            val: "43% ",
            desc: "Loves to watch their favourite sports on this application",
          },
          {
            val: "99.9%",
            desc: "Uptime,You can watch any sports any time.",
          },
          {
            val: "ALL-IN-ONE",
            desc: "You can watch and also connect to athletes at the same time",
          },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col gap-4 text-center md:text-left px-4">
            <span className="text-[#3B3DFF] text-[52px] font-black tracking-tight leading-none">
              {stat.val}
            </span>
            <p className="text-gray-600 font-bold text-[15px] leading-snug">
              {stat.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Results;
