
import React from 'react';
import { motion } from 'framer-motion';

const DomainValue: React.FC = () => {
  return (
    <section id="vision" className="py-24 bg-gradient-to-b from-indigo-950 to-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-bold mb-6">
              ПРЕМИУМ ДОМЕН
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              Зошто <span className="italic text-amber-400">Mudrosti.mk?</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Веднаш Препознатлив</h4>
                  <p className="text-indigo-200/70">"Мудрости" е збор што ечи со значење и почит во македонскиот јазик.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Локален Авторитет</h4>
                  <p className="text-indigo-200/70">.mk екстензијата овозможува доверба кај локалната публика и подобар SEO ранг.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Краток и Меморабилен</h4>
                  <p className="text-indigo-200/70">Лесен за пишување, изговарање и споделување на социјалните мрежи.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 p-1 bg-gradient-to-tr from-amber-500 via-indigo-500 to-purple-500 rounded-3xl">
              <div className="bg-slate-900 rounded-[22px] p-10 text-center">
                <div className="text-6xl font-serif text-amber-500 mb-6">"</div>
                <p className="text-2xl font-serif italic text-indigo-100 mb-8 leading-relaxed">
                  Мудроста не е производ на школувањето, туку на доживотниот обид да се стекне.
                </p>
                <div className="text-amber-500 font-bold tracking-widest uppercase text-sm">Алберт Ајнштајн</div>
              </div>
            </div>
            {/* Decorative background circle */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DomainValue;
