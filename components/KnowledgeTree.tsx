
import React from 'react';
import { motion } from 'framer-motion';

const KnowledgeTree: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
             <h2 className="text-4xl font-serif font-bold text-white mb-6">Дрво на <span className="text-amber-500">Спознанието</span></h2>
             <p className="text-indigo-200/70 text-lg leading-relaxed mb-8">
               Како што дрвото ги шири своите гранки, така и Mudrosti.mk овозможува ширење на идеите, знаењето и културата. Овој домен е коренот на вашата идна дигитална империја.
             </p>
             <ul className="space-y-4">
               {['Длабоко значење', 'Културен симболизам', 'Образовен авторитет'].map((item, i) => (
                 <motion.li 
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-center text-white font-medium"
                 >
                   <span className="w-2 h-2 bg-amber-500 rounded-full mr-4 shadow-[0_0_10px_#f59e0b]"></span>
                   {item}
                 </motion.li>
               ))}
             </ul>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-96">
               {/* Simplified SVG Tree Animation */}
               <svg viewBox="0 0 100 120" className="w-full h-full overflow-visible">
                 <motion.path
                   d="M 50 110 L 50 80 Q 50 40 20 30 M 50 60 Q 50 40 80 30 M 50 90 L 50 70 Q 50 50 40 40"
                   stroke="#f59e0b"
                   strokeWidth="2"
                   strokeLinecap="round"
                   fill="none"
                   initial={{ pathLength: 0 }}
                   whileInView={{ pathLength: 1 }}
                   transition={{ duration: 2, ease: "easeOut" }}
                 />
                 {/* Leaf Nodes */}
                 {[
                   { cx: 20, cy: 30 },
                   { cx: 80, cy: 30 },
                   { cx: 50, cy: 15 },
                   { cx: 40, cy: 40 },
                   { cx: 65, cy: 50 },
                   { cx: 30, cy: 60 }
                 ].map((node, i) => (
                   <motion.circle
                     key={i}
                     cx={node.cx} cy={node.cy} r="3"
                     fill="#f59e0b"
                     initial={{ scale: 0 }}
                     whileInView={{ scale: 1 }}
                     transition={{ delay: 1.5 + i * 0.1 }}
                   />
                 ))}
               </svg>
               {/* Glow effect */}
               <div className="absolute inset-0 bg-amber-500/10 blur-[60px] rounded-full pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeTree;
