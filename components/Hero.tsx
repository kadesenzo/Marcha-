
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
        <div className="space-y-8">
            <h1 className="text-6xl md:text-9xl font-poppins font-black leading-[0.85] tracking-tighter text-white uppercase italic animate-[fadeIn_1s_ease]">
              KADES <br/>
              <span className="text-zinc-800/80">NETWORK</span>
            </h1>
            <p className="text-sm md:text-2xl text-zinc-500 max-w-2xl mx-auto font-bold leading-relaxed animate-[fadeIn_1.2s_ease] px-4 tracking-tight">
              A pessoa não compra o acesso, ela entra para <span className="text-white">REVENDER</span>. 
              Ganha comissão com SEU link de afiliado. O ecossistema completo para escala.
            </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-[fadeIn_1.4s_ease]">
          <button 
            onClick={onAccessSystem}
            className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs transition-all transform hover:scale-105 shadow-2xl shadow-red-600/40 active:scale-95 flex items-center justify-center gap-3 group"
          >
            Acessar Sistema <Icons.Zap />
          </button>
          
          <a 
            href="#como-funciona"
            className="w-full md:w-auto bg-white/5 hover:bg-white/10 text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs transition-all border border-white/10 flex items-center justify-center gap-3"
          >
            Saber Mais <Icons.ArrowDown />
          </a>
        </div>
      </div>
      
      <div className="mt-32 opacity-20 animate-bounce">
         <Icons.ArrowDown />
      </div>
    </section>
  );
};

export default Hero;
