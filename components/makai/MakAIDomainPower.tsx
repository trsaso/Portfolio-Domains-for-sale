
import React from 'react';
import { motion } from 'framer-motion';

const MakAIDomainPower: React.FC = () => {
  return (
    <section className="py-24 bg-[#020617] border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2">
            <h4 className="font-mono text-cyan-400 text-xs font-bold uppercase tracking-[0.4em] mb-4">Domain DNA</h4>
            <h2 className="text-5xl md:text-7xl font-space font-bold text-white mb-10 tracking-tighter leading-none">
              The <span className="ai-glow-text">Golden Architecture</span>
            </h2>
            
            <div className="space-y-12">
               <div className="flex items-start gap-8">
                  <div className="text-4xl font-space font-black text-slate-800">01</div>
                  <div>
                    <h3 className="text-2xl font-space font-bold text-white mb-2">MAK = Macedonia</h3>
                    <p className="text-slate-500 leading-relaxed font-space">The ultimate national prefix. Instantly identifies the platform as the country's primary AI authority.</p>
                  </div>
               </div>
               <div className="flex items-start gap-8">
                  <div className="text-4xl font-space font-black text-slate-800">02</div>
                  <div>
                    <h3 className="text-2xl font-space font-bold text-white mb-2">AI = Intelligence</h3>
                    <p className="text-slate-500 leading-relaxed font-space">The most sought-after tech keyword of the decade. Guaranteed high organic authority and instant brand value.</p>
                  </div>
               </div>
               <div className="flex items-start gap-8">
                  <div className="text-4xl font-space font-black text-slate-800">03</div>
                  <div>
                    <h3 className="text-2xl font-space font-bold text-white mb-2">.MK = Local Credibility</h3>
                    <p className="text-slate-500 leading-relaxed font-space">Local domain extension ensures governmental trust, SEO optimization, and national strategic alignment.</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
             <div className="relative">
                {/* Visual Representation of the Domain Name */}
                <motion.div 
                  initial={{ rotateY: -20 }}
                  whileInView={{ rotateY: 0 }}
                  viewport={{ once: true }}
                  className="p-16 glass-card rounded-3xl border-purple-500/20 shadow-[0_0_100px_rgba(124,58,237,0.1)] flex flex-col items-center justify-center text-center"
                >
                   <div className="flex items-baseline space-x-2 mb-8">
                      <span className="text-8xl font-space font-bold text-white">Mak</span>
                      <span className="text-8xl font-space font-bold ai-glow-text">AI</span>
                      <span className="text-4xl font-space font-light text-slate-600">.mk</span>
                   </div>
                   <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>
                   <p className="font-mono text-[10px] text-cyan-400 uppercase tracking-[0.5em]">Branding Score: 9.9/10</p>
                </motion.div>

                {/* Decorative glowing lines around card */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 blur-[80px] rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/10 blur-[80px] rounded-full"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakAIDomainPower;
