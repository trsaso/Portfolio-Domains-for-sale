
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Macedonian AI Market", value: "€450M", sub: "Growth Projection 2028", icon: "📈" },
  { label: "Digital Professionals", value: "25k+", sub: "Regional Talent Pool", icon: "👥" },
  { label: "Research Synergy", value: "Tier 1", sub: "University Integration", icon: "🎓" },
  { label: "EU Tech Alignment", value: "Ready", sub: "AI Act Compliant Asset", icon: "🇪🇺" }
];

const MakAIStats: React.FC = () => {
  return (
    <section className="bg-[#020617] py-24 border-y border-white/5 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group p-8 glass-card border-none"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
              <div className="text-5xl font-space font-black text-white mb-2 tracking-tighter ai-glow-text">
                {stat.value}
              </div>
              <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">
                {stat.label}
              </div>
              <div className="text-[10px] text-slate-600 font-mono italic">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MakAIStats;
