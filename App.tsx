
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import UseCases from './components/UseCases';
import DomainValue from './components/DomainValue';
import InteractiveWisdom from './components/InteractiveWisdom';
import ScrollBook from './components/ScrollBook';
import KnowledgeTree from './components/KnowledgeTree';
import ContactCTA from './components/ContactCTA';
import Header from './components/Header';
import GlobalHeader from './components/GlobalHeader';

// Pcela Components
import PcelaHero from './components/pcela/PcelaHero';
import PcelaUseCases from './components/pcela/PcelaUseCases';
import PcelaDomainStrength from './components/pcela/PcelaDomainStrength';
import PcelaInfographic from './components/pcela/PcelaInfographic';
import PcelaContact from './components/pcela/PcelaContact';

// CNC Components
import CNCHero from './components/cnc/CNCHero';
import CNCUseCases from './components/cnc/CNCUseCases';
import CNCFeatures from './components/cnc/CNCFeatures';
import CNCStats from './components/cnc/CNCStats';
import CNCContact from './components/cnc/CNCContact';

// Sapphire Components
import SapphireHero from './components/sapphires/SapphireHero';
import SapphireHeritage from './components/sapphires/SapphireHeritage';
import SapphireViewer from './components/sapphires/SapphireViewer';
import SapphireEducate from './components/sapphires/SapphireEducate';
import SapphireCatalog from './components/sapphires/SapphireCatalog';
import SapphireContact from './components/sapphires/SapphireContact';

// Tesla Components
import TeslaHero from './components/tesla/TeslaHero';
import TeslaStats from './components/tesla/TeslaStats';
import TeslaUseCases from './components/tesla/TeslaUseCases';
import TeslaFeatures from './components/tesla/TeslaFeatures';
import TeslaContact from './components/tesla/TeslaContact';

// MakAI Components
import MakAIHero from './components/makai/MakAIHero';
import MakAIUseCases from './components/makai/MakAIUseCases';
import MakAIDomainPower from './components/makai/MakAIDomainPower';
import MakAIEcosystem from './components/makai/MakAIEcosystem';
import MakAITechShowcase from './components/makai/MakAITechShowcase';
import MakAIStats from './components/makai/MakAIStats';
import MakAIContact from './components/makai/MakAIContact';

type Page = 'mudrosti' | 'pcela' | 'cnc' | 'sapphires' | 'tesla' | 'makai';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('mudrosti');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="relative min-h-screen">
      <GlobalHeader currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {currentPage === 'mudrosti' ? (
        <>
          <Header />
          <main>
            <Hero />
            <DomainValue />
            <ScrollBook />
            <UseCases />
            <KnowledgeTree />
            <InteractiveWisdom />
            <ContactCTA />
          </main>
          <footer className="bg-indigo-950 py-12 border-t border-indigo-900/50">
            <div className="container mx-auto px-6 text-center">
              <p className="text-indigo-300/60 font-light">
                © {new Date().getFullYear()} Mudrosti.mk. Сите права се задржани.
              </p>
            </div>
          </footer>
        </>
      ) : currentPage === 'pcela' ? (
        <div className="bg-[#fffbeb]">
          <main>
            <PcelaHero />
            <PcelaDomainStrength />
            <PcelaUseCases />
            <PcelaInfographic />
            <PcelaContact />
          </main>
          <footer className="bg-amber-900 py-12 text-amber-50">
            <div className="container mx-auto px-6 text-center">
              <p className="font-poppins text-sm opacity-60 uppercase tracking-widest">
                © {new Date().getFullYear()} Pcela.org. Harnessing the Power of Nature.
              </p>
            </div>
          </footer>
        </div>
      ) : currentPage === 'cnc' ? (
        <div className="bg-[#0a0a0a]">
          <main>
            <CNCHero />
            <CNCStats />
            <CNCUseCases />
            <CNCFeatures />
            <CNCContact />
          </main>
          <footer className="bg-zinc-950 py-12 border-t border-zinc-900">
            <div className="container mx-auto px-6 text-center">
              <p className="font-tech text-xs text-zinc-600 uppercase tracking-widest">
                © {new Date().getFullYear()} CNC.mk | Engineering the Future of Macedonian Industry
              </p>
            </div>
          </footer>
        </div>
      ) : currentPage === 'tesla' ? (
        <div className="bg-[#000000]">
          <main>
            <TeslaHero />
            <TeslaStats />
            <TeslaUseCases />
            <TeslaFeatures />
            <TeslaContact />
          </main>
          <footer className="bg-black py-12 border-t border-zinc-900 text-center">
            <div className="container mx-auto px-6">
              <p className="font-outfit text-xs text-zinc-600 uppercase tracking-widest">
                © {new Date().getFullYear()} Tesla.mk | Powering Macedonia's Innovation Hub
              </p>
            </div>
          </footer>
        </div>
      ) : currentPage === 'makai' ? (
        <div className="bg-[#0f172a]">
          <main>
            <MakAIHero />
            <MakAIStats />
            <MakAIUseCases />
            <MakAIDomainPower />
            <MakAIEcosystem />
            <MakAITechShowcase />
            <MakAIContact />
          </main>
          <footer className="bg-[#020617] py-12 border-t border-white/5 text-center">
            <div className="container mx-auto px-6">
              <p className="font-space text-[10px] text-slate-500 uppercase tracking-widest">
                © {new Date().getFullYear()} MakAI.mk | Leading Macedonia's AI Transformation
              </p>
            </div>
          </footer>
        </div>
      ) : (
        <div className="bg-[#0c0a09]">
          <main>
            <SapphireHero />
            <SapphireHeritage />
            <SapphireViewer />
            <SapphireEducate />
            <SapphireCatalog />
            <SapphireContact />
          </main>
          <footer className="bg-[#4c0519] py-12 border-t border-amber-900/10 text-center">
            <div className="container mx-auto px-6">
              <p className="font-luxury text-amber-500/60 tracking-widest uppercase text-[10px]">
                © {new Date().getFullYear()} Sapphires.mk | Authentic Macedonian Pink Corundum
              </p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
