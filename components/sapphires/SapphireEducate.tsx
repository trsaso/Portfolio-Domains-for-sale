
import React from 'react';
import { motion } from 'framer-motion';

const Cs = [
  { name: "Color", desc: "The unique 'Raspberry Pink' signature of the Prilep corundum.", icon: "🎨" },
  { name: "Clarity", desc: "Crystal clear windows into the soul of Macedonian earth.", icon: "✨" },
  { name: "Cut", desc: "Crafted to maximize the natural pink fluorescence.", icon: "💎" },
  { name: "Carat", desc: "Rare findings from delicate 1ct to significant investment stones.", icon: "⚖️" }
];

const SapphireEducate: React.FC = () => {
  return (
    <section className="py-24 bg-[#0c0a09] border-t border-rose-900/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-serif font-bold text-white mb-8">The Macedonian <span className="gold-foil">Ruby</span></h2>
            <p className="font-luxury text-xl text-rose-100/40 mb-12">
              Our grading system respects the unique mineral composition of Balkan corundum. We value saturation, the raspberry hue, and the historic connection to the Macedonian land.
            </p>
            
            <div className="space-y-6">
              {Cs.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center gap-6 p-6 border border-rose-500/5 hover:border-rose-500/20 bg-white/[0.01] transition-all"
                >
                  <div className="text-4xl grayscale group-hover:grayscale-0 transition-all">{c.icon}</div>
                  <div>
                    <h5 className="font-luxury font-bold text-rose-400 uppercase tracking-widest mb-1">{c.name}</h5>
                    <p className="text-sm text-rose-100/30 font-poppins">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
             {/* Abstract Prismatic Visual */}
             <div className="relative aspect-square max-w-lg mx-auto overflow-hidden border border-rose-500/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-rose-900 via-transparent to-amber-900/20"></div>
                <motion.div 
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center opacity-20"
                >
                  <svg width="400" height="400" viewBox="0 0 100 100">
                    <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="#be123c" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#be123c" strokeWidth="0.5" strokeDasharray="1 3" />
                  </svg>
                </motion.div>
                
                <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                  <div className="space-y-4">
                    <p className="font-serif italic text-4xl text-white">Balkan Raspberry Fire</p>
                    <p className="font-luxury text-rose-500 tracking-widest text-xs uppercase">Natural Fluorescence</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SapphireEducate;
