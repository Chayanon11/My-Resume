import React from "react";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiCode, FiLayers, FiMail } from "react-icons/fi";

const DOCK_ITEMS = [
  { icon: FiHome, label: "Home", href: "#home" },
  { icon: FiUser, label: "About", href: "#about" },
  { icon: FiCode, label: "Skills", href: "#skills" },
  { icon: FiLayers, label: "Projects", href: "#projects" },
  { icon: FiMail, label: "Contact", href: "#contact" },
];

export const FloatingDock = () => {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        className="flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full shadow-2xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 120 }}
      >
        {DOCK_ITEMS.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            onClick={(e) => {
                e.preventDefault();
                // Custom scroll handler passed from parent or fallback
                if (window.lenis) {
                    window.lenis.scrollTo(item.href);
                } else {
                    const element = document.querySelector(item.href);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }
            }}
            className="relative group p-3 rounded-full hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <item.icon className="text-white text-xl" />
            
            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};
