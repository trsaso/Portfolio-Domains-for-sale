
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  { mk: "Знаењето е моќ.", en: "Knowledge is power." },
  { mk: "Учи додека си жив.", en: "Learn as long as you live." },
  { mk: "Мудроста е во тишината.", en: "Wisdom lies in silence." },
  { mk: "Паметниот учи од туѓите грешки.", en: "The wise man learns from others' mistakes." }
];

const FlipCard: React.FC<{ mk: string, en: string }> = ({ mk, en }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-48 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className="absolute inset-0 w-full h-full backface-hidden flex flex-col items-center justify-center p-6 bg-indigo-900/30 border border-indigo-500/20 rounded-2xl">
          <span className="text-amber-500 text-xs font-bold mb-4 tracking-widest">MACEDONIAN</span>
          <p className="text-xl font-serif text-white text-center leading-snug">{mk}</p>
          <div className="mt-4 text-indigo-400 text-sm">Кликнете за превод</div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center p-6 bg-amber-500/10 border border-amber-500/30 rounded-2xl">
          <span className="text-indigo-300 text-xs font-bold mb-4 tracking-widest uppercase">English</span>
          <p className="text-xl font-serif italic text-amber-100 text-center leading-snug">{en}</p>
        </div>
      </motion.div>
    </div>
  );
};

const InteractiveWisdom: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="wisdom" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Збор на <span className="text-amber-500">Мудроста</span>
          </h2>
          <p className="text-indigo-200/60">Истражете ја јазичната длабочина на нашиот концепт.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-white mb-8 border-l-4 border-amber-500 pl-6">Интерактивни Картички</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quotes.map((q, i) => (
                <FlipCard key={i} mk={q.mk} en={q.en} />
              ))}
            </div>
          </div>

          <div className="bg-indigo-900/10 rounded-3xl p-12 relative overflow-hidden flex items-center justify-center min-h-[400px]">
             <AnimatePresence mode="wait">
               <motion.div
                 key={currentQuote}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.5 }}
                 className="text-center z-10"
               >
                 <div className="text-amber-500 text-6xl font-serif mb-6 opacity-50">"</div>
                 <h4 className="text-3xl md:text-4xl font-serif italic text-white leading-relaxed mb-4">
                   {quotes[currentQuote].mk}
                 </h4>
                 <p className="text-indigo-400 text-lg">{quotes[currentQuote].en}</p>
               </motion.div>
             </AnimatePresence>
             {/* Decorative radial background */}
             <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-purple-500/5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveWisdom;
