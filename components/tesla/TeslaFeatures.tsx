
import React from 'react';
import { motion } from 'framer-motion';

const TeslaFeatures: React.FC = () => {
  return (
    <section className="py-24 bg-[#000a1a] relative border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            {/* Holographic UI Simulation */}
            <motion.div
              initial={{ opacity: 0, rotateY: 20 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              className="relative z-10 p-8 border border-cyan-500/30 bg-black/40 backdrop-blur-xl rounded-2xl shadow-[0_0_50px_rgba(34,211,238,0.1)]"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="text-[10px] font-space text-cyan-500 uppercase tracking-widest">System Diagnostics V4.2</div>
              </div>

              <div className="space-y-6">
                 <div>
                    <div className="flex justify-between text-[10px] font-space text-white/40 mb-2 uppercase">Storage Efficiency</div>
                    <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: "94%" }}
                         transition={{ duration: 2, delay: 0.5 }}
                         className="h-full bg-cyan-500 shadow-[0_0_10px_#22d3ee]"
                       ></motion.div>
                    </div>
                 </div>
                 <div>
                    <div className="flex justify-between text-[10px] font-space text-white/40 mb-2 uppercase">Core Temperature</div>
                    <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: "65%" }}
                         transition={{ duration: 2, delay: 0.7 }}
                         className="h-full bg-purple-500 shadow-[0_0_10px_#a855f7]"
                       ></motion.div>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="p-4 border border-white/5 bg-white/5 rounded-lg text-center">
                       <p className="text-[10px] font-space text-zinc-500 mb-1">LATENCY</p>
                       <p className="text-xl font-outfit text-white">4ms</p>
                    </div>
                    <div className="p-4 border border-white/5 bg-white/5 rounded-lg text-center">
                       <p className="text-[10px] font-space text-zinc-500 mb-1">THROUGHPUT</p>
                       <p className="text-xl font-outfit text-white">1.2 TB/s</p>
                    </div>
                 </div>
              </div>
            </motion.div>
            
            {/* Absolute Decorative Circles */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/10 blur-[80px] rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 blur-[80px] rounded-full"></div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-purple-400 font-space font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Sustainable Innovation</span>
            <h2 className="text-5xl md:text-7xl font-outfit font-black text-white mb-8 tracking-tighter leading-none">
              Engineering <br className="hidden md:block"/> <span className="electric-text">Superiority</span>
            </h2>
            
            <p className="font-space text-zinc-400 text-lg leading-relaxed mb-10">
              Tesla.mk positions your brand at the intersection of energy and technology. Harness the global recognition of the Tesla name with the localized authority of the .mk extension.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded flex items-center justify-center text-cyan-400 shrink-0">⚡</div>
                  <div>
                     <h4 className="text-white font-space font-bold text-sm uppercase mb-1">Peak Performance</h4>
                     <p className="text-xs text-zinc-500 leading-relaxed">Optimized for high-traffic digital environments and enterprise-scale tech platforms.</p>
                  </div>
               </div>
               <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded flex items-center justify-center text-purple-400 shrink-0">💎</div>
                  <div>
                     <h4 className="text-white font-space font-bold text-sm uppercase mb-1">Premium Positioning</h4>
                     <p className="text-xs text-zinc-500 leading-relaxed">Instantly establish market leadership in the Macedonian sustainable energy sector.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeslaFeatures;
