
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollBook: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const rotateY1 = useTransform(scrollYProgress, [0.1, 0.4], [0, -180]);
  const rotateY2 = useTransform(scrollYProgress, [0.4, 0.7], [0, -180]);
  const opacity1 = useTransform(scrollYProgress, [0.1, 0.4], [1, 0]);

  return (
    <section ref={targetRef} className="py-32 bg-indigo-950 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-white">Книга на <span className="text-amber-500">Познанието</span></h2>
        <p className="text-indigo-200/60 mt-4">Скролајте за да ги прелистате можностите.</p>
      </div>

      <div className="flex justify-center items-center perspective-1000 h-[500px]">
        <div className="relative w-[300px] md:w-[450px] h-[400px] md:h-[600px] bg-amber-50/5 rounded shadow-2xl preserve-3d">
          
          {/* Static Left Side (Cover/Back) */}
          <div className="absolute left-0 w-1/2 h-full bg-indigo-900/40 rounded-l border-r border-indigo-400/20 z-0"></div>
          
          {/* Animated Page 1 */}
          <motion.div 
            style={{ rotateY: rotateY1, transformOrigin: 'left' }}
            className="absolute right-0 w-1/2 h-full bg-amber-50 text-indigo-950 p-8 shadow-inner rounded-r z-30 backface-hidden"
          >
            <div className="h-full flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Глава I</h3>
              <p className="italic leading-relaxed">Почетокот на секоја голема идеја започнува со вистинското име.</p>
            </div>
          </motion.div>

          {/* Page 2 (Inside of Page 1) */}
          {/* Fixed: removed duplicate rotateY property which caused the build error */}
          <motion.div 
            style={{ transformOrigin: 'left', rotateY: useTransform(rotateY1, r => r + 180) }}
            className="absolute left-1/2 w-1/2 h-full bg-amber-100 text-indigo-900 p-8 shadow-inner z-20 backface-hidden"
          >
             <div className="h-full flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Глава II</h3>
              <p className="leading-relaxed">Mudrosti.mk не е само домен, туку дигитален споменик.</p>
            </div>
          </motion.div>

          {/* Static Center (The text visible after first page turns) */}
          <div className="absolute right-0 w-1/2 h-full bg-amber-50/90 text-indigo-950 p-8 z-10 flex flex-col justify-center">
            <h3 className="text-2xl font-serif font-bold mb-4">Глава III</h3>
            <p className="leading-relaxed">Приклучете се кон македонската дигитална елита.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScrollBook;
