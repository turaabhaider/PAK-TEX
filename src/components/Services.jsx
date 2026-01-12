import React from 'react';

const Services = () => {
  const serviceList = [
    {
      title: "Winstgevende websites",
      desc: "Wij creëren digitale platformen op maat: geen sjablonen, alleen uitstekende ervaringen op WordPress, Shopify, Webflow of Laravel.",
      icon: "🌐"
    },
    {
      title: "Contentmarketing",
      desc: "Content die wordt gevonden, gelezen en onthouden: strategische blogs, video's en meer om uw expertise te laten zien en leads te genereren.",
      icon: "⌘"
    },
    {
      title: "Copywriting",
      desc: "Uw expertise, onze woorden: heldere, overtuigende content voor websites tot e-mails, opgesteld met de juiste toon en een blijvende impact.",
      icon: "📄"
    },
    {
      title: "SEO",
      desc: "Hoge Google-rankings zijn geen kwestie van geluk, maar van strategie. We combineren techniek, content en autoriteit om echte resultaten te behalen.",
      icon: "🔍"
    },
    {
      title: "Social Media",
      desc: "Maak social echt social. We ontwikkelen strategie, content en community om echte connecties te creëren, leads te genereren en je merk te laten groeien.",
      icon: "📱"
    }
  ];

  return (
    <section className="w-full py-24 bg-white flex flex-col items-center px-6">
      <div className="max-w-[1300px] w-full">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-[#9A9A9A] text-[14px] font-bold uppercase tracking-[0.3em] mb-4">Onze Diensten</p>
          <h2 className="text-black text-[48px] font-[900] leading-tight tracking-tighter">
            Onze Diensten: <br />
            <span className="text-[#3B3DFF]">Hoe We Het Flikken</span>
          </h2>
        </div>

        {/* 6 BOXES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((service, index) => (
            <div key={index} className="bg-[#F8F9FF] p-10 rounded-[32px] flex flex-col items-start gap-6 border border-transparent hover:border-[#3B3DFF]/10 transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm text-xl">
                {service.icon}
              </div>
              <h3 className="text-[22px] font-[900] text-black tracking-tight">{service.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed text-[15px]">{service.desc}</p>
            </div>
          ))}

          {/* THE DARK GRADIENT BOX */}
          <div className="bg-gradient-to-br from-[#050729] to-[#3B3DFF] p-10 rounded-[32px] flex flex-col justify-between items-start text-white relative overflow-hidden group">
            <div className="z-10">
               <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white">📅</span>
               </div>
               <h3 className="text-[24px] font-[900] leading-tight mb-4">
                 Laten we samenwerken <br /> om samen uitstekende <br /> resultaten te behalen.
               </h3>
            </div>
            <button className="z-10 flex items-center gap-3 font-bold text-[14px] border-b border-white pb-1 group-hover:gap-5 transition-all">
              Maak een afspraak <span>→</span>
            </button>
            {/* Subtle glow effect */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 blur-[50px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;