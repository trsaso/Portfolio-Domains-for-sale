
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SapphireContact: React.FC = () => {
  const [sent, setSent] = useState(false);

  return (
    <section className="py-24 marble-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden border border-rose-500/10 flex flex-col md:flex-row">
          
          <div className="md:w-1/3 bg-[#881337] p-12 text-white">
            <h3 className="font-serif text-3xl mb-8 italic">Curated <span className="text-rose-300">Acquisition</span></h3>
            <p className="font-luxury text-rose-100/60 mb-12 leading-relaxed">
              For collectors seeking the specific raspberry fluorescence of the Macedonian Ruby. We offer private viewings in Prilep.
            </p>
            
            <div className="space-y-6">
               <div className="flex items-center gap-4 group">
                 <div className="w-10 h-10 border border-rose-500/20 flex items-center justify-center text-rose-300 group-hover:bg-rose-500 group-hover:text-white transition-all">📞</div>
                 <div className="font-luxury text-sm tracking-widest uppercase">+389 (0) 48 ...</div>
               </div>
               <div className="flex items-center gap-4 group">
                 <div className="w-10 h-10 border border-rose-500/20 flex items-center justify-center text-rose-300 group-hover:bg-rose-500 group-hover:text-white transition-all">📍</div>
                 <div className="font-luxury text-sm tracking-widest uppercase">Prilep, Macedonia</div>
               </div>
            </div>
          </div>

          <div className="md:w-2/3 p-12">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="text-6xl">💎</div>
                <h4 className="font-serif text-3xl text-rose-950 italic">Inquiry Received</h4>
                <p className="font-luxury text-rose-900/60">Our gemologist will contact you shortly to discuss your corundum inquiry.</p>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-rose-700 tracking-widest uppercase">Full Name</label>
                    <input required className="w-full border-b border-rose-100 py-3 focus:outline-none focus:border-rose-700 transition-all font-luxury italic text-rose-950 bg-transparent" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-rose-700 tracking-widest uppercase">Email Address</label>
                    <input required type="email" className="w-full border-b border-rose-100 py-3 focus:outline-none focus:border-rose-700 transition-all font-luxury italic text-rose-950 bg-transparent" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-rose-700 tracking-widest uppercase">Specimen Interest</label>
                  <select className="w-full border-b border-rose-100 py-3 focus:outline-none focus:border-rose-700 transition-all font-luxury italic text-rose-950 bg-transparent appearance-none cursor-pointer">
                    <option>Raw Mineral Specimen</option>
                    <option>Faceted Raspberry Fire</option>
                    <option>Investment Collection</option>
                    <option>Joint Mining Venture</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-rose-700 tracking-widest uppercase">Message</label>
                  <textarea rows={3} className="w-full border-b border-rose-100 py-3 focus:outline-none focus:border-rose-700 transition-all font-luxury italic text-rose-950 bg-transparent resize-none"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-rose-800 text-white font-luxury font-bold tracking-[0.3em] uppercase hover:bg-[#4c0519] transition-all shadow-xl active:scale-95">
                  SEND INQUIRY
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SapphireContact;
