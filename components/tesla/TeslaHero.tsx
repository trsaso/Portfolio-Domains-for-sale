
import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TeslaHero: React.FC = () => {
  const [lightning, setLightning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLightning(true);
      setTimeout(() => setLightning(false), 150);
    }, Math.random() * 5000 + 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Re-formatting section and ensuring all children are correctly nested
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#000a1a] to-[#0c4a6e] pt-10">
      {/* Circuit Background Animation */}
      <div className="absolute inset-0 circuit-bg opacity-30"></div>

      {/* Lightning Overlay */}
      <AnimatePresence>
        {lightning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 pointer-events-none bg-blue-500/5"
          >
            <svg className="w-full h-full text-blue-400 opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                d="M 50 0 L 48 20 L 52 40 L 45 60 L 55 80 L 50 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Energy Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%` 
            }}
            animate={{ 
              y: [0, -100, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{ 
              duration: Math.random() * 4 + 4, 
              repeat: Infinity,
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-space text-[10px] tracking-[0.3em] uppercase mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]"></span>
            <span>Next-Gen Innovation</span>
          </div>

          <h1 className="text-8xl md:text-[10rem] font-outfit font-extralight tracking-tighter mb-4 electric-text leading-none">
            Tesla<span className="font-black text-cyan-500">.mk</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-space font-light text-blue-200/60 mb-12 uppercase tracking-[0.2em]">
            Electrify <span className="text-white font-bold">Macedonia's</span> Future
          </h2>

          {/* Futuristic Car Silhouette Mockup */}
          <div className="relative max-w-4xl mx-auto mb-16 px-6">
            <motion.div
              animate={{ filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative aspect-[21/9] flex items-center justify-center"
            >
               {/* Abstract Energy Car Silhouette */}
               <svg viewBox="0 0 800 300" className="w-full h-full drop-shadow-[0_0_50px_rgba(34,211,238,0.2)]">
                  <motion.path 
                    d="M 100 200 L 200 180 Q 400 150 600 180 L 700 200 Q 600 250 400 250 Q 200 250 100 200 Z" 
                    fill="none" 
                    stroke="#22d3ee" 
                    strokeWidth="0.5"
                    animate={{ strokeDashoffset: [0, 100] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    strokeDasharray="10 5"
                  />
                  <path 
                    d="M 150 200 L 650 200" 
                    stroke="#8b5cf6" 
                    strokeWidth="2" 
                    strokeOpacity="0.4"
                    className="blur-sm"
                  />
                  {/* Wheel Glows */}
                  <circle cx="250" cy="220" r="25" fill="none" stroke="#22d3ee" strokeWidth="1" />
                  <circle cx="550" cy="220" r="25" fill="none" stroke="#22d3ee" strokeWidth="1" />
               </svg>
               {/* Neon Ground Underglow */}
               <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-1 bg-cyan-400 blur-2xl opacity-40"></div>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative px-10 py-5 bg-white text-black font-space font-bold text-sm tracking-widest rounded-sm overflow-hidden transition-all hover:bg-cyan-500 hover:text-white active:scale-95">
              <span className="relative z-10">CHARGE YOUR VISION</span>
              <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform"></div>
            </button>
            <button className="px-10 py-5 border border-white/20 text-white font-space font-bold text-sm tracking-widest rounded-sm hover:bg-white/5 transition-all backdrop-blur-sm">
              EXPLORE TECH
            </button>
          </div>
        </motion.div>
      </div>

      {/* Battery Status Indicator - fixed potential tag balancing issues */}
      <div className="absolute bottom-10 right-10 flex items-center space-x-4 opacity-40 group hover:opacity-100 transition-opacity">
        <div className="text-right">
          <p className="text-[10px] font-space text-white/40 uppercase">Global Energy</p>
          <p className="text-sm font-outfit text-white">98% OPTIMIZED</p>
        </div>
        <div className="w-12 h-6 border-2 border-white/40 p-0.5 rounded-sm relative">
           <div className="w-full h-full bg-cyan-500 animate-pulse"></div>
           <div className="absolute -right-1.5 top-1.5 w-1 h-3 bg-white/40 rounded-r-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default TeslaHero;
