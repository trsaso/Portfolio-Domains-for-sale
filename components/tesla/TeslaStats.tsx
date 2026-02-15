
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Macedonian Market Potential", value: "3.4B", sub: "Annual Opportunity", icon: "⚡" },
  { label: "Emission Reduction Target", value: "82%", sub: "By 2030", icon: "🌍" },
  { label: "Smart Grid Integration", value: "Ready", sub: "Infrastructure V2.0", icon: "🔗" },
  { label: "Charge Hub Coverage", value: "Nationwide", sub: "Macedonia Corridor", icon: "🔋" }
];

const TeslaStats: React.FC = () => {
  return (
    <section className="bg-black py-24 border-y border-zinc-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_70%)]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-5xl font-outfit font-black text-white mb-2 tracking-tighter electric-text">
                {stat.value}
              </div>
              <div className="text-xs font-space font-bold text-zinc-500 uppercase tracking-[0.2em] mb-1">
                {stat.label}
              </div>
              <div className="text-[10px] text-zinc-700 font-space italic">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeslaStats;
