
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const PcelaHero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const beeX = useSpring(mouseX, springConfig);
  const beeY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 40);
      mouseY.set(e.clientY - 40);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-400 via-amber-500 to-amber-600 pt-10">
      {/* Hexagonal Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg width="60" height="104" viewBox="0 0 60 104" xmlns="http://www.w3.org/2000/svg"><path d="M30 0l30 17.32v34.64L30 69.28 0 51.96V17.32z" fill="none" stroke="white" stroke-width="1"/></svg>')`, backgroundSize: '60px 104px' }}>
      </div>

      {/* Interactive Bee */}
      <motion.div
        style={{ x: beeX, y: beeY }}
        className="fixed z-50 pointer-events-none hidden lg:block"
      >
        <svg width="80" height="80" viewBox="0 0 100 100">
          <motion.path 
            d="M50 30 Q70 20 80 50 Q70 80 50 70 Q30 80 20 50 Q30 20 50 30" 
            fill="#333" 
            animate={{ scale: [1, 1.05, 1] }} 
            transition={{ duration: 0.2, repeat: Infinity }}
          />
          <motion.path 
            d="M30 40 Q40 10 70 40" 
            fill="white" opacity="0.4"
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ duration: 0.1, repeat: Infinity }}
          />
          <motion.path 
            d="M70 40 Q60 10 30 40" 
            fill="white" opacity="0.4"
            animate={{ rotate: [10, -10, 10] }}
            transition={{ duration: 0.1, repeat: Infinity }}
          />
          <circle cx="40" cy="45" r="2" fill="white" />
          <circle cx="60" cy="45" r="2" fill="white" />
          <path d="M40 55 Q50 60 60 55" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </motion.div>

      {/* Dripping Honey Effects */}
      <div className="absolute top-0 left-10 honey-drip" style={{ height: '100px', animationDelay: '0.5s' }}></div>
      <div className="absolute top-0 right-24 honey-drip" style={{ height: '150px', animationDelay: '2s' }}></div>
      <div className="absolute top-0 left-1/3 honey-drip" style={{ height: '80px', animationDelay: '4s' }}></div>

      {/* Floating Leaves */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-green-500/30 text-6xl pointer-events-none"
          initial={{ y: -100, x: Math.random() * 1000, rotate: 0 }}
          animate={{ y: 1200, x: (Math.random() - 0.5) * 400 + 500, rotate: 360 }}
          transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
        >
          🍃
        </motion.div>
      ))}

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mb-8 inline-block"
        >
          <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-2xl">
            <span className="text-5xl">🐝</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-7xl md:text-9xl font-organic font-bold text-white mb-6 drop-shadow-lg"
        >
          Pcela<span className="text-amber-900">.org</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl md:text-3xl font-poppins text-white/90 font-light max-w-3xl mx-auto mb-12"
        >
          Sweet Success Starts Here <br className="hidden md:block"/>
          <span className="font-bold text-amber-900/60">Beekeeping & Honey Excellence</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="group relative px-10 py-5 bg-green-500 text-white font-poppins font-bold text-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-green-500/20 transition-all active:scale-95">
            <span className="relative z-10">Harvest This Domain</span>
            <motion.div 
              className="absolute top-0 left-0 w-full h-1 bg-white/30"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </button>
          <button className="px-10 py-5 border-2 border-white/50 text-white font-poppins font-bold text-lg rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Flower Bloom Animations */}
      <div className="absolute -bottom-10 left-10">
        <motion.div 
          animate={{ scale: [0.8, 1, 0.8], rotate: [0, 10, 0] }} 
          transition={{ duration: 5, repeat: Infinity }}
          className="text-8xl"
        >🌸</motion.div>
      </div>
      <div className="absolute -bottom-10 right-10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }} 
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="text-8xl"
        >🌻</motion.div>
      </div>
    </section>
  );
};

export default PcelaHero;
