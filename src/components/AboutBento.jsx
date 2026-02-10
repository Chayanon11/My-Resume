import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiGithub, FiLinkedin, FiMail, FiMusic, FiDownload, FiMonitor, FiGlobe, FiTarget, FiChevronRight } from "react-icons/fi";
import { Modal } from "./Modal";
import Resume from "../assets/CHAYANON_BHARASARN_CV.pdf";
import ChayanonImage2 from "../assets/ChayanonImg2.jpg";

// Images for interests
import Sport from "../assets/MuayThai.jpg";
import MusicImg from "../assets/bass-guitar.jpg";
import Travel from "../assets/Travel.jpg";

const Card = ({ children, className, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    onClick={onClick}
    className={`bg-glass border border-glass-border p-6 rounded-3xl backdrop-blur-md relative overflow-hidden ${onClick ? 'cursor-pointer' : ''} ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    {children}
  </motion.div>
);

// Complete career data from About.jsx
const CAREER_DATA = [
  {
    role: "Full Stack Developer",
    company: "TDM Thai Digital Map",
    period: "June 2024 - Present",
    highlights: [
      "Maintained and enhanced Bangkok Fire and Rescue Department's internal GIS system using Vue.js, Node.js/Express, and PostgreSQL",
      "Implemented interactive mapping features utilizing Leaflet.js, OpenStreetMap, and DeeMap",
      "Optimized geospatial database queries and spatial data management in PostgreSQL",
      "Developed real-time emergency response tracking and visualization features",
      "Engineered RESTful APIs for efficient geospatial data transactions",
      "Integrated third-party mapping services and maintained system documentation",
      "Maintained 95% test coverage across critical GIS components",
    ]
  },
  {
    role: "Developer Trainee",
    company: "TechUp Bangkok",
    period: "Nov 2023 - Mar 2024",
    highlights: [
      "Developed full stack applications emphasizing modern JavaScript frameworks",
      "Created responsive, mobile-first interfaces using Tailwind CSS",
      "Implemented secure authentication and authorization systems",
      "Deployed microservices architecture solutions and maintained documentation",
    ]
  },
  {
    role: "Guest Service Agent",
    company: "Maleewana Hotel & Resort",
    period: "Feb 2022 - Jun 2022",
    highlights: [
      "Delivered exceptional customer service, laying the groundwork for my user-centric approach in tech.",
    ]
  },
];

// Complete tech stack from HireMe.jsx
const TECH_STACK = [
  'React', 'Next.js', 'Vue.js', 'Node.js',
  'Express.js', 'NestJS', 'TypeScript', 'JavaScript',
  'PostgreSQL', 'MongoDB', 'SQL', 'NoSQL',
  'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3',
  'Docker', 'Git', 'Postman', 'Leaflet.js'
];

// Complete interests from Services.jsx
const INTERESTS = [
  {
    title: "Gaming",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg?t=1703123157",
    description: "I really enjoy gaming, especially Dota 2, because it's like a brain workout. It's not just fun; it makes me think fast and work well with others, just like when I'm coding. Dota 2's complex play and teamwork have really improved my planning and problem-solving skills, which are super important in my tech projects.",
    icon: FiMonitor
  },
  {
    title: "Music",
    image: MusicImg,
    description: "Music is a big part of my day, both while I'm working and when I'm chilling out. Listening to tunes helps me concentrate and get more creative with my coding. I also play the bass to relax and express myself in a different way from coding. Mixing the structure of coding with the creativity of music helps me in all parts of my life.",
    icon: FiMusic
  },
  {
    title: "Sports",
    image: Sport,
    description: "Sports are my go-to for taking a break from sitting at a computer. I love playing basketball and tennis because they're fun and keep me active. I also enjoy watching boxing and Muay Thai fights for entertainment and to learn about discipline and strategy. These activities remind me how important it is to keep improving and to stay competitive, just like in my work.",
    icon: FiTarget
  },
  {
    title: "Tech & Travel",
    image: Travel,
    description: "I'm always excited about the newest tech stuff and love to see how it can solve real problems. Traveling is another passion of mine because it opens my eyes to different ways of life and new ideas. Combining tech and travel keeps me inspired and eager to make technology that understands and improves people's lives around the world.",
    icon: FiGlobe
  }
];

export const AboutBento = () => {
  const [careerModalOpen, setCareerModalOpen] = useState(false);
  const [interestsModalOpen, setInterestsModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState(null);

  return (
    <>
      <div className="min-h-screen bg-obsidian text-primary-text py-20 px-4 md:px-12 flex items-center justify-center font-space">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-4 auto-rows-auto md:grid-rows-5 gap-4">

          {/* 1. Profile Photo */}
          <Card className="md:col-span-1 md:row-span-2 flex items-center justify-center p-2 min-h-[250px]">
            <img
              src={ChayanonImage2}
              alt="Chayanon Bharasarn"
              className="w-full h-full object-cover rounded-2xl"
            />
          </Card>

          {/* 2. Bio & Intro (Large) */}
          <Card className="md:col-span-2 md:row-span-2 flex flex-col justify-between min-h-[250px]">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-secondary-text mb-2">Introduction</h2>
              <h1 className="text-2xl md:text-4xl font-bold font-syne leading-tight">
                Hello! I'm Chayanon, a <span className="text-cyber-cyan">Full-Stack Developer</span>
              </h1>
            </div>
            <p className="text-secondary-text text-sm md:text-base">
              Passionate about blending educational experiences with technology to create intuitive web applications.
              My journey in technology has been marked by continuous learning and growth.
              Currently building GIS systems for Bangkok Fire & Rescue Department.
            </p>
          </Card>

          {/* 3. Location */}
          <Card className="md:col-span-1 md:row-span-1 flex flex-col items-center justify-center bg-zinc-900 group min-h-[120px]">
            <div className="text-4xl md:text-5xl text-gray-700 group-hover:text-cyber-cyan transition-colors duration-500">
              <FiMapPin />
            </div>
            <p className="mt-2 font-bold text-sm">Bangkok, Thailand</p>
            <p className="text-xs text-secondary-text">GMT+7</p>
          </Card>

          {/* 4. Status + Download Resume */}
          <Card className="md:col-span-1 md:row-span-1 flex items-center justify-between min-h-[120px]">
            <div>
              <div className="text-sm text-secondary-text">Status</div>
              <div className="text-lg md:text-xl font-bold text-green-400">Available</div>
            </div>
            <a
              href={Resume}
              download="ChayanonResume.pdf"
              className="flex items-center gap-2 bg-cyber-cyan/20 hover:bg-cyber-cyan/40 px-3 py-2 rounded-full transition-colors"
            >
              <FiDownload className="text-cyber-cyan" />
              <span className="text-xs font-bold text-cyber-cyan">CV</span>
            </a>
          </Card>

          {/* 5. Tech Stack Ticker */}
          <Card className="md:col-span-1 md:row-span-2 flex flex-col overflow-hidden relative min-h-[250px]">
            <h2 className="text-sm uppercase tracking-widest text-secondary-text mb-4">Tech Stack</h2>
            <div className="flex-1 overflow-hidden relative mask-linear">
              <div className="absolute animate-marquee py-2 flex flex-col gap-3 text-base md:text-lg font-bold text-gray-500 select-none">
                {TECH_STACK.map(tech => (
                  <span key={tech} className="hover:text-cyber-cyan transition-colors cursor-default">{tech}</span>
                ))}
                {TECH_STACK.map(tech => (
                  <span key={tech + '2'} className="hover:text-cyber-cyan transition-colors cursor-default">{tech}</span>
                ))}
              </div>
            </div>
          </Card>

          {/* 6. Experience / Career Path - Clickable */}
          <Card
            className="md:col-span-2 md:row-span-2 overflow-hidden min-h-[250px]"
            onClick={() => setCareerModalOpen(true)}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm uppercase tracking-widest text-secondary-text">Career Path</h2>
              <span className="text-xs text-cyber-cyan flex items-center gap-1">
                View Details <FiChevronRight />
              </span>
            </div>
            <div className="space-y-4">
              {CAREER_DATA.map((job, i) => (
                <div key={i} className="border-l-2 border-glass-border pl-4 hover:border-cyber-cyan transition-colors group">
                  <h3 className="font-bold text-sm md:text-base group-hover:text-cyber-cyan transition-colors">{job.role}</h3>
                  <div className="text-secondary-text text-xs md:text-sm flex justify-between">
                    <span>{job.company}</span>
                    <span className="text-cyber-cyan/70">{job.period}</span>
                  </div>
                  <p className="text-xs text-secondary-text/60 mt-1 line-clamp-1">
                    {job.highlights[0]}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* 7. Interests Grid - Clickable */}
          <Card
            className="md:col-span-1 md:row-span-2 flex flex-col min-h-[250px]"
            onClick={() => setInterestsModalOpen(true)}
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm uppercase tracking-widest text-secondary-text">Interests</h2>
              <span className="text-xs text-cyber-cyan flex items-center gap-1">
                <FiChevronRight />
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 flex-1">
              {INTERESTS.map((interest, i) => (
                <div
                  key={i}
                  className="relative rounded-xl overflow-hidden group cursor-pointer aspect-square"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedInterest(interest);
                  }}
                >
                  <img src={interest.image} alt={interest.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <interest.icon className="text-white text-xl" />
                  </div>
                  <p className="absolute bottom-1 left-0 right-0 text-center text-[10px] text-white font-bold">
                    {interest.title}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* 8. Socials */}
          <Card className="md:col-span-1 md:row-span-1 flex items-center justify-center gap-6 text-2xl md:text-3xl min-h-[120px]">
            <a href="https://github.com/Chayanon11" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-cyan transition-colors">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/chayanon-bharasarn-a516b8246/" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-cyan transition-colors">
              <FiLinkedin />
            </a>
            <a href="mailto:neung0511@gmail.com" className="hover:text-cyber-cyan transition-colors">
              <FiMail />
            </a>
          </Card>

        </div>

        <style>{`
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .custom-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .custom-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .line-clamp-1 {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>

      {/* Career Details Modal */}
      <Modal isOpen={careerModalOpen} onClose={() => setCareerModalOpen(false)} title="My Career Path">
        <div className="space-y-8">
          {CAREER_DATA.map((job, i) => (
            <div key={i} className="border-l-4 border-cyber-cyan pl-6">
              <h3 className="font-bold text-xl text-white font-syne">{job.role}</h3>
              <div className="text-cyber-cyan text-sm mb-3">
                {job.company} • {job.period}
              </div>
              <ul className="space-y-2">
                {job.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-secondary-text">
                    <span className="text-cyber-cyan mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Modal>

      {/* Interests Modal */}
      <Modal isOpen={interestsModalOpen} onClose={() => setInterestsModalOpen(false)} title="My Interests">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INTERESTS.map((interest, i) => (
            <div
              key={i}
              className="bg-glass border border-glass-border rounded-2xl overflow-hidden cursor-pointer hover:border-cyber-cyan transition-colors"
              onClick={() => {
                setInterestsModalOpen(false);
                setSelectedInterest(interest);
              }}
            >
              <img src={interest.image} alt={interest.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-white font-syne flex items-center gap-2">
                  <interest.icon className="text-cyber-cyan" />
                  {interest.title}
                </h3>
                <p className="text-secondary-text text-sm mt-2 line-clamp-2">{interest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Modal>

      {/* Single Interest Detail Modal */}
      <Modal
        isOpen={selectedInterest !== null}
        onClose={() => setSelectedInterest(null)}
        title={selectedInterest?.title || ''}
      >
        {selectedInterest && (
          <div>
            <img
              src={selectedInterest.image}
              alt={selectedInterest.title}
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <p className="text-secondary-text text-lg leading-relaxed">
              {selectedInterest.description}
            </p>
          </div>
        )}
      </Modal>
    </>
  );
};
