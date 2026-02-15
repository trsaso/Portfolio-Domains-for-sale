
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-950 pt-32 md:pt-40">
      {/* Background Neural Network Animation Simulation */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <motion.path
            d="M 100 200 Q 300 100 500 200 T 900 200"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="0.5"
            animate={{ d: ["M 100 200 Q 300 100 500 200 T 900 200", "M 100 250 Q 350 150 550 250 T 900 250", "M 100 200 Q 300 100 500 200 T 900 200"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="300" cy="150" r="2" fill="#f59e0b"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.circle
            cx="700" cy="200" r="2" fill="#f59e0b"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 4, delay: 1, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-amber-400/20 rounded-full pointer-events-none"
          style={{
            width: Math.random() * 8 + 2,
            height: Math.random() * 8 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.5, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Floating Manuscript Pages */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`page-${i}`}
            className="absolute bg-amber-50/10 border border-amber-200/20 rounded shadow-2xl p-4 w-32 h-44 backdrop-blur-sm"
            initial={{ 
              x: i % 2 === 0 ? -200 : 1200, 
              y: Math.random() * 600, 
              rotate: Math.random() * 45 
            }}
            animate={{ 
              y: [null, Math.random() * 500 + 100], 
              rotate: [null, Math.random() * 360],
              x: i % 2 === 0 ? 1200 : -200
            }}
            transition={{ 
              duration: 25 + i * 5, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
             <div className="w-full h-1 bg-amber-200/20 mb-2"></div>
             <div className="w-3/4 h-1 bg-amber-200/20 mb-2"></div>
             <div className="w-full h-1 bg-amber-200/20 mb-2"></div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-12 flex justify-center"
        >
          {/* Animated Owl/Wisdom Icon */}
          <div className="relative group">
            <div className="absolute inset-0 bg-amber-500/20 blur-3xl group-hover:bg-amber-500/40 transition-all rounded-full scale-150"></div>
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative drop-shadow-[0_0_20px_rgba(245,158,11,0.6)]">
              <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" fill="#f59e0b" className="opacity-80"/>
              <circle cx="12" cy="11" r="3" fill="#f8fafc" fillOpacity="0.2"/>
              <path d="M12 7V13M12 7L10 9M12 7L14 9" stroke="#f59e0b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-6xl md:text-8xl font-serif font-bold text-white mb-6 glow-text"
        >
          Mudrosti<span className="text-amber-500">.mk</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xl md:text-3xl text-indigo-100 font-light tracking-wide max-w-2xl mx-auto mb-10"
        >
          Портал за Знаење и Мудрост
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-amber-500 text-indigo-950 text-lg font-bold rounded-full shadow-lg hover:bg-amber-400 hover:scale-105 transition-all w-full md:w-auto"
          >
            Стекнете го овој домен
          </a>
          <a
            href="#vision"
            className="px-8 py-4 border border-indigo-400/50 text-indigo-100 text-lg font-medium rounded-full hover:bg-white/5 transition-all w-full md:w-auto"
          >
            Дознајте Повеќе
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
