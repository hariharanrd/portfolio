import { motion } from "motion/react";
import { DATA } from "../constants";

export const Navbar = () => {
  const navItems = ["Work", "Stack", "Projects", "Contact"];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full glass flex items-center gap-8"
    >
      <span className="font-display font-bold text-lg text-white mr-2">H.</span>
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};
