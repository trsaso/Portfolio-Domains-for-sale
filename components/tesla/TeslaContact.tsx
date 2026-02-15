
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TeslaContact: React.FC = () => {
  const [sent, setSent] = useState(false);

  return (
    <section className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-[#000a1a] border border-zinc-900 shadow-2xl overflow-hidden rounded-sm">
          
          <div className="lg:w-2/5 p-16 bg-gradient-to-br from-cyan-600 to-blue-900 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background Lightning Subtle */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
               <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M 50 0 L 52 100" stroke="white" strokeWidth="0.1" />
               </svg>
            </div>

            <div className="relative z-10">
              <h2 className="text-5xl font-outfit font-black mb-8 tracking-tighter leading-none uppercase">
                Power Your <br/> Vision
              </h2>
              <p className="font-space text-white/80 mb-12 text-lg leading-relaxed">
                Inquire about the acquisition of Tesla.mk. A high-voltage digital asset for visionary companies in the Balkan tech space.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl">🚀</div>
                  <div>
                    <p className="text-[10px] font-space uppercase text-white/40">Market Class</p>
                    <p className="font-outfit font-bold text-sm uppercase">Global Innovation Tier</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl">🌐</div>
                  <div>
                    <p className="text-[10px] font-space uppercase text-white/40">Market Target</p>
                    <p className="font-outfit font-bold text-sm uppercase">Macedonian High-Tech</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 pt-20">
               <p className="text-[10px] font-space font-bold tracking-[0.4em] text-cyan-300 uppercase">Premium Digital Assets Division</p>
            </div>
          </div>

          <div className="lg:w-3/5 p-16 relative">
            {sent ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center text-4xl mb-8 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                  ⚡
                </div>
                <h3 className="text-3xl font-outfit font-black text-white uppercase tracking-tighter mb-4">Connection Established</h3>
                <p className="font-space text-zinc-500 max-w-sm">Our acquisition team will reach out via secure protocols within 24 standard hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-space font-bold text-zinc-500 uppercase tracking-widest">Authorized Representative</label>
                    <input required className="w-full bg-zinc-900/50 border-b-2 border-zinc-800 px-0 py-3 text-white focus:outline-none focus:border-cyan-500 transition-all font-space" placeholder="Name or Company" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-space font-bold text-zinc-500 uppercase tracking-widest">Encrypted Endpoint</label>
                    <input required type="email" className="w-full bg-zinc-900/50 border-b-2 border-zinc-800 px-0 py-3 text-white focus:outline-none focus:border-cyan-500 transition-all font-space" placeholder="Email Address" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-space font-bold text-zinc-500 uppercase tracking-widest">Inquiry Modality</label>
                  <select className="w-full bg-zinc-900/50 border-b-2 border-zinc-800 px-0 py-3 text-zinc-400 focus:outline-none focus:border-cyan-500 transition-all font-space appearance-none">
                    <option>Direct Asset Acquisition</option>
                    <option>Corporate Partnership</option>
                    <option>Investment Inquiry</option>
                    <option>Joint Venture</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-space font-bold text-zinc-500 uppercase tracking-widest">Vision / Proposal</label>
                  <textarea rows={4} className="w-full bg-zinc-900/50 border-b-2 border-zinc-800 px-0 py-3 text-white focus:outline-none focus:border-cyan-500 transition-all font-space resize-none" placeholder="Details of your inquiry..."></textarea>
                </div>

                <button type="submit" className="electric-border w-full py-5 bg-white text-black font-space font-bold text-sm uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all active:scale-[0.98] shadow-2xl">
                  INITIALIZE TRANSMISSION
                </button>
              </form>
            )}
            
            {/* Background Circuit Subtle */}
            <div className="absolute inset-0 circuit-bg opacity-5 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeslaContact;
