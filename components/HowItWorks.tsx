
import React from 'react';

const Icons = {
  Users: () => <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Link: () => <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  Share: () => <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>,
  Dollar: () => <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <Icons.Users />,
      title: "Entre no Grupo",
      description: "Acesse nosso ecossistema fechado onde a estrutura de elite é entregue."
    },
    {
      number: "02",
      icon: <Icons.Link />,
      title: "Ative sua Revenda",
      description: "Gere seu link oficial de afiliado Kiwify e integre-se à rede."
    },
    {
      number: "03",
      icon: <Icons.Share />,
      title: "Propague o Acesso",
      description: "Use nossos scripts validados para atrair interessados de forma profissional."
    },
    {
      number: "04",
      icon: <Icons.Dollar />,
      title: "Lucre com Comissões",
      description: "Ganhe participação real em cada venda realizada através do seu link."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 md:py-40 px-6 bg-black">
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
        <div className="text-center space-y-6 md:space-y-8">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-poppins font-black uppercase tracking-tighter leading-none">O FLUXO <span className="text-red-600">ELITE</span></h2>
          <p className="text-zinc-500 text-base md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            Esqueça métodos complexos. Nosso protocolo foi desenhado para conversão máxima com esforço mínimo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {steps.map((step, index) => (
            <div key={index} className="glass-ios p-10 premium-card group relative overflow-hidden">
              <span className="absolute top-6 right-6 text-6xl md:text-7xl font-black text-red-600/5 font-poppins group-hover:text-red-600/10 transition-all">
                {step.number}
              </span>
              <div className="h-16 w-16 md:h-20 md:w-20 bg-red-600/10 rounded-2xl flex items-center justify-center mb-8 text-red-600 border border-red-600/20 shadow-inner group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-poppins font-black mb-4 text-white uppercase tracking-tight leading-tight">{step.title}</h3>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-light">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
