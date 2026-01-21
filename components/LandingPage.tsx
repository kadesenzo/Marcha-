
import React from 'react';
import Header from './Header.tsx';
import Hero from './Hero.tsx';
import HowItWorks from './HowItWorks.tsx';
import TargetAudience from './TargetAudience.tsx';
import SupportSystem from './SupportSystem.tsx';
import Community from './Community.tsx';
import SocialProof from './SocialProof.tsx';
import Footer from './Footer.tsx';

interface LandingPageProps {
  onAccessSystem: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onAccessSystem }) => {
  return (
    <div className="opacity-0 animate-[fadeIn_1s_ease-in_forwards]">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
      <Header onAccessSystem={onAccessSystem} />
      <main>
        <Hero onAccessSystem={onAccessSystem} />
        <HowItWorks />
        <TargetAudience />
        <SupportSystem />
        <Community />
        <SocialProof />
      </main>
      <Footer onAccessSystem={onAccessSystem} />
    </div>
  );
};

export default LandingPage;
