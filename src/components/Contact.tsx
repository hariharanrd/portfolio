import { DATA } from "../constants";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <footer id="contact" className="py-24 px-4 bg-bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-5xl font-bold font-display">Lets synchronize.</h2>
          <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
            Interested in speaking with me? Reach out.
          </p>
          
          <div className="space-y-4">
            <a href={`mailto:${DATA.email}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
              <div className="p-2 transition-colors group-hover:bg-accent/10 group-hover:text-accent rounded-lg border border-transparent group-hover:border-accent/20">
                <Mail size={20} />
              </div>
              <span className="font-mono text-sm">{DATA.email}</span>
            </a>
            <div className="flex items-center gap-3 text-gray-300">
               <div className="p-2 rounded-lg border border-transparent">
                <MapPin size={20} className="text-gray-500" />
              </div>
              <span className="font-mono text-sm">{DATA.location}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end items-start md:items-end gap-12">
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/hariharanrd/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-2xl hover:border-accent/40 transition-all text-gray-400 hover:text-white"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/thisishariharand/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-2xl hover:border-accent/40 transition-all text-gray-400 hover:text-white"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <div className="text-left md:text-right">
            <p className="font-mono text-[10px] text-gray-600 uppercase tracking-[0.3em] mb-4">Architected by</p>
            <p className="text-xl font-display font-bold text-white mb-2">{DATA.name}</p>
            <p className="text-sm text-gray-500 font-mono">Senior Software Engineer</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-mono text-gray-600">© 2024 DESIGNED FOR SCALE</p>
        <div className="flex gap-8">
           <a href="#work" className="text-[10px] font-mono text-gray-600 hover:text-white transition-colors">WORK HISTORY</a>
           <a href="#stack" className="text-[10px] font-mono text-gray-600 hover:text-white transition-colors">STACK</a>
           <a href="#projects" className="text-[10px] font-mono text-gray-600 hover:text-white transition-colors">PROJECTS</a>
        </div>
      </div>
    </footer>
  );
};
