
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GlobalHeader from './components/GlobalHeader';

// Mudrosti Components
import Hero from './components/Hero';
import UseCases from './components/UseCases';
import DomainValue from './components/DomainValue';
import InteractiveWisdom from './components/InteractiveWisdom';
import ScrollBook from './components/ScrollBook';
import KnowledgeTree from './components/KnowledgeTree';
import ContactCTA from './components/ContactCTA';
import Header from './components/Header';

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

type Page = 'marketplace' | 'mudrosti' | 'pcela' | 'cnc' | 'sapphires' | 'tesla' | 'makai';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('marketplace');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const domains = [
    {
      id: 'mudrosti',
      name: 'Mudrosti.mk',
      desc: 'Premium Knowledge & Wisdom Portal',
      color: 'bg-amber-500',
      textColor: 'text-amber-500',
      gradient: 'from-violet-900 to-indigo-950',
      icon: '🦉'
    },
    {
      id: 'pcela',
      name: 'Pcela.org',
      desc: 'Global Beekeeping & Honey Authority',
      color: 'bg-yellow-400',
      textColor: 'text-yellow-400',
      gradient: 'from-yellow-400 to-amber-600',
      icon: '🐝'
    },
    {
      id: 'cnc',
      name: 'CNC.mk',
      desc: 'Precision Manufacturing Industry 4.0',
      color: 'bg-sky-500',
      textColor: 'text-sky-500',
      gradient: 'from-zinc-900 to-black',
      icon: '⚙️'
    },
    {
      id: 'sapphires',
      name: 'Sapphires.mk',
      desc: 'Macedonian Pink Corundum & Gems',
      color: 'bg-rose-500',
      textColor: 'text-rose-500',
      gradient: 'from-rose-900 to-black',
      icon: '💎'
    },
    {
      id: 'tesla',
      name: 'Tesla.mk',
      desc: 'Electric Future & Innovation Hub',
      color: 'bg-cyan-400',
      textColor: 'text-cyan-400',
      gradient: 'from-cyan-900 to-black',
      icon: '⚡'
    },
    {
      id: 'makai',
      name: 'MakAI.mk',
      desc: 'National Artificial Intelligence Platform',
      color: 'bg-purple-500',
      textColor: 'text-purple-500',
      gradient: 'from-purple-900 to-slate-900',
      icon: '🧠'
    }
  ];

  const renderMarketplace = () => (
    <div className="min-h-screen bg-[#0f172a] text-white pt-20 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-widest uppercase mb-6"
          >
            Premium Digital Assets Network
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Select Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Domain</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Explore our curated collection of high-value, industry-specific domains ready for acquisition and development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setCurrentPage(domain.id as Page)}
              className={`relative overflow-hidden rounded-3xl cursor-pointer group border border-white/5 bg-slate-900/50 backdrop-blur-sm hover:border-white/20 transition-all duration-500`}
            >
              {/* Card Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${domain.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 p-10 h-full flex flex-col items-center text-center">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">
                  {domain.icon}
                </div>
                <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                  {domain.name}
                </h3>
                <p className="text-slate-400 text-sm font-medium mb-8 group-hover:text-slate-300 transition-colors">
                  {domain.desc}
                </p>
                
                <div className="mt-auto">
                  <span className={`inline-flex items-center text-xs font-bold uppercase tracking-widest ${domain.textColor} border border-current px-6 py-3 rounded-full group-hover:bg-white/10 transition-all`}>
                    View Asset
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center border-t border-white/5 pt-12">
            <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Premium Domain Network. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen">
      {currentPage !== 'marketplace' && (
        <GlobalHeader 
          currentPage={currentPage} 
          onNavigate={(page) => setCurrentPage(page)} 
        />
      )}
      
      {currentPage === 'marketplace' && renderMarketplace()}
      
      {currentPage === 'mudrosti' && (
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
              <button onClick={() => setCurrentPage('marketplace')} className="mt-4 text-xs text-amber-500 hover:text-white transition-colors uppercase tracking-widest">
                Back to Marketplace
              </button>
            </div>
          </footer>
        </>
      )}

      {currentPage === 'pcela' && (
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
              <button onClick={() => setCurrentPage('marketplace')} className="mt-4 text-xs text-yellow-400 hover:text-white transition-colors uppercase tracking-widest">
                Back to Marketplace
              </button>
            </div>
          </footer>
        </div>
      )}

      {currentPage === 'cnc' && (
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
              <button onClick={() => setCurrentPage('marketplace')} className="mt-4 text-xs text-sky-500 hover:text-white transition-colors uppercase tracking-widest">
                Back to Marketplace
              </button>
            </div>
          </footer>
        </div>
      )}

      {currentPage === 'tesla' && (
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
              <button onClick={() => setCurrentPage('marketplace')} className="mt-4 text-xs text-cyan-500 hover:text-white transition-colors uppercase tracking-widest">
                Back to Marketplace
              </button>
            </div>
          </footer>
        </div>
      )}

      {currentPage === 'makai' && (
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
              <div className="mt-6 flex justify-center space-x-6">
                 <a href="#" className="text-slate-600 hover:text-cyan-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                 </a>
                 <a href="#" className="text-slate-600 hover:text-cyan-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                 </a>
              </div>
              <button onClick={() => setCurrentPage('marketplace')} className="mt-6 text-xs text-purple-500 hover:text-white transition-colors uppercase tracking-widest">
                Back to Marketplace
              </button>
            </div>
          </footer>
        </div>
      )}

      {currentPage === 'sapphires' && (
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
              <button onClick={() => setCurrentPage('marketplace')} className="mt-4 text-xs text-rose-400 hover:text-white transition-colors uppercase tracking-widest">
                Back to Marketplace
              </button>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
