
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const MakAIHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a] pt-10 scanline">
      {/* Animated Circuit Background */}
      <div className="absolute inset-0 circuit-bg opacity-20"></div>

      {/* Pulsing Neural Nodes Visual */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-purple-500/30 blur-[60px] rounded-full"
            style={{ 
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Data Streams */}
      <div className="absolute inset-0 z-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `-10%`
            }}
            animate={{ 
              top: ['-10%', '110%'],
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-[10px] tracking-[0.4em] uppercase mb-8 shadow-[0_0_20px_rgba(124,58,237,0.2)]">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping"></span>
            <span>National AI Strategic Asset</span>
          </div>

          <h1 className="text-8xl md:text-[10rem] font-space font-bold tracking-tighter mb-4 leading-none">
            <span className="text-white">Mak</span><span className="ai-glow-text">AI.mk</span>
          </h1>
          
          <h2 className="text-xl md:text-3xl font-mono text-cyan-400/70 mb-12 uppercase tracking-[0.3em]">
            Macedonia's <span className="text-white font-bold">Artificial Intelligence</span> Revolution
          </h2>

          <div className="relative max-w-4xl mx-auto mb-16">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-space text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
            >
              The definitive digital foundation for the Balkan AI corridor. An ultra-premium asset ready for national research, governmental initiatives, or industry-leading ML platforms.
            </motion.p>

            {/* Neural Pathway Mockup SVG */}
            <div className="hidden lg:block absolute -left-32 top-0 opacity-20">
               <svg width="200" height="200" viewBox="0 0 100 100">
                  <motion.path 
                    d="M 10 50 Q 30 10 50 50 T 90 50" 
                    fill="none" 
                    stroke="#06b6d4" 
                    strokeWidth="0.5" 
                    animate={{ strokeDashoffset: [0, 100] }}
                    strokeDasharray="5 5"
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  <circle cx="10" cy="50" r="2" fill="#7c3aed" />
                  <circle cx="50" cy="50" r="2" fill="#ec4899" />
                  <circle cx="90" cy="50" r="2" fill="#06b6d4" />
               </svg>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-space font-bold text-sm tracking-widest rounded-sm overflow-hidden transition-all shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] active:scale-95">
              <span className="relative z-10">ACQUIRE THIS DOMAIN</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </button>
            <button className="px-12 py-5 border border-slate-700 text-slate-400 font-space font-bold text-sm tracking-widest rounded-sm hover:text-white hover:border-cyan-500/50 transition-all backdrop-blur-md">
              EXPLORE POTENTIAL
            </button>
          </div>
        </motion.div>
      </div>

      {/* Animated Matrix Background Overlay (Subtle) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f172a] to-transparent z-10"></div>
    </section>
  );
};

export default MakAIHero;
