import React from 'react';

const About = () => {
  return (
    <section className="w-full py-24 bg-white flex justify-center px-6">
      <div className="max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Image with CTA */}
        <div className="relative rounded-[40px] overflow-hidden h-[600px] group">
          <div className="absolute inset-0 bg-gray-200"></div> {/* Placeholder for your image */}
          <div className="absolute bottom-10 left-10">
            <button className="bg-[#3B3DFF] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform">
              Leer Ons Kennen <span>→</span>
            </button>
          </div>
        </div>

        {/* Right Side: Paragraph Content */}
        <div className="flex flex-col items-start">
           <div className="w-14 h-14 bg-[#EEEEFF] rounded-2xl flex items-center justify-center mb-8">
              <span className="text-[#3B3DFF] text-2xl">🧁</span>
           </div>
           <h2 className="text-[52px] font-[900] text-black tracking-tighter mb-8 leading-none">
             Meet The <span className="text-[#3B3DFF]">Bakery</span>
           </h2>
           <div className="space-y-6 text-gray-600 text-[17px] leading-relaxed font-medium">
             <p>
               In 2020 trapte Rubin Koot tegen de heilige huisjes van online marketing. Van brave SEO-nerd naar chef onruststoking - omdat de wereld niet nóg een bureau nodig heeft dat "ook websites maakt en sociale media doet".
             </p>
             <p>
               We begonnen zonder businessplan, maar wel met een duidelijke visie: marketing die wérkt. Learn by doing. Elk recept dat we voor klanten bakken, hebben we eerst in eigen keuken getest. Aangebrande taarten houden we binnenshuis, perfecte recepten delen we met jou.
             </p>
             <p>
               Inmiddels staan er 6 vakfanaten aan de ovens - allergisch voor middelmatigheid en PowerPoint-marketing. Daaromheen een netwerk van specialisten voor als we extra vuur nodig hebben. Zo laten we merken opvallen en de concurrentie ver achter.
             </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;