
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface DashboardProps {
  onBack: () => void;
}

const Icons = {
  Home: ({ active }: { active: boolean }) => (
    <svg viewBox="0 0 24 24" width="22" height="22" stroke={active ? "#ff0000" : "#555"} strokeWidth="2.5" fill="none">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    </svg>
  ),
  Rocket: ({ active }: { active: boolean }) => (
    <svg viewBox="0 0 24 24" width="22" height="22" stroke={active ? "#ff0000" : "#555"} strokeWidth="2.5" fill="none">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.5-1 1-4c2 1 3 3 3 3z"/>
      <path d="M12 15v5s1-.5 4-1c-1-2-3-3-3-3z"/>
    </svg>
  ),
  Scripts: ({ active }: { active: boolean }) => (
    <svg viewBox="0 0 24 24" width="22" height="22" stroke={active ? "#ff0000" : "#555"} strokeWidth="2.5" fill="none">
      <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/>
    </svg>
  ),
  Ativos: ({ active }: { active: boolean }) => (
    <svg viewBox="0 0 24 24" width="22" height="22" stroke={active ? "#ff0000" : "#555"} strokeWidth="2.5" fill="none">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  ),
  Tasks: ({ active }: { active: boolean }) => (
    <svg viewBox="0 0 24 24" width="22" height="22" stroke={active ? "#ff0000" : "#555"} strokeWidth="2.5" fill="none">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
    </svg>
  ),
  Academy: ({ active }: { active: boolean }) => (
    <svg viewBox="0 0 24 24" width="22" height="22" stroke={active ? "#ff0000" : "#555"} strokeWidth="2.5" fill="none">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
  Back: () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none"><path d="m15 18-6-6 6-6"/></svg>,
  Brain: () => <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15"/></svg>,
  Copy: () => <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>,
  Check: () => <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="3" fill="none"><polyline points="20 6 9 17 4 12"/></svg>,
  Send: () => <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="m2 21 21-9L2 3v7l15 2-15 2v7z"/></svg>
};

const Dashboard: React.FC<DashboardProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('inicio');
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const affiliateLink = "https://dashboard.kiwify.com/join/affiliate/0G9SQimY";

  const academyLessons = [
    { 
      t: "MINDSET BIONICO", 
      d: "A base psicológica dos 10k/mês.", 
      content: `
        ### CAPÍTULO 1: O CÓDIGO MENTAL
        
        Para faturar alto na **Kades Network**, sua mente precisa ser reconfigurada. Esqueça o amadorismo. Aqui operamos com o **Mindset Bionico**.

        **1. A Barreira dos R$ 10.000**
        A maioria dos iniciantes trava porque foca no dinheiro. O elite foca no **Processo**. O dinheiro é apenas o rastro de uma operação bem executada.

        **2. Blindagem Social**
        Você ouvirá que "revenda não funciona". Ignore. Você tem em mãos um ativo verificado. Mantenha sua visão no **Dashboard** e nos seus ativos.

        **3. Constância Algorítmica**
        Vendas não são sorte, são estatística. Quanto mais scripts você rodar, maior sua conversão. É puramente matemático.
      `
    },
    { 
      t: "TRÁFEGO ORGÂNICO", 
      d: "Como viralizar sem investir R$ 1.",
      content: `
        ### CAPÍTULO 2: ATRAÇÃO DE MASSA
        
        Tráfego é o combustível da sua máquina. No orgânico, você usa o **Algoritmo** a seu favor para atrair leads qualificados.

        **1. O Gancho Incorruptível**
        Seus primeiros 3 segundos de vídeo ou texto decidem seu faturamento. Use a curiosidade sobre o "Acesso de Elite" para prender a atenção.

        **2. Distribuição Multicanal**
        Não dependa de uma rede só. Espalhe seu link e seus scripts no Reels, TikTok e Shorts. Onde houver atenção, haverá venda.

        **3. Call to Action (CTA) de Elite**
        Nunca poste sem direcionar. O lead deve saber exatamente o que fazer: "Comente EU QUERO" ou "Link na Bio".
      `
    },
    { 
      t: "FECHAMENTO ELITE", 
      d: "A arte de converter curiosos em lucros.",
      content: `
        ### CAPÍTULO 3: A CONVERSÃO FINAL
        
        Muitos atraem pessoas, mas poucos fecham. Aqui o **Script Expert** entra em ação.

        **1. Quebra de Objeção Imediata**
        A maior dúvida é: "Eu preciso comprar algo?". Sua resposta deve ser clara: "Você está entrando para **REVENDER** e lucrar, não para ser apenas um consumidor".

        **2. Gatilhos de Escassez**
        A rede Kades valoriza a exclusividade. Use as vagas limitadas do grupo VIP para acelerar a decisão do lead.

        **3. O Fechamento Bionico**
        Assim que o lead entender o poder da revenda, envie seu link da Kiwify imediatamente. Não dê tempo para a dúvida esfriar o desejo.
      `
    }
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const formatAiResponse = (text: string) => {
    return text.split('\n').map((line, i) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={i} className={line.trim() === '' ? 'h-3' : 'mb-1'}>
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={j} className="text-white font-black">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  const handleSendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })), { role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: `Você é o mentor da Kades Network. Use negrito (**) e divida em Estratégia, Script e Dica.`
        }
      });
      setMessages(prev => [...prev, { role: 'model', text: response.text || "Erro." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Erro." }]);
    } finally {
      setLoading(false);
    }
  };

  const menuItems = [
    { id: 'inicio', label: 'INÍCIO', icon: (a: boolean) => <Icons.Home active={a} /> },
    { id: 'start', label: 'START', icon: (a: boolean) => <Icons.Rocket active={a} /> },
    { id: 'scripts', label: 'SCRIPTS', icon: (a: boolean) => <Icons.Scripts active={a} /> },
    { id: 'ativos', label: 'ATIVOS', icon: (a: boolean) => <Icons.Ativos active={a} /> },
    { id: 'tarefas', label: 'TAREFAS', icon: (a: boolean) => <Icons.Tasks active={a} /> },
    { id: 'academy', label: 'ACADEMY', icon: (a: boolean) => <Icons.Academy active={a} /> },
  ];

  return (
    <div className="flex flex-col h-screen bg-black overflow-hidden font-inter text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-5 bg-black/80 backdrop-blur-md flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-zinc-900/50 rounded-xl flex items-center justify-center border border-white/10 relative">
            <span className="text-white font-black text-xs">K</span>
            <span className="text-red-600 absolute right-[-2px] text-[10px] translate-y-1">$</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-poppins font-black text-[11px] leading-tight tracking-tight uppercase">KADES NETWORK</h1>
            <span className="text-red-600 font-bold text-[8px] tracking-[0.2em] uppercase opacity-90">ELITE SYSTEM</span>
          </div>
        </div>
        <button onClick={onBack} className="text-[9px] font-black text-zinc-600 bg-zinc-900/40 px-5 py-2.5 rounded-lg border border-white/5 uppercase tracking-widest transition-all active:scale-95">Sair</button>
      </header>

      <main className="flex-grow overflow-y-auto pt-24 pb-32 no-scrollbar px-6">
        <div className="max-w-md mx-auto space-y-8">
          
          {activeTab === 'inicio' && (
            <div className="animate-ios-fade space-y-10">
              <div className="relative p-10 bg-[#0f0f0f] rounded-[2.5rem] border border-white/5 space-y-8 overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-[60px] rounded-full"></div>
                 <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-red-600 border border-red-600/20 shadow-xl group-hover:scale-110 transition-transform">
                    <Icons.Brain />
                 </div>
                 <div className="space-y-3">
                    <h2 className="text-4xl font-poppins font-black text-white leading-none uppercase tracking-tighter italic">METODOLOGIA<br/>ALPHA</h2>
                    <p className="text-zinc-500 font-bold text-sm">Processos validados para escala.</p>
                 </div>
                 <div className="flex gap-2">
                    <div className="h-1.5 w-12 bg-red-600 rounded-full"></div>
                    <div className="h-1.5 w-3 bg-zinc-800 rounded-full"></div>
                    <div className="h-1.5 w-3 bg-zinc-800 rounded-full"></div>
                 </div>
              </div>

              <div className="space-y-3 text-center pt-4">
                 <h3 className="text-5xl font-poppins font-black uppercase tracking-tighter italic">
                    PAINEL DE <span className="text-red-600">CONTROLE</span>
                 </h3>
                 <p className="text-zinc-500 font-bold text-sm max-w-xs mx-auto leading-tight">
                    Sua base de operações para dominar a revenda na rede Kades.
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="aspect-square bg-[#0f0f0f] rounded-[2rem] border border-white/5 p-6 flex flex-col justify-center items-center gap-4 group active:scale-95 transition-all cursor-pointer" onClick={() => setActiveTab('start')}>
                    <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 group-hover:rotate-12 transition-transform">
                       <Icons.Rocket active={true} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Iniciar</span>
                 </div>
                 <div className="aspect-square bg-[#0f0f0f] rounded-[2rem] border border-white/5 p-6 flex flex-col justify-center items-center gap-4 group active:scale-95 transition-all cursor-pointer" onClick={() => setActiveTab('ativos')}>
                    <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-500 group-hover:scale-110 transition-transform">
                       <Icons.Ativos active={false} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Ativos</span>
                 </div>
              </div>
            </div>
          )}

          {activeTab === 'start' && (
            <div className="animate-ios-fade space-y-8 pb-10">
               <h2 className="text-3xl font-black italic uppercase tracking-tighter">PROTOCOLO <span className="text-red-600">START</span></h2>
               <div className="space-y-4">
                 {[
                   { t: "ENTRE NO GRUPO", d: "Acesso vitalício à comunidade elite." },
                   { t: "PEGUE SEU ATIVO", d: "Copie seu link de afiliado na aba ATIVOS." },
                   { t: "PRIMEIRA POSTAGEM", d: "Use o script de 'Curiosidade' no Instagram." },
                   { t: "RECOLHA OS LEADS", d: "Direcione todos para seu WhatsApp ou Direct." }
                 ].map((step, i) => (
                   <div key={i} className="flex items-center gap-6 p-6 bg-[#0f0f0f] rounded-3xl border border-white/5">
                      <div className="w-10 h-10 bg-zinc-900 border border-red-600/30 rounded-full flex items-center justify-center text-[10px] font-black text-red-600">
                         {i + 1}
                      </div>
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-wider">{step.t}</h4>
                        <p className="text-[10px] text-zinc-500 font-bold">{step.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
               <button className="w-full bg-red-600 py-6 rounded-full font-black text-[11px] uppercase tracking-widest shadow-xl shadow-red-900/20 active:scale-95 transition-all">
                  ENTRAR NO GRUPO VIP
               </button>
            </div>
          )}

          {activeTab === 'scripts' && (
            <div className="flex flex-col h-[70vh] animate-ios-fade">
               <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-4">SCRIPT <span className="text-red-600">EXPERT</span></h2>
               <div ref={scrollRef} className="flex-grow overflow-y-auto space-y-4 mb-4 pr-2 no-scrollbar">
                  {messages.length === 0 && (
                    <div className="p-8 bg-[#0f0f0f] rounded-[2rem] border border-white/5 text-center text-zinc-500 text-[11px] font-bold uppercase italic tracking-widest leading-relaxed">
                      "Olá, sou seu mentor IA. Peça um script para quebrar objeção ou uma abordagem de elite."
                    </div>
                  )}
                  {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                       <div className={`max-w-[90%] p-5 rounded-[1.8rem] text-[13px] leading-relaxed ${m.role === 'user' ? 'bg-red-600 text-white rounded-tr-none font-bold' : 'bg-zinc-900 text-zinc-300 border border-white/10 rounded-tl-none'}`}>
                          {m.role === 'model' ? formatAiResponse(m.text) : m.text}
                       </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex justify-start">
                       <div className="bg-zinc-900 p-5 rounded-[1.8rem] rounded-tl-none border border-white/10 flex gap-1.5">
                          <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce delay-100"></div>
                          <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce delay-200"></div>
                       </div>
                    </div>
                  )}
               </div>
               <div className="relative">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ex: Script de abordagem WhatsApp..."
                    className="w-full bg-[#0f0f0f] border border-white/10 rounded-full py-5 px-8 text-white text-sm focus:outline-none focus:border-red-600/40 pr-16"
                  />
                  <button onClick={handleSendMessage} className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-red-600 rounded-full flex items-center justify-center text-white active:scale-90 transition-transform">
                    <Icons.Send />
                  </button>
               </div>
            </div>
          )}

          {activeTab === 'ativos' && (
            <div className="animate-ios-fade space-y-8">
               <h2 className="text-3xl font-black italic uppercase tracking-tighter">MEUS <span className="text-red-600">ATIVOS</span></h2>
               <div className="p-8 bg-[#0f0f0f] rounded-[2.5rem] border border-white/5 space-y-8">
                  <div className="space-y-3">
                    <p className="text-[10px] font-black uppercase text-zinc-600 tracking-[0.4em]">Link de Afiliado (Kiwify)</p>
                    <div className="p-5 bg-black border border-white/5 rounded-2xl break-all font-mono text-red-600 text-[10px] leading-relaxed opacity-80">
                       {affiliateLink}
                    </div>
                  </div>
                  <button 
                    onClick={() => { navigator.clipboard.writeText(affiliateLink); alert("Copiado com Sucesso!"); }} 
                    className="w-full bg-red-600 text-white py-5 rounded-full font-black text-[11px] uppercase tracking-widest active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl shadow-red-900/20"
                  >
                    <Icons.Copy /> Copiar Link de Revenda
                  </button>
               </div>
            </div>
          )}

          {activeTab === 'tarefas' && (
            <div className="animate-ios-fade space-y-8">
               <h2 className="text-3xl font-black italic uppercase tracking-tighter">DAILY <span className="text-red-600">CHECKLIST</span></h2>
               <div className="space-y-3">
                 {[
                   "Postar 3 Stories de Curiosidade",
                   "Responder 10 Leads pendentes",
                   "Estudar Script de Objeção (IA)",
                   "Conferir saldo na Kiwify",
                   "Postar 1 depoimento da Rede"
                 ].map((task, i) => (
                   <div key={i} className="flex items-center justify-between p-6 bg-[#0f0f0f] rounded-3xl border border-white/5 group hover:border-red-600/20 transition-all cursor-pointer">
                      <span className="text-[11px] font-bold text-zinc-400 group-hover:text-white uppercase tracking-tight">{task}</span>
                      <div className="w-6 h-6 border-2 border-zinc-800 rounded-lg flex items-center justify-center group-hover:border-red-600 transition-colors">
                         <div className="opacity-0 group-hover:opacity-100 text-red-600"><Icons.Check /></div>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {activeTab === 'academy' && (
            <div className="animate-ios-fade space-y-8 pb-10">
               {selectedLesson === null ? (
                 <>
                   <h2 className="text-3xl font-black italic uppercase tracking-tighter">KADES <span className="text-red-600">ACADEMY</span></h2>
                   <div className="grid grid-cols-1 gap-6">
                     {academyLessons.map((lesson, i) => (
                       <div 
                        key={i} 
                        onClick={() => setSelectedLesson(i)}
                        className="p-8 bg-[#0f0f0f] rounded-[2.5rem] border border-white/5 flex flex-col gap-4 group active:scale-[0.98] transition-all cursor-pointer hover:border-red-600/30"
                       >
                          <div className="flex justify-between items-start">
                            <span className="text-red-600 font-black text-[10px] tracking-widest uppercase italic">Capítulo {i+1}</span>
                            <div className="text-zinc-700 group-hover:text-red-600 transition-colors rotate-180"><Icons.Back /></div>
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-xl font-poppins font-black uppercase italic tracking-tighter group-hover:text-white transition-colors">{lesson.t}</h4>
                            <p className="text-[11px] text-zinc-600 font-bold uppercase">{lesson.d}</p>
                          </div>
                       </div>
                     ))}
                   </div>
                 </>
               ) : (
                 <div className="animate-ios-fade space-y-8 pb-20">
                    <button 
                      onClick={() => setSelectedLesson(null)}
                      className="flex items-center gap-2 text-zinc-500 font-black text-[10px] uppercase tracking-widest active:scale-95 transition-all"
                    >
                      <Icons.Back /> Voltar ao Sumário
                    </button>
                    
                    <div className="space-y-12 max-w-sm mx-auto">
                       <div className="space-y-3">
                          <span className="text-red-600 font-black text-[10px] tracking-[0.4em] uppercase">Manual de Elite • Cap. {selectedLesson + 1}</span>
                          <h3 className="text-5xl font-poppins font-black uppercase italic tracking-tighter leading-none">{academyLessons[selectedLesson].t}</h3>
                       </div>

                       <div className="prose prose-invert prose-zinc max-w-none space-y-8">
                          {academyLessons[selectedLesson].content.split('\n\n').map((block, bi) => {
                            if (block.startsWith('###')) {
                              return <h4 key={bi} className="text-lg font-black uppercase italic tracking-tight text-white mt-12 mb-4 border-l-4 border-red-600 pl-4 bg-zinc-900/30 py-2">{block.replace('### ', '')}</h4>;
                            }
                            if (block.startsWith('**')) {
                              const [title, ...rest] = block.split('\n');
                              return (
                                <div key={bi} className="space-y-2">
                                  <p className="text-white font-black uppercase text-[12px] tracking-wide">{title.replace(/\*\*/g, '')}</p>
                                  <p className="text-zinc-400 text-[14px] leading-relaxed font-medium">{rest.join('\n')}</p>
                                </div>
                              );
                            }
                            return <p key={bi} className="text-zinc-300 text-[14px] leading-relaxed font-medium">{block}</p>;
                          })}
                       </div>

                       <div className="pt-16 border-t border-white/5 flex flex-col items-center gap-6 opacity-30">
                          <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full"></div>
                          <p className="text-[8px] font-black uppercase tracking-[0.5em] text-zinc-700 italic">Fim do Capítulo</p>
                       </div>
                    </div>
                 </div>
               )}
            </div>
          )}
        </div>
      </main>

      {/* Nav */}
      <nav className="fixed bottom-0 left-0 w-full z-[100] bg-black/95 backdrop-blur-xl border-t border-white/5 pb-10 pt-4">
        <div className="flex justify-around items-center max-w-md mx-auto px-4 h-16">
          {menuItems.map(item => (
            <button 
              key={item.id} 
              onClick={() => { setActiveTab(item.id); setSelectedLesson(null); }} 
              className="flex flex-col items-center gap-1.5 transition-all relative"
            >
              <div className={`transition-all duration-300 ${activeTab === item.id ? 'scale-110 -translate-y-1' : ''}`}>
                {item.icon(activeTab === item.id)}
              </div>
              <span className={`text-[8px] font-black uppercase tracking-[0.1em] transition-opacity ${activeTab === item.id ? 'text-red-600 opacity-100' : 'text-zinc-700 opacity-60'}`}>
                {item.label}
              </span>
              {activeTab === item.id && (
                <div className="absolute -bottom-2 w-1.5 h-1.5 bg-red-600 rounded-full glow-red"></div>
              )}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
