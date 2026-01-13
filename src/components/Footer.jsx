import React from 'react';

const Footer = () => {
  return (
    <footer 
      className="w-full pt-20 flex flex-col items-center relative z-10"
      style={{ background: 'linear-gradient(135deg, #050729 0%, #000000 100%)' }}
    >
      {/* 1. TABLE SECTION (Top of Footer) */}
      <div className="w-full max-w-[1400px] px-8 md:px-16 mb-24 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-white/40 text-[11px] font-black uppercase tracking-[0.2em]">
              <th className="py-6">City Name</th>
              <th className="py-6">Event or Venue Name</th>
              <th className="py-6">Address</th>
              <th className="w-4"></th> {/* Empty space */}
              <th className="py-6">Phone Number</th>
              <th className="w-4"></th> {/* Empty space */}
              <th className="py-6">Website URL</th>
              <th className="py-6 text-[#3B3DFF]">Accommodation</th> {/* 8th Column */}
            </tr>
          </thead>
          <tbody className="text-white/80 text-[14px] font-bold">
            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
              <td className="py-6">Amsterdam</td>
              <td className="py-6 text-white font-black">The Loft</td>
              <td className="py-6">A'DAM Tower, Overhoeksplein 1</td>
              <td></td>
              <td className="py-6">0681843287</td> {/* No plus sign per instruction */}
              <td></td>
              <td className="py-6">
                <a href="https://theloft.nl" target="_blank" rel="noreferrer" className="hover:text-[#3B3DFF] transition-colors">
                  theloft.nl
                </a>
              </td>
              <td className="py-6 text-[#3B3DFF]">Hotel Suites</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 2. MAIN FOOTER CONTENT (Branding & Links) */}
      <div className="w-full max-w-[1400px] px-8 md:px-16 flex flex-col md:flex-row justify-between pb-24 gap-16">
        
        {/* LEFT SECTION: BRANDING & SOCIALS */}
        <div className="flex flex-col gap-10 md:w-1/3">
          <div className="text-white text-[56px] font-[900] italic leading-none tracking-tighter">ömb</div>
          <p className="text-white/50 text-[18px] leading-relaxed max-w-[340px] font-medium">
            Creatieve oplossingen. Strategische groei. Echte resultaten. Laten we uw merk naar een hoger niveau tillen.
          </p>
          <div className="flex gap-5">
            {['facebook', 'instagram', 'linkedin'].map((social) => (
              <div
                key={social}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#3B3DFF] hover:border-[#3B3DFF] cursor-pointer transition-all duration-500 group"
              >
                <div
                  className="w-6 h-6 bg-white group-hover:scale-110 transition-transform"
                  style={{
                    maskImage: `url(/${social}.svg)`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE SECTION: QUICK LINKS */}
        <div className="flex flex-col gap-10 md:w-1/4">
          <h4 className="text-white text-[24px] font-[900] tracking-tight">Snelle Links</h4>
          <ul className="flex flex-col gap-5 text-white/40 font-bold text-[16px]">
            <li className="hover:text-white transition-colors cursor-pointer">Home</li>
            <li className="hover:text-white transition-colors cursor-pointer">Over Ons</li>
            <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* RIGHT SECTION: THE BLUE BLOCK (CONTACT CARD) */}
        <div className="md:w-[440px] bg-[#3B3DFF] rounded-[40px] p-12 flex flex-col gap-10 text-white relative shadow-2xl overflow-hidden group">
          <div className="text-[48px] font-[900] leading-none select-none">*</div>

          <div>
            <p className="text-[11px] font-[900] uppercase tracking-[0.25em] mb-8 opacity-70">
              Neem Contact Op
            </p>

            <div className="flex flex-col gap-8">
              <a
                href="mailto:hello@onlinemarketingbakery.nl"
                className="flex justify-between items-center border-b border-white/20 pb-5 group/link"
              >
                <span className="font-bold text-[16px]">hello@onlinemarketingbakery.nl</span>
                <span className="group-hover/link:translate-x-2 transition-transform duration-300">→</span>
              </a>

              <a
                href="tel:0681843287"
                className="flex justify-between items-center border-b border-white/20 pb-5 group/link"
              >
                <span className="font-bold text-[16px]">0681843287</span>
                <span className="group-hover/link:translate-x-2 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-1">
            <p className="text-[10px] font-black uppercase opacity-60 tracking-widest">BTW-Nummer</p>
            <p className="text-sm font-bold">NL003276206B85</p>
          </div>

          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[60px] rounded-full translate-x-10 -translate-y-10" />
        </div>
      </div>

      {/* 3. BOTTOM BAR */}
      <div className="w-full border-t border-white/5 py-10 flex justify-center">
        <div className="w-full max-w-[1400px] px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[11px] font-black uppercase tracking-[0.2em]">
          <p>© Copyright 2026, Omb Alle rechten voorbehouden</p>
          <div className="flex gap-10">
            <span className="hover:text-white cursor-pointer transition-colors">Servicetermijn</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacybeleid</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;