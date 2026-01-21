
import React from 'react';

interface HeaderProps {
  onAccessSystem: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAccessSystem }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-2xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-950 rounded-2xl flex items-center justify-center font-black text-lg border border-white/10 glow-red relative">
            <span className="text-white relative z-10">K</span>
            <span className="text-red-600 absolute right-[-4px] translate-y-0.5 text-xs transition-transform group-hover:translate-x-1">$</span>
          </div>
        </div>
        
        <button 
          onClick={onAccessSystem}
          className="bg-red-600 hover:bg-red-700 text-white px-8 md:px-10 py-3 rounded-full text-[9px] font-black uppercase tracking-[0.3em] transition-all transform hover:scale-105 shadow-xl shadow-red-600/20 active:scale-95"
        >
          Acesso Elite
        </button>
      </div>
    </header>
  );
};

export default Header;
