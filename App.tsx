
import React, { useState, useEffect } from 'react';
import IntroScreen from './components/IntroScreen.tsx';
import LandingPage from './components/LandingPage.tsx';
import Dashboard from './components/Dashboard.tsx';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<'landing' | 'system'>('landing');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6800); // Ajustado para terminar após a nova intro (6.5s + respiro)
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <IntroScreen />;

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-red-600 selection:text-white">
      {view === 'landing' ? (
        <LandingPage onAccessSystem={() => setView('system')} />
      ) : (
        <Dashboard onBack={() => setView('landing')} />
      )}
    </div>
  );
};

export default App;
