
import React from 'react';
import { motion } from 'framer-motion';

const MakAITechShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-[#020617] border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-space font-bold text-white mb-16 uppercase tracking-tighter">
           Built for <span className="ai-glow-text">All Architectures</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-12">
           {[
             { label: "Deep Learning", val: "Neural Nets", icon: "🧠" },
             { label: "Computer Vision", val: "Edge AI", icon: "👁️" },
             { label: "Natural Language", val: "Cyrillic NLP", icon: "🗣️" },
             { label: "Robotics", val: "Industry 4.0", icon: "🤖" },
             { label: "Data Science", val: "Big Data", icon: "📊" },
             { label: "Generative AI", val: "LLM Ready", icon: "✨" }
           ].map((tech, i) => (
             <motion.div
               key={i}
               whileHover={{ y: -5, scale: 1.05 }}
               className="w-40 p-6 glass-card border-none hover:bg-white/5 transition-all cursor-pointer"
             >
                <div className="text-3xl mb-4">{tech.icon}</div>
                <h4 className="font-space font-bold text-white text-sm uppercase mb-1">{tech.label}</h4>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{tech.val}</p>
             </motion.div>
           ))}
        </div>

        <div className="mt-24 relative max-w-5xl mx-auto">
           {/* Code Editor Mockup Glimpse */}
           <div className="bg-[#0f172a] rounded-t-xl border border-white/10 p-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <div className="ml-4 text-[10px] font-mono text-slate-500">makai_model_trainer.py</div>
           </div>
           <div className="bg-[#020617] rounded-b-xl border-x border-b border-white/10 p-8 text-left font-mono text-sm overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="space-y-1"
              >
                <p className="text-purple-400">import <span className="text-white">makai</span> as <span className="text-white">ai</span></p>
                <p className="text-slate-500 mt-4"># Initializing Macedonian Language Model</p>
                <p className="text-white">model = ai.<span className="text-cyan-400">load_llm</span>(<span className="text-pink-400">"mak-bert-base-v1"</span>)</p>
                <p className="text-white">results = model.<span className="text-cyan-400">predict</span>(input_text=<span className="text-pink-400">"Иднината е тука."</span>)</p>
                <p className="text-green-400 mt-4">&gt; Processing data on Skopje Node 01...</p>
                <p className="text-green-400">&gt; Accuracy: 99.98%</p>
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MakAITechShowcase;
