
import React from 'react';
import { motion } from 'framer-motion';

const MakAIEcosystem: React.FC = () => {
  return (
    <section className="py-24 bg-[#0f172a] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
             <div className="blueprint-grid absolute inset-0 opacity-10"></div>
             {/* Macedonia Map SVG Visualization */}
             <svg viewBox="0 0 800 500" className="w-full h-auto text-slate-700">
                <motion.path 
                  d="M100 200 L200 100 L400 120 L600 80 L700 250 L650 400 L400 450 L150 420 L100 200 Z" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />
                {/* Skopje Node */}
                <motion.circle cx="350" cy="150" r="8" fill="#7c3aed" initial={{ scale: 0 }} whileInView={{ scale: 1 }}>
                   <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                </motion.circle>
                <text x="370" y="155" fill="white" className="text-xs font-mono">Skopje Hub</text>

                {/* Bitola Node */}
                <motion.circle cx="300" cy="400" r="5" fill="#06b6d4" initial={{ scale: 0 }} whileInView={{ scale: 1 }} />
                <text x="315" y="405" fill="white" className="text-[10px] font-mono">Bitola Tech</text>

                {/* Prilep Node */}
                <motion.circle cx="450" cy="350" r="5" fill="#ec4899" initial={{ scale: 0 }} whileInView={{ scale: 1 }} />
                <text x="465" y="355" fill="white" className="text-[10px] font-mono">Prilep Industry</text>
             </svg>
          </div>

          <div className="lg:w-1/2">
             <h4 className="font-mono text-purple-500 text-xs font-bold uppercase tracking-[0.4em] mb-4">Strategic Geography</h4>
             <h2 className="text-5xl font-space font-bold text-white mb-8 tracking-tighter">
                Leading the <span className="ai-glow-text">Balkan AI Corridor</span>
             </h2>
             <p className="font-space text-slate-400 text-lg leading-relaxed mb-10">
                Position Macedonia as the central AI innovation engine of the Balkans. With our growing tech sector and proximity to major EU markets, MakAI.mk is the perfect vehicle for regional dominance.
             </p>

             <div className="grid grid-cols-2 gap-10">
                <div>
                   <h5 className="text-3xl font-space font-bold text-white mb-2">#1</h5>
                   <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Digital Growth Index</p>
                </div>
                <div>
                   <h5 className="text-3xl font-space font-bold text-white mb-2">Tier 2</h5>
                   <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">EU Innovation Partner</p>
                </div>
                <div>
                   <h5 className="text-3xl font-space font-bold text-white mb-2">95%</h5>
                   <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">STEM Graduate Growth</p>
                </div>
                <div>
                   <h5 className="text-3xl font-space font-bold text-white mb-2">Top 10</h5>
                   <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Regional Tech Potential</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakAIEcosystem;
