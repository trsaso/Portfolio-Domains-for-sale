
import React from 'react';
import { motion } from 'framer-motion';

const SapphireHeritage: React.FC = () => {
  return (
    <section className="py-32 bg-[#0c0a09] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative group p-4 border border-rose-500/10 bg-zinc-900/50">
              <img 
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800" 
                alt="Prilep Dolomite Marble" 
                className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-rose-900/20 mix-blend-overlay"></div>
              {/* Floating gold leaf details */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-rose-600/40"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-rose-600/40"></div>
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <h4 className="font-luxury text-rose-500 tracking-[0.4em] uppercase text-xs mb-6">Geological Heritage</h4>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight">
              The Raspberry <span className="gold-foil italic">Corundum</span> of Prilep
            </h2>
            <p className="font-luxury text-xl text-rose-100/60 leading-relaxed mb-8">
              Macedonia is the only country in Europe with naturally occurring rubies. Our pink sapphires, often called Macedonian Rubies, are found within the pure white Dolomitic marbles of Prilep. They possess a unique raspberry-pink tint that is found nowhere else on Earth.
            </p>
            <p className="font-luxury text-lg text-rose-100/40 italic mb-12">
              "Synergy with Marble.trade. These gems are born within the same white marble that built the ancient world. We bring you the rarest fruit of our soil."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 border border-rose-500/10 bg-white/[0.02]">
                <div className="text-3xl mb-4">⛏️</div>
                <h5 className="font-luxury text-rose-400 font-bold mb-2">Ethical Extraction</h5>
                <p className="text-sm text-rose-100/30 font-poppins">Gently harvested from the Sivec marble quarries, ensuring the preservation of the stone's natural spirit.</p>
              </div>
              <div className="p-6 border border-rose-500/10 bg-white/[0.02]">
                <div className="text-3xl mb-4">💎</div>
                <h5 className="font-luxury text-rose-400 font-bold mb-2">Raspberry Fire</h5>
                <p className="text-sm text-rose-100/30 font-poppins">Renowned for its specific spectral signature and vibrant, deep pink fluorescence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SapphireHeritage;
