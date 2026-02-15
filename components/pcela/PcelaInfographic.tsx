
import React from 'react';
import { motion } from 'framer-motion';

const PcelaInfographic: React.FC = () => {
  return (
    <section className="py-24 bg-amber-600 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-organic font-bold mb-4">The Impact of the Hive</h2>
          <p className="opacity-80 font-poppins">Environmental contribution and honey production lifecycle.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: "Pollination Impact", val: "70%", sub: "Of Global Crops", icon: "🌸" },
            { label: "Bees per Hive", val: "50k+", sub: "Dynamic Community", icon: "🐝" },
            { label: "Honey Produced", val: "25kg", sub: "Annual Avg / Hive", icon: "🍯" },
            { label: "Market Value", val: "$10B+", sub: "Global Industry", icon: "💰" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 text-center"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold font-poppins mb-1">{stat.val}</div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-60 mb-2">{stat.label}</div>
              <div className="text-xs opacity-80">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12">
           <div className="relative">
             <div className="w-64 h-64 border-4 border-dashed border-white/30 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
             </div>
             <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-6xl">✨</span>
                <span className="text-xs uppercase tracking-tighter font-bold mt-2">Pure Nature</span>
             </div>
           </div>
           <div className="max-w-md">
             <h3 className="text-2xl font-bold mb-4 font-poppins">A Cycle of Sustainability</h3>
             <p className="opacity-80 leading-relaxed mb-6">
               Bees are the silent guardians of our ecosystem. Pcela.org serves as the digital hub to protect, educate, and commercialize this vital natural resource.
             </p>
             <div className="flex gap-2">
                {[...Array(5)].map((_, i) => <div key={i} className="w-8 h-1 bg-yellow-400 rounded-full"></div>)}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default PcelaInfographic;
