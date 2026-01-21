
import React from 'react';

const Community: React.FC = () => {
  const points = [
    "Conteúdos práticos",
    "Estratégias de divulgação",
    "Suporte e atualizações",
    "Pessoas com o mesmo objetivo",
    "Avisos e orientações"
  ];

  return (
    <section id="grupo" className="py-32 px-4 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        
        <div className="flex-1 space-y-10 order-2 lg:order-1">
          <h2 className="text-4xl md:text-6xl font-black">O que você <br/><span className="text-red-600">encontra no grupo</span></h2>
          <div className="space-y-4">
            {points.map((point, i) => (
              <div key={i} className="flex items-center space-x-4 bg-zinc-900/50 p-4 rounded-2xl border border-white/5 hover:border-red-600/40 transition-colors">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                <span className="text-lg text-gray-300 font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 order-1 lg:order-2 relative w-full">
           {/* Stylized UI Mockup */}
           <div className="relative z-10 bg-[#121212] rounded-[2.5rem] border border-white/10 p-6 shadow-2xl shadow-red-600/10 rotate-1 transform-gpu transition-transform hover:rotate-0 duration-700">
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                 <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center font-bold italic shadow-lg shadow-red-900/40">K$</div>
                    <div>
                       <h4 className="font-bold text-sm tracking-tight">COMUNIDADE KADES</h4>
                       <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest flex items-center">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                          Online Agora
                       </p>
                    </div>
                 </div>
                 <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs">🔔</div>
              </div>
              <div className="space-y-6">
                 <div className="bg-zinc-800 p-4 rounded-2xl rounded-tl-none max-w-[85%] text-sm leading-relaxed border border-white/5">
                    "Galera, acabei de subir o novo modelo de divulgação de stories lá no sistema. Quem aplicar hoje volta aqui pra contar!"
                 </div>
                 <div className="bg-red-600 p-4 rounded-2xl rounded-tr-none max-w-[85%] text-sm self-end ml-auto text-white font-medium shadow-lg shadow-red-900/30">
                    "Caraca!! Fiz minha primeira comissão seguindo o passo a passo de ontem. Valeu demais time! 🔥🚀"
                 </div>
                 <div className="bg-zinc-800 p-4 rounded-2xl rounded-tl-none max-w-[85%] text-sm leading-relaxed border border-white/5 opacity-80">
                    "Isso é só o começo! Pra cima! 🚀"
                 </div>
              </div>
           </div>
           {/* Decorative Element */}
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/20 blur-[60px] rounded-full"></div>
        </div>
        
      </div>
    </section>
  );
};

export default Community;
