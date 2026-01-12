import React from 'react';

const PainPoints = () => {
  const points = [
    {
      title: "Onzichtbaar Online",
      desc: "Je bent expert in je vakgebied, maar online val je nauwelijks op. Je website is een visitekaartje waar niemand op kijkt, in plaats van een machine die klanten trekt.",
      blueIcon: true
    },
    {
      title: "Marketing zonder Resultaat",
      desc: "Je investeert tijd en geld in advertenties of content, maar de resultaten blijven uit. Geen leads, geen groei, alleen maar kosten.",
      blueIcon: false
    },
    {
      title: "Concurrentie Overtreft Jou",
      desc: "Je ziet concurrenten die minder goed zijn in hun vak wel de grote projecten binnenhalen, simpelweg omdat hun online marketing 'harder schreeuwt'.",
      blueIcon: false
    },
    {
      title: "Ongeziene Kwaliteit",
      desc: "Je weet dat je beter bent dan de rest, maar als potentiële klanten je online opzoeken, straalt dat er niet direct vanaf. Je merk verdient meer pit.",
      blueIcon: false
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