
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PcelaContact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24 bg-[#fffbeb]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-2xl shadow-amber-900/5 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-amber-500 p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-organic font-bold mb-6">Harvest Your Potential</h2>
              <p className="opacity-80 font-poppins text-sm leading-relaxed">
                Contact us to inquire about acquiring Pcela.org or to discuss partnership opportunities in the apiculture space.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-sm">📍</span>
                <span className="text-xs font-bold uppercase tracking-widest">Global Asset Network</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-sm">🍯</span>
                <span className="text-xs font-bold uppercase tracking-widest">pcela.org</span>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 p-12">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="text-6xl mb-6">🐝</div>
                <h3 className="text-3xl font-organic font-bold text-amber-900 mb-2">Message Received!</h3>
                <p className="text-gray-500">The hive is buzzing with your news. We will get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-amber-900/40 ml-1">Your Name</label>
                    <input required className="w-full bg-amber-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 transition-all outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-amber-900/40 ml-1">Email Address</label>
                    <input required type="email" className="w-full bg-amber-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 transition-all outline-none" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-amber-900/40 ml-1">Inquiry Type</label>
                  <select className="w-full bg-amber-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 transition-all outline-none appearance-none">
                    <option>Domain Acquisition</option>
                    <option>Partnership Proposal</option>
                    <option>General Information</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-amber-900/40 ml-1">Message</label>
                  <textarea rows={4} className="w-full bg-amber-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 transition-all outline-none resize-none" placeholder="Tell us about your vision for Pcela.org..."></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-amber-900 hover:bg-black text-white font-poppins font-bold rounded-2xl shadow-xl shadow-amber-900/20 transition-all active:scale-95">
                  Send Your Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PcelaContact;
