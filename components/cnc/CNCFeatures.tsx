
import React from 'react';
import { motion } from 'framer-motion';

const CNCFeatures: React.FC = () => {
  return (
    <section className="py-24 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="blueprint-grid absolute inset-0 opacity-20"></div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 p-4 border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm rounded-sm"
            >
              {/* SVG Technical Drawing Simulation */}
              <svg viewBox="0 0 400 300" className="w-full h-auto text-sky-500/50">
                <rect x="50" y="50" width="300" height="200" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="200" cy="150" r="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
                <motion.path 
                  d="M50 150 L350 150 M200 50 L200 250" 
                  stroke="currentColor" 
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />
                <motion.circle 
                  cx="200" cy="150" r="10" 
                  fill="#f97316" 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Dimensions */}
                <text x="200" y="40" textAnchor="middle" fill="#0ea5e9" className="text-[10px] font-tech">W: 400.00mm</text>
                <text x="20" y="150" transform="rotate(-90 20 150)" textAnchor="middle" fill="#0ea5e9" className="text-[10px] font-tech">H: 300.00mm</text>
              </svg>
            </motion.div>
            
            {/* Callout box */}
            <div className="absolute -bottom-8 -right-8 p-6 bg-zinc-900 border border-sky-500/40 shadow-2xl">
              <h4 className="font-orbitron font-bold text-xs text-sky-500 mb-1 uppercase tracking-widest">ISO 9001:2015</h4>
              <p className="text-[10px] text-zinc-500 font-tech">Quality Management System Certified Asset</p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-xs font-orbitron font-bold text-orange-500 uppercase tracking-[0.3em] mb-4">Strategic Location</h3>
            <h2 className="text-4xl md:text-5xl font-industrial font-bold text-white mb-6 uppercase tracking-tight">
              Macedonia's Industrial <br className="hidden md:block"/> <span className="text-sky-500">Digital Gateway</span>
            </h2>
            
            <p className="font-poppins text-zinc-400 mb-8 text-lg leading-relaxed">
              With the expansion of <strong>Technological Industrial Development Zones (TIZ)</strong> across Macedonia, the need for a central CNC authority is critical. Secure the primary digital entry point for the Balkan manufacturing corridor.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <span className="text-3xl font-industrial font-bold text-white">45%</span>
                <p className="text-xs text-zinc-500 font-tech uppercase tracking-widest">Export Growth in Precision Parts</p>
              </div>
              <div className="space-y-2">
                <span className="text-3xl font-industrial font-bold text-white">Tier 1</span>
                <p className="text-xs text-zinc-500 font-tech uppercase tracking-widest">Global Supply Chain Position</p>
              </div>
            </div>

            <div className="mt-12 flex items-center space-x-4">
               <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-500">
                     M{i}
                   </div>
                 ))}
               </div>
               <p className="text-xs text-zinc-500 font-tech italic">Trusted by 50+ local manufacturing enterprises</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CNCFeatures;
