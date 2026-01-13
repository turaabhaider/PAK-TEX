import React from "react";

const Results = () => {
  return (
    <section className="w-full py-24 bg-white flex flex-col items-center px-6 overflow-hidden">

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-gray-400 font-bold uppercase tracking-widest text-[13px] mb-3">
          Wij Zijn Geen Fans Van Luchtige Verhalen
        </p>
        <h2 className="text-black text-[48px] md:text-[56px] font-black leading-tight">
          De Kers Op De Taart: <br />
          <span className="text-[#3B3DFF]">Onze Resultaten</span>
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
          <span className="text-black text-3xl font-black">47.5k</span>
          <p className="text-gray-400 text-xs font-bold">Tevreden klanten</p>

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
          <p className="text-gray-500 font-bold text-sm">Daily Visitors</p>
          <p className="text-[#33CBB1] font-black text-4xl">800+</p>
        </div>

        {/* Badge 3 */}
        <div className="absolute -right-24 top-2/3 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-20 max-w-[280px]">
          <div className="bg-black w-8 h-8 rounded-lg flex items-center justify-center mb-3">
            <span className="text-white text-xs">“</span>
          </div>
          <p className="text-gray-600 text-[13px] font-bold mb-4 leading-relaxed">
            Bedankt, OMB, voor je toewijding, professionaliteit en uitstekende service, ik ben zo blij
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
            val: "35–60%",
            desc: "Conversiepercentages stijgen met 35–60% na onze website-optimalisaties",
          },
          {
            val: "43% Meer",
            desc: "Gemiddeld 43% meer organisch verkeer binnen 6 maanden",
          },
          {
            val: "3X Langer",
            desc: "Content wordt 3x langer bekeken dan die van onze concurrenten",
          },
          {
            val: "4X Hoger",
            desc: "Leadgeneratie op LinkedIn met 4x hogere respons dan het branchegemiddelde",
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
