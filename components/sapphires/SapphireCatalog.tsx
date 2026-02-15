
import React from 'react';
import { motion } from 'framer-motion';

const stones = [
  { name: "Prilep Raw Rose", carat: "12.4", clarity: "Raw Specimen", img: "https://images.unsplash.com/photo-1615484477201-9f4953340fab?auto=format&fit=crop&q=80&w=400" },
  { name: "Faceted Raspberry Fire", carat: "2.10", clarity: "VVS1", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400" },
  { name: "Macedonian Sunset Red", carat: "1.85", clarity: "IF", img: "https://images.unsplash.com/photo-1615484477133-c24749f7f457?auto=format&fit=crop&q=80&w=400" },
  { name: "Crystalized Rose", carat: "4.50", clarity: "Semi-Raw", img: "https://images.unsplash.com/photo-1615484477201-9f4953340fab?auto=format&fit=crop&q=80&w=400" }
];

const SapphireCatalog: React.FC = () => {
  return (
    <section className="py-32 bg-[#4c0519] relative">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-serif font-bold text-white mb-4 italic">The <span className="gold-foil">Vault</span></h2>
            <p className="font-luxury text-xl text-rose-100/40">Raw specimens and master-cut pink corundum.</p>
          </div>
          <button className="hidden md:block font-luxury text-rose-300 border-b border-rose-300/40 pb-1 tracking-widest uppercase text-xs hover:text-white hover:border-white transition-all">
            Full Catalog
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stones.map((stone, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-zinc-900/40 border border-rose-500/10 p-6 flex flex-col group"
            >
              <div className="relative aspect-square overflow-hidden mb-6">
                <img 
                  src={stone.img} 
                  alt={stone.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4 bg-rose-700 text-white text-[10px] font-bold px-2 py-1 rounded-sm">
                  {stone.clarity === 'Raw Specimen' ? 'NATURAL' : 'FABRICATED'}
                </div>
              </div>
              <h3 className="font-serif text-xl text-white mb-2 group-hover:text-rose-400 transition-colors">{stone.name}</h3>
              <div className="flex justify-between items-center text-[10px] font-poppins tracking-widest text-rose-100/30 uppercase border-t border-white/5 pt-4">
                <span>{stone.carat} Carats</span>
                <span>{stone.clarity}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SapphireCatalog;
