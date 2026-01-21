
import React from 'react';

const Icons = {
  ArrowDown: () => <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="m7 13 5 5 5-5M7 6l5 5 5-5"/></svg>,
  Zap: () => <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
};

const Hero: React.FC<{ onAccessSystem: () => void }> = ({ onAccessSystem }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-64 md:pb-48 px-6 flex flex-col items-center text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-600/10 blur-[180px] rounded-full animate-pulse"></div>
      </div>
      
      <div className="max-w-5xl mx-auto space-y-12 md:space-y-20 relative z-10">
        <div className="animate-ios-fade">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-red-600/30 bg-red-600/5 backdrop-blur-xl">
            <Icons.Zap />
            <span className="text-[9px] font-black tracking-[0.5em] text-red-500 uppercase">Sistema de Revenda Elite v4.0</span>
          </div>
        </div>
        
        <div className="space-y-8">
            <h1 className="text-6xl md:text-9xl font-poppins font-black leading-[0.85] tracking-tighter text-white uppercase italic animate-[fadeIn_1s_ease]">
              KADES <br/>
              <span className="text-zinc-800/80">NETWORK</span>
            </h1>
            <p className="text-sm md:text-2xl text-zinc-500 max-w-2xl mx-auto font-bold leading-relaxed animate-[fadeIn_1.2s_ease] px-4 tracking-tight">
              A pessoa não compra o acesso, ela entra para <span className="text-white">REVENDER</span>. 
              Ganha comissão real com seu link de afiliado através da nossa tecnologia bionica.
            </p>
        </div>
        
        <div className="flex flex-col items-center space-y-16 animate-[fadeIn_1.4s_ease]">
          <button 
            onClick={onAccessSystem}
            className="group relative bg-white text-black px-16 py-6 md:px-24 md:py-8 rounded-[2rem] font-poppins font-black text-xs md:text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.15)] flex items-center justify-center gap-4"
          >
            <span className="uppercase tracking-widest">Acessar Sistema</span>
          </button>
          
          <div className="flex flex-col items-center space-y-4 opacity-20">
             <span className="text-[8px] font-black tracking-[0.6em] uppercase text-zinc-400 italic">Scroll para saber mais</span>
             <div className="animate-bounce text-zinc-500">
                <Icons.ArrowDown />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
