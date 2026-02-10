import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiThreedotjs, SiNextdotjs, SiVuedotjs, SiAngular,
  SiTypescript, SiJavascript, SiTailwindcss, SiFramer,
  SiNodedotjs, SiDotnet, SiSpring, SiPostgresql, SiMongodb,
  SiDocker, SiGit, SiAmazonaws, SiOracle, SiGithubactions
} from 'react-icons/si';

// Skills with icons
const SKILLS = [
  // Frontend
  { name: "React", category: "frontend", icon: SiReact },
  { name: "Three.js", category: "frontend", icon: SiThreedotjs },
  { name: "Next.js", category: "frontend", icon: SiNextdotjs },
  { name: "Vue.js", category: "frontend", icon: SiVuedotjs },
  { name: "Angular", category: "frontend", icon: SiAngular },
  { name: "TypeScript", category: "frontend", icon: SiTypescript },
  { name: "JavaScript", category: "frontend", icon: SiJavascript },
  { name: "Tailwind", category: "design", icon: SiTailwindcss },
  { name: "Framer", category: "design", icon: SiFramer },

  // Backend
  { name: "Node.js", category: "backend", icon: SiNodedotjs },
  { name: "C#.NET", category: "backend", icon: SiDotnet },
  { name: "SpringBoot", category: "backend", icon: SiSpring },
  { name: "PostgreSQL", category: "backend", icon: SiPostgresql },
  { name: "MongoDB", category: "backend", icon: SiMongodb },
  { name: "Oracle DB", category: "backend", icon: SiOracle },

  // Tools & DevOps
  { name: "Docker", category: "devops", icon: SiDocker },
  { name: "Git", category: "devops", icon: SiGit },
  { name: "AWS", category: "devops", icon: SiAmazonaws },
  { name: "GitHub Actions", category: "devops", icon: SiGithubactions },
];

const CATEGORY_STYLES = {
  frontend: {
    gradient: "from-cyan-400 to-blue-500",
    glow: "rgba(0, 240, 255, 0.6)",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400"
  },
  backend: {
    gradient: "from-violet-500 to-purple-600",
    glow: "rgba(139, 92, 246, 0.6)",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    text: "text-violet-400"
  },
  design: {
    gradient: "from-pink-500 to-rose-500",
    glow: "rgba(236, 72, 153, 0.6)",
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
    text: "text-pink-400"
  },
  devops: {
    gradient: "from-emerald-400 to-teal-500",
    glow: "rgba(52, 211, 153, 0.6)",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400"
  },
};

const CATEGORY_LABELS = {
  frontend: "Frontend",
  backend: "Backend",
  design: "Design",
  devops: "DevOps"
};

export const SkillsPhysics = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleClick = (skillName) => {
    setActiveSkill(activeSkill === skillName ? null : skillName);
  };

  // Group skills by category
  const groupedSkills = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="w-full py-20 md:py-32 bg-obsidian relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/5 to-transparent" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,240,255,0.5) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header - Original Style */}
        <motion.div
          className="text-center mb-16 pointer-events-none select-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary-text text-5xl md:text-8xl font-syne font-black uppercase mb-2 opacity-10 tracking-tighter">
            My Toolkit
          </h2>
          <p className="text-secondary-text font-space text-sm opacity-50">
            Click to highlight
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, skills], categoryIndex) => {
            const categoryStyle = CATEGORY_STYLES[category];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                {/* Category Label */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`h-px flex-1 bg-gradient-to-r ${categoryStyle.gradient} opacity-30`} />
                  <span className={`font-space text-sm uppercase tracking-widest ${categoryStyle.text}`}>
                    {CATEGORY_LABELS[category]}
                  </span>
                  <div className={`h-px flex-1 bg-gradient-to-l ${categoryStyle.gradient} opacity-30`} />
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    const isActive = activeSkill === skill.name;
                    const hasActiveSkill = activeSkill !== null;
                    const isDimmed = hasActiveSkill && !isActive;

                    return (
                      <motion.button
                        key={skill.name}
                        onClick={() => handleClick(skill.name)}
                        className={`
                          relative group px-5 py-3 rounded-2xl border backdrop-blur-sm
                          transition-all duration-300 cursor-pointer
                          ${categoryStyle.bg} ${categoryStyle.border}
                          ${isDimmed ? 'opacity-30 scale-95' : 'opacity-100 scale-100'}
                          ${isActive ? 'ring-2 ring-offset-2 ring-offset-obsidian' : ''}
                        `}
                        style={{
                          boxShadow: isActive ? `0 0 40px ${categoryStyle.glow}, 0 0 80px ${categoryStyle.glow}` : 'none',
                          ringColor: isActive ? categoryStyle.glow : 'transparent'
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{
                          scale: isDimmed ? 0.95 : 1.05,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Glow effect on hover */}
                        <div
                          className={`
                            absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            ${isActive ? 'opacity-100' : ''}
                          `}
                          style={{
                            background: `radial-gradient(circle at center, ${categoryStyle.glow.replace('0.6', '0.15')}, transparent 70%)`
                          }}
                        />

                        <div className="relative flex items-center gap-3">
                          <Icon
                            size={22}
                            className={`
                              transition-all duration-300
                              ${isActive ? categoryStyle.text : 'text-gray-400 group-hover:' + categoryStyle.text}
                            `}
                            style={{
                              filter: isActive ? `drop-shadow(0 0 8px ${categoryStyle.glow})` : 'none'
                            }}
                          />
                          <span className={`
                            font-space font-medium text-sm md:text-base
                            transition-colors duration-300
                            ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}
                          `}>
                            {skill.name}
                          </span>
                        </div>

                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skill count */}
        <motion.div
          className="text-center mt-16 text-secondary-text font-space text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-cyber-cyan font-bold">{SKILLS.length}</span> technologies & growing
        </motion.div>
      </div>
    </div>
  );
};
