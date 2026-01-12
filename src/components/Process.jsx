import React from 'react';

const Process = () => {
  const steps = [
    {
      id: 1,
      title: "1. We Zoeken Waar Het Schuurt",
      description: "Geen slappe analyse, maar een keiharde confrontatie met de werkelijkheid. We ontleden jouw markt én die van je concurrenten. Waar laat jij kansen liggen? Wat maakt jou écht anders? We vinden de plek waar je moet bijten.",
      active: true
    },
    { id: 2, title: "2. We creëren een merk met een mening", active: false },
    { id: 3, title: "3. We stoken onrust op alle fronten", active: false },
    { id: 4, title: "4. Gaspedaal intrappen", active: false }
  ];

  return (
    <section className="w-full py-24 bg-white flex flex-col items-center px-6">
      <div className="max-w-[1300px] w-full">
        {/* CENTERED HEADER */}
        <div className="text-center mb-20">
          <p className="text-[#9A9A9A] text-[14px] font-bold uppercase tracking-[0.3em] mb-4">
            Ontdek Je Meest Gedurfde Zelf
          </p>
          <h2 className="text-black text-[48px] font-[900] leading-tight tracking-tighter">
            Van Grijze Muis Naar <br />
            Onruststoker In <span className="text-[#3B3DFF]">4 Stappen</span>
          </h2>
        </div>

        {/* CONTENT GRID */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* LEFT: VERTICAL STEPS */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className={`p-8 rounded-[24px] border transition-all duration-300 ${
                  step.active 
                  ? "bg-[#F8F9FF] border-[#3B3DFF]/10" 
                  : "bg-white border-gray-100"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-[20px] font-[900] text-black tracking-tight">
                    {step.title}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.active ? "bg-[#3B3DFF] text-white" : "border-2 border-[#3B3DFF] text-[#3B3DFF]"
                  }`}>
                    <span className="font-bold text-xl">{step.active ? "−" : "+"}</span>
                  </div>
                </div>
                
                {step.active && (
                  <p className="mt-6 text-gray-600 font-medium leading-relaxed text-[16px]">
                    {step.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT: LARGE IMAGE */}
          <div className="lg:w-1/2 w-full h-[600px] rounded-[40px] overflow-hidden">
            <img 
              src="/path-to-your-process-image.jpg" 
              alt="OMB Strategy Session" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;