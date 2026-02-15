
import React from 'react';
import { motion } from 'framer-motion';

const PcelaDomainStrength: React.FC = () => {
  return (
    <section className="py-24 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
             <motion.div 
               initial={{ rotate: -5 }}
               whileInView={{ rotate: 0 }}
               className="bg-white p-4 rounded-3xl shadow-2xl relative z-10"
             >
                <img 
                  src="https://images.unsplash.com/photo-1587334274328-64186a80aeee?auto=format&fit=crop&q=80&w=800" 
                  alt="Beekeeping" 
                  className="rounded-2xl w-full h-[450px] object-cover"
                />
             </motion.div>
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400 rounded-full blur-[80px] opacity-30"></div>
          </div>

          <div className="lg:w-1/2">
             <span className="text-green-600 font-poppins font-bold tracking-widest text-sm uppercase mb-4 block">Strategic Value</span>
             <h2 className="text-5xl font-organic font-bold text-amber-900 mb-8">The Gold Standard for Beekeeping</h2>
             
             <div className="space-y-8">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-2xl shrink-0">🌏</div>
                 <div>
                   <h4 className="text-xl font-poppins font-bold text-amber-900 mb-1">Slavic Language Authority</h4>
                   <p className="text-gray-500 leading-relaxed">"Pcela" means Bee in Serbian, Macedonian, Croatian, and Bosnian, providing instant regional recognition to millions.</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-2xl shrink-0">⭐</div>
                 <div>
                   <h4 className="text-xl font-poppins font-bold text-amber-900 mb-1">Non-Profit Credibility</h4>
                   <p className="text-gray-500 leading-relaxed">The .ORG extension establishes deep trust for associations, foundations, and community-driven platforms.</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-2xl shrink-0">📈</div>
                 <div>
                   <h4 className="text-xl font-poppins font-bold text-amber-900 mb-1">Sustainable Growth</h4>
                   <p className="text-gray-500 leading-relaxed">The organic and honey market is experiencing unprecedented growth. Secure a generic keyword domain before it's gone.</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PcelaDomainStrength;
