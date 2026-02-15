
import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  { title: "EV Marketplace", desc: "Premier digital hub for electric vehicle sales and leasing in Macedonia.", icon: "🚗", color: "#3b82f6" },
  { title: "Charging Network", desc: "Interactive map and payment gateway for nationwide EV charging stations.", icon: "🔌", color: "#8b5cf6" },
  { title: "Renewable Energy", desc: "Solutions for solar integration and domestic energy storage systems.", icon: "☀️", color: "#06b6d4" },
  { title: "Smart Automation", desc: "Connected home ecosystem and smart grid optimization platform.", icon: "🏠", color: "#3b82f6" },
  { title: "Innovation Hub", desc: "Incubator for Macedonian tech startups and clean energy research.", icon: "🔬", color: "#8b5cf6" },
  { title: "Tech Directory", desc: "Expert reviews and technical documentation for the Balkan EV industry.", icon: "📊", color: "#06b6d4" }
];

const TeslaUseCases: React.FC = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Abstract Background Energy Waves */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <path d="M 0 50 Q 25 25 50 50 T 100 50" fill="none" stroke="#22d3ee" strokeWidth="0.1" />
          <path d="M 0 60 Q 25 35 50 60 T 100 60" fill="none" stroke="#8b5cf6" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-7xl font-outfit font-black text-white mb-6 tracking-tighter leading-none">
            The <span className="text-cyan-500">Ecosystem</span>
          </h2>
          <p className="font-space text-zinc-500 text-lg md:text-xl leading-relaxed">
            Tesla.mk isn't just a domain; it's the digital foundation for Macedonia's electric future. A versatile brand for the entire sustainable energy spectrum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-zinc-950 border border-zinc-900 group relative hover:border-cyan-500/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="text-4xl mb-8 group-hover:animate-pulse">{item.icon}</div>
              <h3 className="text-2xl font-outfit font-bold text-white mb-4 uppercase tracking-tighter">
                {item.title}
              </h3>
              <p className="font-space text-zinc-500 text-sm leading-relaxed mb-8">
                {item.desc}
              </p>
              
              <div 
                className="w-12 h-1 group-hover:w-full transition-all duration-700"
                style={{ backgroundColor: item.color }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeslaUseCases;
