import { motion } from "motion/react";
import { DATA } from "../constants";
import { ExternalLink, Database, Code2 } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Deep Dive Projects</h2>
        <p className="text-gray-400 font-mono text-sm max-w-lg">
          Focusing on architecture, optimization, and real-world impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {DATA.projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bento-card group flex flex-col h-full"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-accent/40 transition-colors">
                {idx === 0 ? <Database className="text-accent" /> : <Code2 className="text-accent" />}
              </div>
              <ExternalLink size={18} className="text-gray-600 group-hover:text-white transition-all" />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-sm font-mono text-gray-500 mb-6 italic">{project.tldr}</p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Impact</h4>
                  <p className="text-gray-300 text-sm">{project.impact}</p>
                </div>

                <div>
                  <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-3">Challenges Solved</h4>
                  <ul className="flex flex-col gap-2">
                    {project.challenges.map(c => (
                      <li key={c} className="text-xs text-gray-400 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-accent" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="text-[10px] font-mono px-2 py-1 rounded bg-accent/5 text-accent border border-accent/20">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
