
import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  { title: "E-Commerce", desc: "Beekeeping equipment & hive marketplace.", icon: "🛒", color: "#fbbf24" },
  { title: "Marketplace", desc: "Direct-to-consumer honey platform.", icon: "🍯", color: "#f59e0b" },
  { title: "Education", desc: "Beekeeping courses & professional training.", icon: "📖", color: "#22c55e" },
  { title: "Software", desc: "Digital apiary management tools.", icon: "📱", color: "#fbbf24" },
  { title: "Directory", desc: "Organic honey product catalog.", icon: "🌿", color: "#f59e0b" },
  { title: "NGO / Impact", desc: "Bee conservation & environment fund.", icon: "🌍", color: "#22c55e" }
];

const PcelaUseCases: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-organic font-bold text-amber-900 mb-6">Built for the <span className="text-green-500">Hive</span></h2>
          <p className="font-poppins text-gray-500 max-w-xl mx-auto">Discover the versatility of Pcela.org across the entire apiculture ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group cursor-pointer"
            >
              <div className="hexagon-mask w-full aspect-[1/1.1] bg-amber-50 group-hover:bg-amber-100 transition-all duration-500 p-8 flex flex-col items-center justify-center text-center shadow-sm">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-2xl font-poppins font-bold text-amber-900 mb-2">{item.title}</h3>
                <p className="text-sm text-amber-800/60 leading-relaxed px-4">{item.desc}</p>
                <div 
                  className="absolute bottom-4 w-12 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: item.color }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Bee Trail */}
      <svg className="absolute top-1/2 left-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 1440 320">
        <path fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,5" d="M0,160 C320,300 420,0 720,160 C1020,320 1120,20 1440,160"></path>
      </svg>
    </section>
  );
};

export default PcelaUseCases;
