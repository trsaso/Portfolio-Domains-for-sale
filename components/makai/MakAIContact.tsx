
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MakAIContact: React.FC = () => {
  const [sent, setSent] = useState(false);

  return (
    <section className="py-32 bg-[#0f172a] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row glass-card border-none rounded-3xl overflow-hidden shadow-2xl">
          
          <div className="lg:w-2/5 p-16 bg-gradient-to-br from-purple-900 to-[#0f172a] text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 circuit-bg opacity-10"></div>

            <div className="relative z-10">
              <h2 className="text-5xl font-space font-bold mb-8 tracking-tighter leading-none uppercase">
                Shape the <br/> Future of <br/> <span className="ai-glow-text">a Nation</span>
              </h2>
              <p className="font-space text-slate-300 mb-12 text-lg leading-relaxed">
                MakAI.mk is available for strategic acquisition. Ideal for serious tech investors, government initiatives, and industry leaders.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-xl">🌐</div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-slate-500">Market Potential</p>
                    <p className="font-space font-bold text-sm uppercase">Regional AI Dominance</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-xl">⚡</div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-slate-500">Deployment Status</p>
                    <p className="font-space font-bold text-sm uppercase">Active Asset Ready</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 pt-20">
               <p className="text-[10px] font-mono font-bold tracking-[0.5em] text-cyan-400 uppercase">National Innovation Hub</p>
            </div>
          </div>

          <div className="lg:w-3/5 p-16 relative bg-[#020617]">
            {sent ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-24 h-24 bg-purple-500/20 rounded-full flex items-center justify-center text-4xl mb-8 shadow-[0_0_30px_rgba(124,58,237,0.2)]">
                  🧬
                </div>
                <h3 className="text-3xl font-space font-bold text-white uppercase tracking-tighter mb-4">Transmission Successful</h3>
                <p className="font-space text-slate-500 max-w-sm">Our strategic acquisition curator will review your inquiry and initiate contact within 24 standard hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Authorized Principal</label>
                    <input required className="w-full bg-transparent border-b border-slate-800 px-0 py-3 text-white focus:outline-none focus:border-purple-500 transition-all font-space" placeholder="Name or Entity" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Secure Endpoint</label>
                    <input required type="email" className="w-full bg-transparent border-b border-slate-800 px-0 py-3 text-white focus:outline-none focus:border-purple-500 transition-all font-space" placeholder="Email Address" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Inquiry Modality</label>
                  <select className="w-full bg-transparent border-b border-slate-800 px-0 py-3 text-slate-400 focus:outline-none focus:border-purple-500 transition-all font-space appearance-none">
                    <option>Strategic Domain Acquisition</option>
                    <option>Government / Institutional Partnership</option>
                    <option>Investment Venture Inquiry</option>
                    <option>Development Partnership</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Proposals / Vision</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-slate-800 px-0 py-3 text-white focus:outline-none focus:border-purple-500 transition-all font-space resize-none" placeholder="Outline your vision for MakAI.mk..."></textarea>
                </div>

                <button type="submit" className="w-full py-5 bg-white text-black font-space font-bold text-sm uppercase tracking-[0.3em] hover:bg-purple-600 hover:text-white transition-all active:scale-[0.98] shadow-2xl">
                  INITIALIZE ACQUISITION
                </button>
              </form>
            )}
            
            <div className="absolute inset-0 circuit-bg opacity-5 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakAIContact;
