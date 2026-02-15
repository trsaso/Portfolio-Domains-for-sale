
import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    title: "Образовни Платформи",
    en: "Educational Platforms",
    description: "Идеален дом за универзитети, онлајн курсеви и академски институции во Македонија.",
    icon: "🎓"
  },
  {
    title: "Менаџмент на Знаење",
    en: "Knowledge Management",
    description: "Професионални системи за компании кои го вреднуваат корпоративното знаење.",
    icon: "🧠"
  },
  {
    title: "Филозофски Блогови",
    en: "Philosophy & Wisdom",
    description: "Простор за длабока мисла, културно наследство и дигитална библиотека на мудрости.",
    icon: "📜"
  },
  {
    title: "E-learning Пазар",
    en: "E-learning Marketplace",
    description: "Центар за продажба на курсеви и дигитални ресурси за личен развој.",
    icon: "💡"
  },
  {
    title: "Професионален Развој",
    en: "Professional Development",
    description: "Платформа за обука и сертификација на следните генерации лидери.",
    icon: "⚖️"
  },
  {
    title: "Културно Наследство",
    en: "Cultural Heritage",
    description: "Архива за македонското културно и јазично богатство низ вековите.",
    icon: "🏺"
  }
];

const UseCases: React.FC = () => {
  return (
    <section id="uses" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Бесконечни <span className="text-amber-500">Можности</span>
          </h2>
          <p className="text-indigo-200/60 max-w-2xl mx-auto">
            Domain Mudrosti.mk е совршено позициониран за секој проект што цели кон авторитет, знаење и културно влијание.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-indigo-900/20 border border-indigo-500/10 rounded-2xl hover:bg-indigo-900/40 hover:border-amber-500/30 transition-all group"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-amber-500/70 font-medium mb-4">{item.en}</p>
              <p className="text-indigo-200/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
