import { motion } from "motion/react";
import { DATA } from "../constants";
import { Server, Cloud, Cpu, ShieldCheck } from "lucide-react";

export const Stack = () => {
  return (
    <section id="stack" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Technical Ecosystem</h2>
        <p className="text-gray-400 font-mono text-sm max-w-lg">
          High-availability architecture meets engineering leadership.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        {/* Core Backend */}
        <motion.div 
          whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
          className="md:col-span-8 md:row-span-2 bg-bg-dark p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent/20 rounded-xl text-accent">
                <Server size={24} />
              </div>
              <h3 className="text-2xl font-bold font-display">Core Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {DATA.stack.backend.map(item => (
                <span key={item} className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 text-sm font-mono hover:border-accent/30 transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-between items-end border-t border-white/5 pt-6">
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Performance Priority: Extreme</p>
             <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-4 bg-accent/40 rounded-full" />)}
            </div>
          </div>
        </motion.div>

        {/* Engineering Leadership */}
        <motion.div 
           whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
           className="md:col-span-4 md:row-span-1 bg-bg-dark p-8 flex flex-col justify-center"
        >
          <div className="flex items-center gap-4">
            <div className="p-2 bg-amber-500/20 rounded-lg text-amber-500">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-white">Leadership</h3>
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Reviews & Mentorship</p>
            </div>
          </div>
          <div className="mt-4 text-amber-500/50">
            <span className="text-xs font-mono">20+ Feature Owners</span>
          </div>
        </motion.div>

        {/* Cloud & Infra */}
        <motion.div 
           whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
           className="md:col-span-4 md:row-span-2 bg-bg-dark p-8 flex flex-col justify-between"
        >
          <div>
             <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-500">
                <Cloud size={20} />
              </div>
              <h3 className="text-xl font-bold font-display text-white">Cloud & Infra</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {DATA.stack.infrastructure.map(item => (
                <span key={item} className="px-2 py-1 bg-emerald-500/5 text-emerald-500/80 border border-emerald-500/10 rounded-md text-[10px] font-mono hover:bg-emerald-500/10 transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6 p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/10 text-[10px]">
            <p className="font-mono text-emerald-500/70 uppercase tracking-tight">
              Reliability Focused Architecture
            </p>
          </div>
        </motion.div>

        {/* AI-Native */}
        <motion.div 
           whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
           className="md:col-span-4 md:row-span-1 bg-bg-dark p-8 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="p-2 bg-purple-500/20 rounded-lg text-purple-500">
              <Cpu size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-white">AI Native</h3>
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Agentic RAG</p>
            </div>
          </div>
        </motion.div>

        {/* Engineering Culture */}
        <motion.div 
           whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
           className="md:col-span-4 md:row-span-1 bg-bg-dark p-8 group h-full"
        >
           <h4 className="text-[10px] font-mono text-gray-500 uppercase mb-4 tracking-widest">Engineering Culture</h4>
           <div className="flex flex-wrap gap-x-4 gap-y-2">
            {["Design Reviews", "Peer Pairing", "Mentorship"].map(skill => (
              <span key={skill} className="text-xs text-white/40 group-hover:text-accent font-mono transition-colors">
                {skill}
              </span>
            ))}
           </div>
        </motion.div>
      </div>
    </section>
  );
};
