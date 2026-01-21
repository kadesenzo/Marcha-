
import React from 'react';

interface FooterProps {
  onAccessSystem: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAccessSystem }) => {
  return (
    <footer className="bg-black pt-24 pb-12 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-24">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="space-y-8 max-w-sm">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center font-black">
                 K<span className="text-black">$</span>
              </div>
              <span className="text-white font-poppins font-black text-2xl tracking-tighter uppercase">
                KADES <span className="text-red-600">NETWORK</span>
              </span>
            </div>
            <p className="text-zinc-500 font-bold leading-relaxed uppercase text-xs tracking-tight">
              Ecossistema proprietário de alta performance para formação de revendedores digitais.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end space-y-12">
            <div className="flex space-x-8 text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600">
              <a href="#" className="hover:text-red-600 transition-colors">Protocolo</a>
              <a href="#" className="hover:text-red-600 transition-colors">Sistema</a>
              <a href="#" className="hover:text-red-600 transition-colors">Rede</a>
            </div>
            <div className="flex space-x-4">
              {[1,2,3].map(i => (
                <div key={i} className="w-12 h-12 bg-zinc-950 rounded-[1.2rem] flex items-center justify-center border border-white/5 hover:border-red-600/50 transition-all cursor-pointer shadow-inner">
                  <div className="w-4 h-4 bg-zinc-800 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-12 text-center border-t border-white/5 space-y-4">
          <div className="text-red-600 font-black text-[9px] tracking-[0.8em] uppercase">Operacional</div>
          <h3 className="text-4xl md:text-6xl font-poppins font-black text-white italic uppercase tracking-tighter">Fluxo <span className="text-zinc-800">Elite</span></h3>
          <p className="text-[8px] text-zinc-800 font-black uppercase tracking-[0.6em] mt-8">
            © 2024 Kades Network • Core Engine • Protocolo Elite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
