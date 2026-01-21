
import React from 'react';

const Icons = {
  Check: () => <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  Smartphone: () => <svg viewBox="0 0 24 24" width="56" height="56" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>
};

const TargetAudience: React.FC = () => {
  const listItems = [
    "Busca por liberdade e renda extra real",
    "Deseja um sistema pronto sem precisar criar produtos",
    "Precisa de scripts validados de alta conversão",
    "Valoriza organização e design profissional",
    "Quer resultados através da revenda de elite"
  ];

  return (
    <section className="py-48 px-8 bg-[#020202] relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 blur-[180px] rounded-full pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div className="space-y-16">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-8xl font-poppins font-black leading-[0.9] text-white uppercase italic tracking-tighter">
              A QUEM SE <br/>
              <span className="text-red-600">DESTINA:</span>
            </h2>
            <p className="text-zinc-500 text-2xl font-light">O ecossistema para quem não aceita o comum.</p>
          </div>
          <ul className="space-y-8">
            {listItems.map((item, i) => (
              <li key={i} className="flex items-center space-x-8 group">
                <div className="flex-shrink-0 w-14 h-14 bg-red-600/10 border border-red-600/20 rounded-[1.8rem] flex items-center justify-center text-red-600 ios-transition group-hover:bg-red-600 group-hover:text-white glow-red">
                  <Icons.Check />
                </div>
                <span className="text-xl md:text-3xl text-zinc-400 font-medium tracking-tight group-hover:text-white transition-colors leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-10 bg-red-600/10 blur-[100px] opacity-30 rounded-full group-hover:opacity-60 transition-opacity"></div>
          <div className="relative glass-ios p-12 md:p-20 shadow-2xl border-white/5 premium-card aspect-square flex items-center justify-center">
             <div className="text-center space-y-10">
                <div className="w-32 h-32 bg-red-600/5 rounded-[2.5rem] mx-auto flex items-center justify-center text-red-600 border border-red-600/10 shadow-inner group-hover:scale-110 ios-transition">
                   <Icons.Smartphone />
                </div>
                <div className="space-y-4">
                  <h4 className="text-3xl font-poppins font-black uppercase tracking-widest text-white italic leading-none">MOBILIDADE TOTAL</h4>
                  <p className="text-zinc-500 text-xl max-w-xs mx-auto italic font-light">"Gerencie todo o seu faturamento de qualquer lugar, apenas com um dispositivo bionic."</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
