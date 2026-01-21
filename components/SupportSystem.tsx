
import React from 'react';

const Icons = {
  Zap: () => <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  Shield: () => <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>,
  Layout: () => <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>,
  Activity: () => <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  Award: () => <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  Diamond: () => <svg viewBox="0 0 24 24" width="32" height="32" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"/></svg>
};

const SupportSystem: React.FC = () => {
  const systemFeatures = [
    { icon: <Icons.Zap />, title: "Scripts High-ROI", desc: "Templates calibrados para fechamento rápido." },
    { icon: <Icons.Layout />, title: "Interface Kades", desc: "Painel intuitivo para gerenciar seus ativos." },
    { icon: <Icons.Activity />, title: "Checklist Diário", desc: "Otimização de rotina para maximizar lucro." },
    { icon: <Icons.Shield />, title: "Infraestrutura", desc: "Servidores garantindo links sempre online." },
    { icon: <Icons.Award />, title: "Academy Alpha", desc: "Treinamentos focados em volume de vendas." }
  ];

  return (
    <section id="sistema" className="py-20 md:py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto glass-ios p-8 md:p-20 lg:p-24 rounded-[3rem] relative overflow-hidden shadow-2xl border-white/5">
        <div className="absolute -top-32 -right-32 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-red-600/5 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="text-center mb-12 md:mb-20 space-y-6">
          <div className="text-red-600 font-poppins font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-[8px] md:text-[10px] mb-2">SISTEMA PROPRIETÁRIO</div>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-poppins font-black tracking-tighter text-white uppercase italic leading-[0.9]">ECOSSISTEMA <br/><span className="text-red-600">PREMIUM</span></h2>
          <p className="text-zinc-500 text-base md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Você recebe a chave de uma <span className="text-white border-b-2 border-red-600">máquina de vendas</span> perfeitamente ajustada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {systemFeatures.map((item, idx) => (
            <div key={idx} className="p-8 glass-ios rounded-3xl border-white/5 premium-card hover:bg-white/5 transition-colors group relative flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-1 h-0 bg-red-600 group-hover:h-full transition-all duration-700"></div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl md:text-2xl font-poppins font-black text-white uppercase tracking-tight leading-tight">{item.title}</h4>
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="p-8 bg-red-600 rounded-3xl flex flex-col justify-center items-center text-center space-y-4 shadow-xl shadow-red-900/20 group hover:scale-[1.02] transition-transform cursor-pointer">
             <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
               <Icons.Diamond />
             </div>
             <div className="space-y-1">
               <h4 className="text-xl md:text-2xl font-poppins font-black uppercase italic tracking-tighter leading-none">CORE ELITE</h4>
               <p className="text-white/80 text-[7px] font-black uppercase tracking-[0.4em] leading-none">ESTRUTURA COMPLETA</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSystem;
