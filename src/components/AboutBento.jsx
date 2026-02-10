import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiGithub, FiLinkedin, FiMail, FiMusic, FiDownload, FiMonitor, FiGlobe, FiTarget, FiChevronRight, FiX } from "react-icons/fi";
import { Modal } from "./Modal";
import Resume from "../assets/CHAYANON_BHARASARN_CV.pdf";
import ChayanonImage2 from "../assets/my-pho.jpg";

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
    company: "Betimes Solutions",
    period: "Jun 2025 - Present",
    projects: [
      {
        name: "MAILMERGE API",
        highlights: [
          "Built a Mail Merge API with .NET 8 that turns JSON data into Word documents automatically",
          "Created a flexible config system so templates can be easily customized without code changes",
          "Added cool features like repeating sections, HTML content, and image embedding into documents",
          "Built export tools for XML, CSV, Excel, and JSON - whatever format the client needs",
          "Made it handle large documents smoothly without eating up memory",
          "Set up Docker containers and automated deployment scripts for easy releases",
          "Created clean API endpoints with full Swagger docs so other devs can integrate easily",
        ]
      },
      {
        name: "ERP-AUDIT MANAGEMENT SYSTEM",
        highlights: [
          "Working on a Government Audit System using Angular 16 and .NET 6",
          "Built a document engine that generates official reports with digital signatures",
          "Set up approval workflows where auditors and directors can review and sign off on reports",
          "Created interactive dashboards for tracking audits in real-time",
          "Optimized slow database queries to make the app faster",
          "Fixed date formatting to work with Thai Buddhist calendar (this was trickier than expected!)",
          "Squashed some nasty bugs where documents would fail when multiple users edited at once",
          "Implemented secure login with OAuth2 and role-based permissions",
        ]
      }
    ]
  },
  {
    role: "Full Stack Developer",
    company: "TDM Thai Digital Map",
    period: "Jun 2024 - Jun 2025",
    projects: [
      {
        name: "Bangkok Fire & Rescue GIS System",
        highlights: [
          "Built and maintained a map-based system for Bangkok Fire Department using Vue.js and Node.js",
          "Added interactive maps with Leaflet.js so dispatchers can see incidents in real-time",
          "Made the map queries faster by optimizing how we store and fetch location data",
          "Built features to track emergency vehicles and show them on the map live",
          "Created APIs to handle all the map and location data",
          "Connected with external mapping services and kept everything well-documented",
          "Kept test coverage at 95% to make sure nothing breaks",
        ]
      }
    ]
  },
  {
    role: "Developer Trainee",
    company: "TechUp Bangkok",
    period: "Nov 2023 - Mar 2024",
    projects: [
      {
        name: "Full Stack Training Program",
        highlights: [
          "Learned to build web apps with React, Vue, and other modern frameworks",
          "Got hands-on with responsive design using Tailwind CSS",
          "Built login systems with proper security (auth tokens, password hashing, etc.)",
          "Worked on microservices projects and learned how to document code properly",
        ]
      }
    ]
  },
  {
    role: "Guest Service Agent",
    company: "Maleewana Hotel & Resort",
    period: "Feb 2022 - Jun 2022",
    projects: [
      {
        name: "Hospitality Operations",
        highlights: [
          "Worked in customer service - this taught me how to think from the user's perspective, which helps a lot in building better software!",
        ]
      }
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

// Career Modal - Custom styled to match ProjectModal
const CareerModal = ({ isOpen, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] overflow-hidden"
      onWheel={(e) => e.stopPropagation()}
    >
      {/* Backdrop - pointer-events-none so it doesn't capture scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm pointer-events-none"
      />

      {/* Click catcher for closing */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* Modal Container - Centers the modal */}
      <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-obsidian border border-glass-border rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] shadow-2xl flex flex-col pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Image Area */}
          <div className="relative h-32 sm:h-40 md:h-56 flex-shrink-0 overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
            {/* Abstract Tech Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/20 via-electric-violet/20 to-obsidian" />
            <div className="absolute inset-0 opacity-20"
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors z-20 group"
            >
              <FiX className="text-white text-lg sm:text-xl group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-10">
              <p className="text-xs sm:text-sm font-space uppercase tracking-widest mb-1 sm:mb-2 text-cyber-cyan">
                Professional Journey
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-syne font-bold text-white">Career Path</h2>
            </div>
          </div>

          {/* Content - Scrollable */}
          <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 md:p-8">
          <div className="relative">
            {/* Vertical Timeline Line - Always on the left */}
            <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-cyan/50 via-cyber-cyan/30 to-transparent" />

            <div className="space-y-6 sm:space-y-8">
              {CAREER_DATA.map((job, i) => (
                <div key={i} className="relative pl-10 sm:pl-12">

                  {/* Timeline Dot - Always on the left */}
                  <div className="absolute left-0 top-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-glass-border bg-obsidian shadow z-10">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-cyber-cyan rounded-full animate-pulse shadow-[0_0_10px_#00F0FF]" />
                  </div>

                  {/* Content Card - Full width */}
                  <div className="p-4 sm:p-6 bg-black/90 border border-glass-border rounded-xl hover:border-cyber-cyan transition-all duration-300 shadow-lg backdrop-blur-md hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:bg-glass/30">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2 border-b border-white/5 pb-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-syne">{job.role}</h3>
                        <div className="text-cyber-cyan text-xs sm:text-sm mt-1 font-space">{job.company}</div>
                      </div>
                      <span className="text-[10px] sm:text-xs font-space bg-cyber-cyan/10 text-cyber-cyan px-2 sm:px-3 py-1 rounded-full whitespace-nowrap w-fit border border-cyber-cyan/20 flex-shrink-0">
                        {job.period}
                      </span>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      {job.projects.map((project, pIdx) => (
                        <div key={pIdx} className="bg-black/40 rounded-lg p-3 sm:p-4 border border-white/5 hover:border-white/10 transition-colors">
                          <h4 className="font-bold text-white text-xs sm:text-sm mb-2 sm:mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-electric-violet rounded-full shadow-[0_0_8px_#7000FF] flex-shrink-0"></span>
                            <span>{project.name}</span>
                          </h4>
                          <ul className="space-y-1.5 sm:space-y-2">
                            {project.highlights.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-secondary-text text-xs sm:text-sm leading-relaxed">
                                <span className="text-white/20 mt-1.5 text-[6px] flex-shrink-0">●</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

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
          <Card className="md:col-span-2 md:row-span-2 flex flex-col gap-4 min-h-[250px]">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-secondary-text mb-2">Introduction</h2>
              <h1 className="text-2xl md:text-4xl font-bold font-syne leading-tight">
                Hello! I'm Chayanon, a <span className="text-cyber-cyan">Full-Stack Developer</span>
              </h1>
            </div>
            <p className="text-secondary-text text-sm md:text-base">
              I love turning ideas into real products that people actually enjoy using.
              Started my dev journey in 2023 and haven't stopped learning since.
              Right now I'm building document automation tools and enterprise systems.
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
                    {job.projects.map(p => p.name).join(' • ')}
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
          .modal-scrollbar {
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            touch-action: pan-y;
            scroll-behavior: smooth;
          }
          .modal-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .modal-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 3px;
          }
          .modal-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(0, 240, 255, 0.3);
            border-radius: 3px;
          }
          .modal-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 240, 255, 0.5);
          }
          @media (hover: none) {
            .modal-scrollbar::-webkit-scrollbar {
              width: 3px;
            }
          }
        `}</style>
      </div>

      <CareerModal isOpen={careerModalOpen} onClose={() => setCareerModalOpen(false)} />

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
