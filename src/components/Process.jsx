import React, { useState } from 'react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "1. We Zoeken Waar Het Schuurt",
      description: "Geen slappe analyse, maar een keiharde confrontatie met de werkelijkheid. We ontleden jouw markt én die van je concurrenten. Waar laat jij kansen liggen?"
    },
    { 
      id: 2, 
      title: "2. We creëren een merk met een mening",
      description: "We bouwen een identiteit die niet bang is om op te vallen. Geen dertien-in-een-dozijn design, maar een krachtige boodschap die blijft hangen bij je doelgroep."
    },
    { 
      id: 3, 
      title: "3. We stoken onrust op alle fronten",
      description: "Tijd om de markt wakker te schudden. We zetten de juiste kanalen in om jouw nieuwe merk met een knal te lanceren en de concurrentie zenuwachtig te maken."
    },
    { 
      id: 4, 
      title: "4. Gaspedaal intrappen",
      description: "Optimaliseren, opschalen en domineren. We laten het niet bij één succesje, maar blijven gas geven om jouw online resultaten structureel te verbeteren."
    }
  ];

  return (
    <section className="w-full py-24 bg-white flex flex-col items-center px-6">
      <div className="max-w-[1300px] w-full">
        <div className="text-center mb-20">
          <p className="text-[#9A9A9A] text-[14px] font-bold uppercase tracking-[0.3em] mb-4">Ontdek Je Meest Gedurfde Zelf</p>
          <h2 className="text-black text-[48px] font-[900] leading-tight tracking-tighter">
            Van Grijze Muis Naar <br />
            Onruststoker In <span className="text-[#3B3DFF]">4 Stappen</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 flex flex-col gap-6">
            {steps.map((step) => (
              <div 
                key={step.id} 
                onClick={() => setActiveStep(step.id)}
                className={`p-8 rounded-[24px] border cursor-pointer transition-all duration-300 ${
                  activeStep === step.id ? "bg-[#F8F9FF] border-[#3B3DFF]/10 shadow-sm" : "bg-white border-gray-100 hover:border-gray-300"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-[20px] font-[900] text-black tracking-tight">{step.title}</h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    activeStep === step.id ? "bg-[#3B3DFF] text-white" : "border-2 border-[#3B3DFF] text-[#3B3DFF]"
                  }`}>
                    <span className="font-bold text-xl leading-none">{activeStep === step.id ? "−" : "+"}</span>
                  </div>
                </div>
                {activeStep === step.id && step.description && (
                  <p className="mt-6 text-gray-600 font-medium leading-relaxed animate-fadeIn">
                    {step.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="lg:w-1/2 w-full h-[600px] rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="/images/process-main.jpg" // FIXED: Pointing to public folder
              alt="Our Process" 
              className="w-full h-full object-cover block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;