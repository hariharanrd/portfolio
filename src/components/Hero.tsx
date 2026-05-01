import { motion } from "motion/react";
import { DATA } from "../constants";
import { ArrowRight, Download, Terminal } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center space-y-6 max-w-4xl"
      >
        <div className="px-4 py-1 rounded-full glass border-accent/20 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">
            {DATA.status}
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
          Architecting <span className="text-accent">Critical</span> Systems.
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl font-sans leading-relaxed">
          {DATA.summary}
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-8 bg-gradient-to-b from-white to-transparent"
        />
      </motion.div>
    </section>
  );
};
