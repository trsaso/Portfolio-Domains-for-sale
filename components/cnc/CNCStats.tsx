
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Macedonian Industrial Output", value: "24%", sub: "GDP Contribution", icon: "⚙️" },
  { label: "Global Reach", value: "100+", sub: "Export Markets", icon: "🌐" },
  { label: "Precision Range", value: "3-5 Axis", sub: "Standard Capability", icon: "🎯" },
  { label: "Manufacturing Speed", value: "Industry 4.0", sub: "Digital Ready", icon: "⚡" }
];

const CNCStats: React.FC = () => {
  return (
    <section className="bg-zinc-950 py-20 border-y border-zinc-900">
      <div className="container mx-auto px-6">
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
              <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">{stat.icon}</div>
              <div className="text-5xl font-industrial font-bold text-white mb-2 tracking-tight group-hover:text-sky-500 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-orbitron font-bold text-zinc-500 uppercase tracking-[0.2em] mb-1">
                {stat.label}
              </div>
              <div className="text-[10px] text-zinc-700 font-tech">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CNCStats;
