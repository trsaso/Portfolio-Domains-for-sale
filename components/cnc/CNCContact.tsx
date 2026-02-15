
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CNCContact: React.FC = () => {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl">
          
          <div className="lg:w-2/5 p-12 bg-sky-600 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-industrial font-bold mb-6 uppercase tracking-tighter leading-none">
                Engineer Your <br className="hidden md:block"/> Digital Legacy
              </h2>
              <p className="font-tech text-white/80 mb-8 leading-relaxed">
                Inquire about the CNC.mk premium domain asset. Available for acquisition or joint venture for authorized industrial groups.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center group-hover:bg-white/20 transition-all">
                    📏
                  </div>
                  <div className="font-tech uppercase tracking-widest text-xs">
                    <p className="text-white/40">Domain Class</p>
                    <p className="font-bold">Ultra-Premium 3L.MK</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center group-hover:bg-white/20 transition-all">
                    ⚙️
                  </div>
                  <div className="font-tech uppercase tracking-widest text-xs">
                    <p className="text-white/40">Market Sector</p>
                    <p className="font-bold">Macedonian Industry 4.0</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-12 text-[10px] font-orbitron text-white/40 uppercase tracking-[0.2em]">
              Precision Assets Division
            </div>
          </div>

          <div className="lg:w-3/5 p-12 relative overflow-hidden">
            {/* Blueprint grid background subtle */}
            <div className="blueprint-grid absolute inset-0 opacity-5 pointer-events-none"></div>

            {sent ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-20 h-20 bg-sky-500/20 rounded-full flex items-center justify-center text-3xl animate-bounce">
                  ✅
                </div>
                <h3 className="text-2xl font-industrial text-white uppercase tracking-wider">Transmission Successful</h3>
                <p className="text-zinc-500 font-tech">Our technical team will review your inquiry and respond via secure channels.</p>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-orbitron font-bold text-zinc-500 uppercase tracking-widest">Full Name / Entity</label>
                    <input required className="w-full bg-zinc-900 border border-zinc-800 rounded-none px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-all font-tech" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-orbitron font-bold text-zinc-500 uppercase tracking-widest">Business Email</label>
                    <input required type="email" className="w-full bg-zinc-900 border border-zinc-800 rounded-none px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-all font-tech" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-orbitron font-bold text-zinc-500 uppercase tracking-widest">Inquiry Type</label>
                  <select className="w-full bg-zinc-900 border border-zinc-800 rounded-none px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-all font-tech appearance-none">
                    <option>Asset Acquisition (Purchase)</option>
                    <option>Leasing Opportunity</option>
                    <option>Development Partnership</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-orbitron font-bold text-zinc-500 uppercase tracking-widest">Technical Message / Offer</label>
                  <textarea rows={4} className="w-full bg-zinc-900 border border-zinc-800 rounded-none px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-all font-tech resize-none"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-white text-black font-orbitron font-bold text-xs uppercase tracking-[0.2em] hover:bg-sky-500 hover:text-white transition-all active:scale-95 shadow-xl">
                  EXECUTE TRANSMISSION
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CNCContact;
