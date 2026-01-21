
import React, { useEffect, useState } from 'react';

const IntroScreen: React.FC = () => {
  const [stage, setStage] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Stage 1: Progress Bar (Iniciando Ecossistema)
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 2 : 100));
    }, 40);

    const timer1 = setTimeout(() => setStage(2), 2200); // KADES$ Impact
    const timer2 = setTimeout(() => setStage(3), 4800); // Welcome Message
    const timer3 = setTimeout(() => setStage(4), 6500); // Final Sync

    return () => {
      clearInterval(interval);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] overflow-hidden select-none">
      <div className="absolute inset-0 bg-mesh opacity-10"></div>
      
      {stage === 1 && (
        <div className="flex flex-col items-center animate-ios-fade w-full px-12 z-10">
          <p className="text-[10px] font-black tracking-[0.8em] text-zinc-600 mb-6 uppercase italic">Iniciando Ecossistema</p>
          <div className="w-full max-w-[180px] h-[1px] bg-zinc-900 rounded-full overflow-hidden">
             <div 
               className="h-full bg-white transition-all duration-100 ease-out shadow-[0_0_15px_#fff]" 
               style={{ width: `${progress}%` }}
             ></div>
          </div>
        </div>
      )}

      {stage === 2 && (
        <div className="relative flex items-center justify-center animate-shake z-10">
          <div className="flex items-center relative h-32">
            <span className="text-white font-poppins font-black text-7xl md:text-9xl tracking-tighter animate-k-impact">
              K
            </span>
            <span className="text-white font-poppins font-black text-7xl md:text-9xl tracking-tighter opacity-0 animate-[fadeIn_0.1s_0.4s_forwards]">
              ADES
            </span>
            <span className="text-red-600 font-poppins font-black text-7xl md:text-9xl absolute opacity-0 animate-dollar-slide">
              $
            </span>
          </div>
        </div>
      )}

      {stage === 3 && (
        <div className="flex flex-col items-center animate-ios-fade text-center px-6 z-10">
          <h2 className="text-white font-poppins font-black text-4xl md:text-7xl tracking-tighter leading-tight uppercase italic">
            BEM-VINDO À <br/>
            <span className="text-red-600">NETWORK</span>
          </h2>
          <div className="mt-8 flex gap-1.5">
             <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse delay-75"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse delay-150"></div>
          </div>
        </div>
      )}

      {stage === 4 && (
        <div className="animate-ios-fade flex flex-col items-center gap-4 z-10">
           <div className="w-10 h-10 border-2 border-white/5 border-t-red-600 rounded-full animate-spin"></div>
           <span className="text-[8px] font-black text-zinc-700 uppercase tracking-widest">Sincronizando Ativos...</span>
        </div>
      )}

      <div className="absolute bottom-12 opacity-30 z-10">
        <p className="text-[7px] font-black tracking-[1.2em] text-zinc-500 uppercase">Kades Core Engine v4.0</p>
      </div>
    </div>
  );
};

export default IntroScreen;
