import { useEffect } from "react";
import Lenis from "lenis";
import { HeaderComponent } from "../components/Header";
import { HeroComponent } from "../components/Hero";
import { AboutBento } from "../components/AboutBento";
import { SkillsPhysics } from "../components/SkillsPhysics";
import { ProjectGallery } from "../components/ProjectGallery";
import { FloatingDock } from "../components/FloatingDock";

export function HomePage() {
  
  useEffect(() => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
    });
    
    window.lenis = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
        lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-obsidian min-h-screen">
      <FloatingDock />
      <div id="home"><HeroComponent /></div>
      <div id="about"><AboutBento /></div>
      <div id="skills"><SkillsPhysics /></div>
      <div id="projects"><ProjectGallery /></div>
      <div id="contact" className="min-h-[70vh] flex flex-col items-center justify-center text-white py-20 px-4 border-t border-glass-border">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-space">Get in Touch</h2>
        <h1 className="text-4xl md:text-7xl font-syne font-bold mb-6 text-center">LET'S WORK TOGETHER</h1>
        <p className="text-gray-400 font-space max-w-lg text-center mb-10">
          Feel free to reach out for collaborations or just a friendly hello!
          I'm always open to discussing new opportunities and interesting projects.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-10 text-center">
          <div className="text-secondary-text font-space">
            <span className="text-cyber-cyan">Email:</span> neung0511@gmail.com
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
          <a
            href="mailto:neung0511@gmail.com"
            className="flex items-center gap-2 bg-cyber-cyan hover:bg-cyber-cyan/80 text-obsidian px-6 py-3 rounded-full transition-colors font-bold"
          >
            <span className="font-space">Email Me</span>
          </a>
          <a
            href="https://github.com/Chayanon11"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-colors border border-white/20"
          >
            <span className="text-white font-space">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/chayanon-bharasarn-a516b8246/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-colors border border-white/20"
          >
            <span className="text-white font-space">LinkedIn</span>
          </a>
        </div>

        <p className="text-gray-600 font-space text-sm mt-16">
          © 2026 Chayanon Bharasarn.
        </p>
      </div>
    </div>
  );
}
