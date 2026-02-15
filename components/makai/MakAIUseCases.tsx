
import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  { title: "National Platform", desc: "Central hub for government-backed AI research and digital policy.", icon: "🏛️" },
  { title: "Macedonian NLP", desc: "Developing state-of-the-art language models for Cyrillic scripts.", icon: "✍️" },
  { title: "Startup Incubator", desc: "Nurturing the next generation of Balkan tech unicorns.", icon: "🚀" },
  { title: "Agro-Tech AI", desc: "Optimizing Macedonian agriculture with predictive analytics.", icon: "🌱" },
  { title: "Healthcare Vision", desc: "Computer vision applications for automated local diagnostics.", icon: "🏥" },
  { title: "Education Bootcamp", desc: "Certified AI training and upskilling for the local workforce.", icon: "📚" },
  { title: "Consulting Hub", desc: "Marketplace for enterprise AI implementation in Balkan industry.", icon: "💼" },
  { title: "Smart City Skopje", desc: "Data-driven urban management and traffic optimization.", icon: "🏙️" },
  { title: "Research Portal", desc: "Collaboration nexus for Skopje and Bitola technical universities.", icon: "🧪" }
];

const MakAIUseCases: React.FC = () => {
  return (
    <section className="py-32 bg-[#0f172a] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <h2 className="text-5xl md:text-7xl font-space font-bold text-white mb-6 tracking-tighter leading-none">
            Strategic <span className="ai-glow-text">Applications</span>
          </h2>
          <p className="font-space text-slate-400 text-lg md:text-xl leading-relaxed">
            MakAI.mk is the definitive domain for national-scale innovation. Its versatile architecture supports any component of the modern AI ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-10 glass-card group relative hover:border-purple-500/40 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="text-5xl mb-10 transform group-hover:-translate-y-2 transition-transform duration-500">{item.icon}</div>
              <h3 className="text-2xl font-space font-bold text-white mb-4 uppercase tracking-tighter">
                {item.title}
              </h3>
              <p className="font-space text-slate-500 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              
              <div className="flex items-center text-[10px] font-mono font-bold text-purple-400 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Deploy Ready</span>
                <span className="ml-2">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MakAIUseCases;
