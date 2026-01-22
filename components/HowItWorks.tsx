
import React from 'react';

const Icons = {
  Users: () => <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Link: () => <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  Share: () => <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Icons.Users />,
      title: "ENTRE NA REDE",
      desc: "Acesse o ecossistema e receba o treinamento base do Protocolo Elite.",
      num: "01"
    },
    {
      icon: <Icons.Link />,
      title: "PEGUE SEU ATIVO",
      desc: "Seu link de afiliado é sua chave de lucro. Ele rastreia cada venda bionicamente.",
      num: "02"
    },
    {
      icon: <Icons.Share />,
      title: "ESPALHE O SCRIPT",
      desc: "Use nossos scripts validados para atrair leads e converter comissões automáticas.",
      num: "03"
    }
  ];

  return (
    <section id="como-funciona" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-7xl font-poppins font-black uppercase italic tracking-tighter">O FLUXO DA <span className="text-red-600">REVENDA</span></h2>
          <p className="text-zinc-500 font-bold text-sm md:text-xl max-w-2xl mx-auto">Três passos simples para transformar seu dispositivo em uma fonte de ativos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="glass-ios p-10 rounded-[2.5rem] border-white/5 space-y-8 group hover:bg-white/[0.03] transition-all relative overflow-hidden">
              <div className="absolute top-8 right-8 text-5xl font-poppins font-black text-white/5 group-hover:text-red-600/10 transition-colors uppercase italic">{step.num}</div>
              <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {step.icon}
              </div>
              <div className="space-y-3">
                <h4 className="text-2xl font-poppins font-black text-white uppercase italic">{step.title}</h4>
                <p className="text-zinc-500 leading-relaxed font-medium text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
