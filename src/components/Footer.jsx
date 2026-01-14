import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight, Asterisk, ChefHat } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#030014] text-white relative overflow-hidden font-sans">
      {/* Background Gradient Blob (Subtle, to match the dark aesthetic) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Main Container - Using Grid for exact gap control */}
      <div className="max-w-[1440px] mx-auto px-6 py-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12">
          
          {/* LEFT COLUMN: Brand (Span 4 of 12) */}
          <div className="lg:col-span-4 flex flex-col pr-8">
            <div className="flex items-center gap-2 mb-6">
              <ChefHat className="w-10 h-10 text-white mb-1" strokeWidth={1.5} />
              <h2 className="text-4xl font-bold tracking-tight">ZimSports</h2>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed text-base max-w-sm">
              The modern operating system for club sports teams. Broadcast, manage, and win.
            </p>

            <div className="flex gap-4 mb-12">
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
            </div>

            <div className="mt-auto">
              <div className="bg-white text-black w-fit rounded-md overflow-hidden mb-6 shadow-lg">
                <div className="flex items-center gap-2 p-2 px-3">
                  <div className="bg-[#ff4d29] rounded p-1">
                     <span className="font-bold text-white text-[10px] leading-none block">L</span>
                  </div>
                  <span className="font-bold text-gray-900 text-sm">Leadinfo</span>
                </div>
                <div className="bg-[#ff4d29] text-white text-[10px] font-bold px-3 py-1 text-center uppercase tracking-wide">
                  Certified Partner
                </div>
              </div>

              <p className="text-sm text-gray-400">
                © 2026 Zim Sports. All rights reserved.
              </p>
            </div>
          </div>

          {/* MIDDLE COLUMN: Snelle Links (Span 3 of 12) */}
          {/* This specific span creates the spacing. It takes 3 cols, but content is slim. */}
          <div className="lg:col-span-3 pt-2 pl-2">
            <h3 className="text-2xl font-bold mb-8">Snelle Links</h3>
            <ul className="space-y-4 text-gray-300 font-medium">
              <FooterLink text="Product" />
              <FooterLink text="Features" />
              <FooterLink text="Sports" />
              <FooterLink text="How It Works" />
              <FooterLink text="Company" />
              <FooterLink text="About Zim" />
              <FooterLink text="Support" />
              <FooterLink text="Contact" />
              <FooterLink text="Legal" />
              <FooterLink text="Privacy Policy" />
              <FooterLink text="Terms of Service" />
            </ul>
          </div>

          {/* SPACER COLUMN (Span 1 of 12) - Explicit Gap Control */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* RIGHT COLUMN: The Blue Phone (Span 4 of 12) */}
          <div className="lg:col-span-4 flex justify-end">
            {/* The Phone Container */}
            <div className="bg-[#2d4eff] w-full max-w-[380px] rounded-[40px] px-8 pt-10 pb-12 relative shadow-2xl overflow-hidden flex flex-col h-full">
              
              {/* --- PHONE NOTCH (The 'Rising' Detail) --- */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 flex items-center gap-3">
                 {/* Speaker slit */}
                 <div className="w-16 h-1.5 bg-blue-900/20 rounded-full"></div>
                 {/* Camera dot */}
                 <div className="w-1.5 h-1.5 bg-blue-900/20 rounded-full"></div>
              </div>

              {/* Icon */}
              <div className="mt-4 mb-8">
                <Asterisk className="w-14 h-14 text-white" strokeWidth={3} />
              </div>

              <h3 className="text-xl font-bold mb-8">Neem Contact Op</h3>

              {/* Contact Items */}
              <div className="space-y-0">
                <ContactItem 
                  icon={<Mail size={20} />} 
                  text="hello@onlinemarketingbakery.nl" 
                />
                <ContactItem 
                  icon={<MapPin size={20} />} 
                  text="Noordhoven 176042 NW Roermond" 
                />
                {/* Phone Number - No Plus Sign as requested */}
                <ContactItem 
                  icon={<Phone size={20} />} 
                  text="0681843267" 
                />
              </div>

              {/* BTW Number */}
              <div className="mt-10 mb-auto">
                <p className="font-bold text-xs opacity-70 uppercase tracking-wider mb-1">BTW-Nummer:</p>
                <p className="font-semibold text-lg tracking-wide">NL003276206B85</p>
              </div>

              {/* Bottom Links */}
              <div className="flex gap-6 text-xs font-medium text-blue-100/70 mt-12">
                <a href="#" className="hover:text-white transition-colors">Servicetermijn</a>
                <a href="#" className="hover:text-white transition-colors">Privacybeleid</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

// --- Sub-components for cleaner code ---

const SocialIcon = ({ icon }) => (
  <a href="#" className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all duration-300">
    {icon}
  </a>
);

const FooterLink = ({ text }) => (
  <li>
    <a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 block">
      {text}
    </a>
  </li>
);

const ContactItem = ({ icon, text }) => (
  <div className="group flex items-center justify-between border-b border-white/20 py-5 cursor-pointer first:pt-0">
    <div className="flex items-center gap-4 overflow-hidden">
      <div className="border border-white/30 rounded-full p-2 flex-shrink-0">
        {icon}
      </div>
      <span className="text-[15px] font-medium truncate">{text}</span>
    </div>
    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white" />
  </div>
);

export default Footer;