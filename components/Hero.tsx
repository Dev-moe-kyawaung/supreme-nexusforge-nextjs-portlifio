'use client';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-5xl mx-auto text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-7xl md:text-[6.5rem] font-bold leading-none tracking-tighter mb-6 gradient-text"
        >
          I CRAFT<br />DIGITAL<br />EXCELLENCE
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-3xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Full-Stack Architect • 3D Experience Designer • Systems Thinker
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex gap-6 justify-center"
        >
          <a href="#projects" className="px-10 py-4 glass rounded-2xl hover:bg-white/10 transition-all font-medium flex items-center gap-3">
            View Supreme Work
          </a>
          <a href="#contact" className="px-10 py-4 bg-white text-black rounded-2xl hover:scale-105 transition-all font-medium">
            Start a Project
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown size={32} className="text-primary/70" />
      </motion.div>
    </section>
  );
}

