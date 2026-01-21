
import React from 'react';

const SocialProof: React.FC = () => {
  const testimonials = [
    { text: "Primeiras pessoas já estão aplicando e vendo que o sistema realmente organiza a rotina.", tag: "VALIDADO" },
    { text: "Grupo fechado em desenvolvimento constante para trazer o que há de mais novo no mercado.", tag: "ESTRATÉGICO" },
    { text: "Sistema sendo usado na prática por quem quer resultados sem enrolação.", tag: "PRÁTICO" }
  ];

  return (
    <section className="py-32 px-4 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black italic">Projeto em crescimento</h2>
          <p className="text-gray-500 text-lg uppercase tracking-widest font-bold">Confiança construída com resultados reais</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="p-10 bg-black border border-white/5 rounded-[2.5rem] flex flex-col justify-between hover:border-red-600/30 transition-all group">
              <div className="space-y-6">
                <div className="bg-red-600/10 text-red-600 text-[10px] font-black tracking-[0.2em] px-4 py-1.5 rounded-full inline-block border border-red-600/20 group-hover:bg-red-600 group-hover:text-white transition-all">
                  {t.tag}
                </div>
                <p className="text-xl md:text-2xl font-medium leading-tight text-gray-300">
                  "{t.text}"
                </p>
              </div>
              <div className="mt-10 flex items-center space-x-3 opacity-40">
                <div className="w-10 h-10 bg-zinc-800 rounded-full border border-white/10"></div>
                <div className="w-24 h-2 bg-zinc-800 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 flex flex-col items-center space-y-8">
           <div className="flex -space-x-4">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-xs font-bold overflow-hidden grayscale">
                   <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-black bg-red-600 flex items-center justify-center text-xs font-black">+</div>
           </div>
           <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px]">Primeiras pessoas já estão aplicando</p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
