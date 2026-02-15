
import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  { title: "Service Marketplace", desc: "Connect CNC shops with customers across Macedonia.", icon: "🔧" },
  { title: "Equipment Sales", desc: "Premium marketplace for milling, turning, and EDM machines.", icon: "📦" },
  { title: "CAD/CAM Platform", desc: "Integrated software licensing and cloud engineering tools.", icon: "💻" },
  { title: "Automation Hub", desc: "Industrial IoT and robotic integration systems center.", icon: "🤖" },
  { title: "Parts Sourcing", desc: "Exact-match parts directory for aerospace and automotive.", icon: "🚗" },
  { title: "CNC Education", desc: "VET training and certification for future machine operators.", icon: "🎓" },
  { title: "Manufacturing Jobs", desc: "Specialized job board for industrial engineers and technicians.", icon: "💼" },
  { title: "Tool Directory", desc: "Supplier database for cutting tools, fluids, and raw materials.", icon: "📐" }
];

const CNCUseCases: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-industrial font-bold text-white mb-4 uppercase tracking-tighter">
            Industrial <span className="text-sky-500">Applications</span>
          </h2>
          <div className="w-24 h-1 bg-sky-500 mb-8"></div>
          <p className="font-tech text-zinc-400 max-w-xl text-lg">
            CNC.mk is built to power the next generation of Macedonian high-tech exports. From automotive to medical devices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 bg-zinc-900/40 border border-zinc-800 hover:border-sky-500/40 hover:bg-zinc-900 transition-all group relative overflow-hidden"
            >
              {/* Technical Drawing Background Detail */}
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                 <svg width="40" height="40" viewBox="0 0 40 40">
                   <circle cx="20" cy="20" r="15" fill="none" stroke="#0ea5e9" strokeWidth="0.5" />
                   <path d="M0 20 L40 20 M20 0 L20 40" stroke="#0ea5e9" strokeWidth="0.5" />
                 </svg>
              </div>

              <div className="text-3xl mb-6 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
              <h3 className="text-xl font-industrial font-bold text-white mb-3 tracking-wide group-hover:text-sky-400 transition-colors uppercase">
                {item.title}
              </h3>
              <p className="font-tech text-zinc-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CNCUseCases;
