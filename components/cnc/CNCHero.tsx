
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CNCHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePos({ 
      x: (clientX / window.innerWidth - 0.5) * 20, 
      y: (clientY / window.innerHeight - 0.5) * 20 
    });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-10"
    >
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 blueprint-grid opacity-30 z-0"></div>
      
      {/* Radial Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.15),transparent_70%)] z-0"></div>

      {/* Sparks Particle Effect Simulation */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-orange-500 rounded-full"
            style={{ 
              left: '50%', 
              top: '50%',
            }}
            animate={{ 
              x: (Math.random() - 0.5) * 1000, 
              y: (Math.random() - 0.5) * 1000,
              opacity: [0, 1, 0],
              scale: [0, 2, 0]
            }}
            transition={{ 
              duration: Math.random() * 2 + 1, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 z-20 flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 font-tech text-xs tracking-[0.2em] uppercase mb-6">
              <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse"></span>
              <span>Industry 4.0 Standard</span>
            </div>
            
            <h1 className="text-8xl md:text-9xl font-industrial font-bold mb-4 chrome-text leading-none">
              CNC.mk
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-tech font-semibold text-zinc-400 mb-8 uppercase tracking-wide">
              Precision <span className="text-sky-500">Manufacturing</span> Excellence <br className="hidden md:block"/> in Macedonia
            </h2>

            <p className="font-poppins text-zinc-500 max-w-xl mb-10 leading-relaxed text-lg">
              Unlock the core of Macedonian industry. A premium digital infrastructure for high-precision engineering, CNC services, and automated production.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:justify-start gap-4">
              <button className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-orbitron text-sm font-bold tracking-widest rounded-sm transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:scale-105 active:scale-95 w-full sm:w-auto">
                ENGINEER SUCCESS
              </button>
              <button className="px-8 py-4 border border-zinc-700 hover:border-sky-500/50 text-zinc-400 hover:text-white font-orbitron text-sm font-bold tracking-widest rounded-sm transition-all w-full sm:w-auto">
                TECHNICAL SPECS
              </button>
            </div>
          </motion.div>
        </div>

        {/* 3D-ish Workpiece Visualization */}
        <div className="lg:w-1/2 flex justify-center">
          <motion.div 
            style={{ rotateX: mousePos.y, rotateY: mousePos.x }}
            className="relative w-80 h-80 md:w-[500px] md:h-[500px] perspective-1000 preserve-3d"
          >
            {/* Spinning Metallic Gear / Part Animation using SVG with 3D layers */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-full h-full"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_50px_rgba(14,165,233,0.2)]">
                {/* Outer Ring */}
                <circle cx="50" cy="50" r="45" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.3" />
                
                {/* Gear Teeth */}
                {[...Array(12)].map((_, i) => (
                  <motion.rect
                    key={i}
                    x="47" y="5" width="6" height="10"
                    fill="#334155"
                    style={{ transformOrigin: '50px 50px', transform: `rotate(${i * 30}deg)` }}
                  />
                ))}
                
                {/* Inner Complex Part */}
                <path d="M50 20 L60 35 L55 35 L55 65 L60 65 L50 80 L40 65 L45 65 L45 35 L40 35 Z" fill="url(#metalGradient)" />
                <circle cx="50" cy="50" r="8" fill="#0ea5e9" fillOpacity="0.2" stroke="#0ea5e9" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="4" fill="#0ea5e9" className="animate-pulse" />

                <defs>
                  <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#94a3b8" />
                    <stop offset="50%" stopColor="#cbd5e1" />
                    <stop offset="100%" stopColor="#475569" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Measurement Callouts */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute top-0 right-0 p-4 border-r border-t border-sky-500/30 font-tech text-sky-400 text-xs flex flex-col items-end"
            >
              <span className="font-bold tracking-widest">Ø 500.00mm</span>
              <span className="opacity-60 text-[10px]">TOLERANCE: +/- 0.005</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-0 left-0 p-4 border-l border-b border-orange-500/30 font-tech text-orange-400 text-xs flex flex-col items-start"
            >
              <span className="font-bold tracking-widest">FEED: 1200mm/min</span>
              <span className="opacity-60 text-[10px]">RPM: 18,000</span>
            </motion.div>

            {/* Scrolling G-Code Effect */}
            <div className="absolute top-1/2 left-full ml-12 hidden xl:block w-48 h-64 overflow-hidden border-l border-zinc-800 font-mono text-[10px] text-zinc-600">
               <motion.div
                 animate={{ y: [0, -500] }}
                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                 className="flex flex-col space-y-1 pl-4"
               >
                 {[...Array(100)].map((_, i) => (
                   <span key={i}>
                     G01 X{(Math.random() * 100).toFixed(3)} Y{(Math.random() * 100).toFixed(3)} Z{(Math.random() * -10).toFixed(3)} F1200
                   </span>
                 ))}
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CNCHero;
