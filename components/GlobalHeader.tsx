
import React from 'react';
import { motion } from 'framer-motion';

interface GlobalHeaderProps {
  currentPage: 'mudrosti' | 'pcela' | 'cnc' | 'sapphires' | 'tesla' | 'makai';
  onNavigate: (page: 'mudrosti' | 'pcela' | 'cnc' | 'sapphires' | 'tesla' | 'makai') => void;
}

const GlobalHeader: React.FC<GlobalHeaderProps> = ({ currentPage, onNavigate }) => {
  return (
    <div className="fixed top-0 left-0 right-0 h-10 bg-slate-950 border-b border-white/5 z-[100] flex items-center shadow-2xl">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-400 uppercase">Our Portfolio</span>
          <div className="h-4 w-[1px] bg-white/10"></div>
          <nav className="flex space-x-6 overflow-x-auto no-scrollbar whitespace-nowrap">
            <button 
              onClick={() => onNavigate('mudrosti')}
              className={`text-[11px] font-bold flex items-center space-x-1 transition-colors ${currentPage === 'mudrosti' ? 'text-amber-500' : 'text-white/50 hover:text-white'}`}
            >
              {currentPage === 'mudrosti' && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2 shadow-[0_0_8px_#f59e0b]"></span>}
              MUDROSTI.MK
            </button>
            <button 
              onClick={() => onNavigate('pcela')}
              className={`text-[11px] font-bold flex items-center space-x-1 transition-colors ${currentPage === 'pcela' ? 'text-yellow-400' : 'text-white/50 hover:text-white'}`}
            >
              {currentPage === 'pcela' && <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2 shadow-[0_0_8px_#fbbf24]"></span>}
              PCELA.ORG
            </button>
            <button 
              onClick={() => onNavigate('cnc')}
              className={`text-[11px] font-bold flex items-center space-x-1 transition-colors ${currentPage === 'cnc' ? 'text-sky-400' : 'text-white/50 hover:text-white'}`}
            >
              {currentPage === 'cnc' && <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mr-2 shadow-[0_0_8px_#0ea5e9]"></span>}
              CNC.MK
            </button>
            <button 
              onClick={() => onNavigate('sapphires')}
              className={`text-[11px] font-bold flex items-center space-x-1 transition-colors ${currentPage === 'sapphires' ? 'text-rose-400' : 'text-white/50 hover:text-white'}`}
            >
              {currentPage === 'sapphires' && <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mr-2 shadow-[0_0_8px_#fb7185]"></span>}
              SAPPHIRES.MK
            </button>
            <button 
              onClick={() => onNavigate('tesla')}
              className={`text-[11px] font-bold flex items-center space-x-1 transition-colors ${currentPage === 'tesla' ? 'text-cyan-400' : 'text-white/50 hover:text-white'}`}
            >
              {currentPage === 'tesla' && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2 shadow-[0_0_8px_#06b6d4]"></span>}
              TESLA.MK
            </button>
            <button 
              onClick={() => onNavigate('makai')}
              className={`text-[11px] font-bold flex items-center space-x-1 transition-colors ${currentPage === 'makai' ? 'text-purple-400' : 'text-white/50 hover:text-white'}`}
            >
              {currentPage === 'makai' && <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2 shadow-[0_0_8px_#7c3aed]"></span>}
              MAKAI.MK
            </button>
          </nav>
        </div>
        <div className="hidden lg:block">
          <span className="text-[10px] text-white/40 font-medium tracking-wider uppercase">Premium Digital Assets Network</span>
        </div>
      </div>
    </div>
  );
};

export default GlobalHeader;
