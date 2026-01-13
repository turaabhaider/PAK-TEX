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
          {/* Floating Button on Image */}
          <button className="absolute bottom-10 left-10 bg-white text-black font-black py-4 px-8 rounded-full flex items-center gap-3 shadow-lg hover:scale-105 transition-transform">
            <div className="w-6 h-6 bg-[#3B3DFF] rounded-full flex items-center justify-center">
              <span className="text-white text-xs">→</span>
            </div>
            Leer Ons Kennen
          </button>
        </div>

        {/* Right Side: Content matched to Figma */}
        <div className="flex flex-col gap-6">
          <div className="w-16 h-16 bg-[#3B3DFF]/10 rounded-2xl flex items-center justify-center mb-2">
            <div className="w-6 h-6 bg-[#3B3DFF] rounded-full"></div>
          </div>
          
          <h2 className="text-[52px] md:text-[64px] font-[900] leading-none tracking-tight">
            Meet The <span className="text-[#3B3DFF]">Bakery</span>
          </h2>
          
          <div className="space-y-6 text-gray-700 text-lg font-bold leading-relaxed max-w-[500px]">
            <p>
              In 2020 trapte Rubin Koot tegen de heilige huisjes van online marketing. 
              Van brave SEO-nerd naar chef onruststoking – omdat de wereld niet nóg een 
              bureau nodig heeft dat "ook websites maakt én sociale media doet".
            </p>
            <p>
              We begonnen zonder businessplan, maar wel met een duidelijke visie: 
              marketing die wérkt. Learn by doing. Elk recept dat we voor klanten bakken, 
              hebben we eerst in eigen keuken getest.
            </p>
            <p className="text-gray-500 font-medium italic">
              Inmiddels staan er 6 vakfanaten aan de ovens – allergisch voor middelmatigheid 
              en PowerPoint-marketing.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;