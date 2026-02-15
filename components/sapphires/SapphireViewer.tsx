
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SapphireViewer: React.FC = () => {
  const [rotation, setRotation] = useState(0);

  return (
    <section className="py-24 marble-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold text-rose-950 mb-4">Precision Interactive <span className="italic">Spectrum</span></h2>
          <p className="font-luxury text-xl text-rose-900/60 leading-relaxed">
            Drag to explore the internal raspberry glow of our Macedonian corundum specimens.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Interactive Viewer Hub */}
          <div className="relative w-full max-w-xl aspect-square bg-white shadow-2xl rounded-sm p-12 flex items-center justify-center border border-rose-500/5">
             <div className="absolute top-4 left-4 text-[10px] font-bold text-rose-600/40 tracking-[0.4em] uppercase">Prilep Lab Scan v4.0</div>
             
             <motion.div
               drag="x"
               dragConstraints={{ left: 0, right: 0 }}
               onDrag={(e, info) => setRotation(prev => prev + info.delta.x)}
               className="cursor-grab active:cursor-grabbing"
             >
                <div 
                  className="w-64 h-64 md:w-80 md:h-80 bg-rose-600/20 rounded-full blur-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                ></div>
                <motion.div
                  style={{ rotateY: rotation }}
                  className="relative z-10 w-48 h-48 md:w-64 md:h-64 flex items-center justify-center"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                    <path d="M50 5 L90 35 L80 85 L20 85 L10 35 Z" fill="#9d174d" fillOpacity="0.9" stroke="#fb7185" strokeWidth="0.5" />
                    <path d="M50 5 L50 85 M10 35 L90 35 M20 85 L50 5 L80 85" stroke="white" strokeOpacity="0.2" strokeWidth="0.2" />
                  </svg>
                </motion.div>
             </motion.div>

             <div className="absolute bottom-8 flex gap-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-rose-500/20"></div>
                ))}
             </div>
          </div>

          <div className="lg:w-1/3 space-y-8">
             <div className="p-8 bg-white border border-rose-100 shadow-sm">
               <h4 className="font-serif font-bold text-rose-950 mb-2">Pink Spectrum</h4>
               <p className="text-sm text-rose-900/40 mb-6">From Soft Rose to Intense Raspberry.</p>
               <div className="flex gap-4">
                 {['#fb7185', '#e11d48', '#be123c', '#881337'].map(c => (
                   <div key={c} className="w-8 h-8 rounded-full shadow-inner border border-white/20" style={{ backgroundColor: c }}></div>
                 ))}
               </div>
             </div>

             <div className="p-8 bg-[#881337] text-white">
                <h4 className="font-serif font-bold mb-4">Gemological Report</h4>
                <div className="space-y-4 font-poppins text-xs tracking-widest uppercase opacity-60">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Variety</span>
                    <span className="text-rose-300">Pink Corundum</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Hue</span>
                    <span className="text-rose-300">Vivid Raspberry</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Origin</span>
                    <span className="text-rose-300">Sivec, MK</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SapphireViewer;
