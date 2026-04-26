'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Scene3D from '@/components/Scene3D';

export default function NexusForge() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 25 });

  return (
    <main className="bg-[#050505] text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div className="progress-bar" style={{ scaleX }} />

      <Navbar />
      
      {/* 3D Background Scene */}
      <div className="fixed inset-0 -z-10 opacity-40">
        <Scene3D />
      </div>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-12 text-center text-sm text-gray-500 border-t border-white/10">
        © 2025 NEXUSFORGE • Built with Supreme Precision • Next.js 15 + React Three Fiber
      </footer>
    </main>
  );
}

