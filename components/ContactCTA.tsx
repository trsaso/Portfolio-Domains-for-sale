
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactCTA: React.FC = () => {
  const [lang, setLang] = useState<'MK' | 'EN'>('MK');
  const [status, setStatus] = useState<null | 'success'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    // Simulated form submission
  };

  const content = {
    MK: {
      title: "Стекнете го овој домен",
      subtitle: "Инвестирајте во иднината на вашето знаење денес.",
      nameLabel: "Име и презиме",
      emailLabel: "Е-пошта",
      offerLabel: "Вашата понуда (EUR)",
      messageLabel: "Порака",
      button: "Испрати Понуда",
      success: "Ви благодариме! Ќе ве контактираме наскоро."
    },
    EN: {
      title: "Acquire this domain",
      subtitle: "Invest in the future of your knowledge today.",
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      offerLabel: "Your Offer (EUR)",
      messageLabel: "Message",
      button: "Send Inquiry",
      success: "Thank you! We will contact you shortly."
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-black to-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-white/5 p-1 rounded-full border border-white/10 flex">
              <button 
                onClick={() => setLang('MK')}
                className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${lang === 'MK' ? 'bg-amber-500 text-indigo-950' : 'text-white'}`}
              >
                MK
              </button>
              <button 
                onClick={() => setLang('EN')}
                className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${lang === 'EN' ? 'bg-amber-500 text-indigo-950' : 'text-white'}`}
              >
                EN
              </button>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              {content[lang].title}
            </h2>
            <p className="text-indigo-200/60 text-xl">
              {content[lang].subtitle}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-indigo-950/40 backdrop-blur-xl border border-indigo-500/20 p-8 md:p-12 rounded-3xl shadow-2xl"
          >
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-white">{content[lang].success}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-indigo-300 block">{content[lang].nameLabel}</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-indigo-300 block">{content[lang].emailLabel}</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-indigo-300 block">{content[lang].offerLabel}</label>
                  <input type="number" placeholder="5,000+" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-indigo-300 block">{content[lang].messageLabel}</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all resize-none"></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-indigo-950 font-bold py-4 rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-95">
                    {content[lang].button}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
          
          <div className="mt-16 text-center space-y-4">
            <p className="text-indigo-300/40 text-sm tracking-widest uppercase">Premium Assets Network</p>
            <div className="flex justify-center space-x-6">
              <span className="text-amber-500 font-bold text-xl">Mudrosti<span className="text-white">.mk</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
