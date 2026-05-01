import { motion } from "motion/react";
import { DATA } from "../constants";
import { Briefcase, ChevronRight, ShieldCheck } from "lucide-react";

export const Experience = () => {
  return (
    <section id="work" className="py-24 px-4 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-4xl font-bold mb-2">Work History</h2>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl font-display font-bold text-white tracking-tight">{DATA.name}</p>
            <p className="text-gray-400 font-mono text-sm uppercase tracking-widest flex items-center gap-2">
              <Briefcase size={14} className="text-accent" /> Senior Software Engineer @ Zoho Corporation
            </p>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-white/10 to-transparent" />

          <div className="space-y-12">
            {DATA.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="relative pl-12 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-[32px] h-[32px] -translate-x-1/2 flex items-center justify-center">
                   <div className="w-2.5 h-2.5 rounded-full bg-bg-dark border-2 border-accent group-hover:scale-125 transition-transform z-10" />
                   <div className="absolute inset-0 bg-accent/20 rounded-full blur-sm scale-75 group-hover:scale-110 transition-transform" />
                </div>

                <div className="bento-card relative overflow-hidden">
                   {/* Leadership Badge */}
                   {exp.hasLeadership && (
                    <div className="absolute top-4 right-6 flex items-center gap-2 px-2 py-1 rounded bg-amber-500/10 border border-amber-500/20">
                      <ShieldCheck size={10} className="text-amber-500" />
                      <span className="text-[8px] font-mono text-amber-500 uppercase tracking-widest font-bold">Leadership Active</span>
                    </div>
                  )}

                  {/* Subtle year indicator background */}
                  <div className="absolute top-4 right-6 text-6xl font-display font-black text-white/[0.03] select-none pointer-events-none">
                    {exp.period}
                  </div>

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-accent uppercase tracking-[0.2em]">{exp.period}</span>
                        <div className="h-px w-8 bg-accent/30" />
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-2xl">
                      {exp.description}
                    </p>

                    {exp.metrics && (
                      <div className="flex flex-wrap gap-8 mb-8 pb-6 border-b border-white/5">
                        {exp.metrics.map((m, midx) => (
                          <div key={midx} className="flex flex-col">
                            <span className="text-xl font-bold text-white tracking-tight">{m.value}</span>
                            <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {exp.challenges && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        {exp.challenges.map((c, cidx) => (
                          <div key={cidx} className="flex items-start gap-2 group/item">
                            <ChevronRight size={14} className="mt-1 text-accent/30 group-hover/item:text-accent transition-colors shrink-0" />
                            <p className="text-xs text-gray-400 group-hover/item:text-gray-300 leading-relaxed transition-colors">{c}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
