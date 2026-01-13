import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-[1200px] h-[72px] px-6 flex items-center justify-between rounded-full border border-white/10 backdrop-blur-xl"
      style={{
        background: 'linear-gradient(90deg, rgba(55,56,249,0.45), rgba(0,0,0,0.55))'
      }}
    >
      {/* Logo */}
      <div className="text-white text-[26px] font-black tracking-tight">
        ömb
      </div>

      {/* Menu */}
      <div className="hidden md:flex items-center gap-8">
        {['Home', 'Over ons', 'Our Services', 'Working at OMB', 'Blog'].map(item => (
          <a
  key={item}
  href="#"
  className="text-white/90 text-[14px] font-normal
  hover:text-white transition-colors"
>
  {item}
</a>

        ))}
      </div>

      {/* Button */}
      <button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-[13px] font-bold">
        Get Started
        <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center">
          →
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
