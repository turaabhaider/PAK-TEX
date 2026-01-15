import React, { useState } from 'react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "1. Comprehensive Team Management Tools",
      description: "Zim Sports provides coaches and administrators with tools to organize teams, manage rosters, plan practice sessions, and track player progress. It simplifies scheduling, payments, and communication so teams stay organized and focused on performance."
    },
    { 
      id: 2, 
      title: "2. Advanced Analytics and Video Support",
      description: "The platform offers performance analytics and video analysis tools that help teams break down game footage and stats. Coaches can generate customizable reports and drill deeper into player and game performance."
    },
    { 
      id: 3, 
      title: "3. Live Tracking and Fan Engagement",
      description: "Families and fans can follow live updates, scoreboards, and notifications through Zim Sports, keeping the community connected to every game moment. The platform also supports integrated messaging and event reminders."
    },
    { 
      id: 4, 
      title: "4. Easy Onboarding and Accessibility",
      description: "Zim Sports can be accessed via app on multiple platforms, with a simple sign‑up process and free current access for users. Its intuitive interface makes getting started straightforward for coaches, players, and supporters alike."
    }
  ];

  return (
    <section className="w-full py-24 bg-white flex flex-col items-center px-6">
      <div className="max-w-[1300px] w-full">
        <div className="text-center mb-20">
          
          <h2 className="text-black text-[48px] font-[900] leading-tight tracking-tighter">
             <span className="text-[#3B3DFF]">More About Us</span>
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