import React, { useRef, useState, useEffect } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { FiExternalLink, FiX } from 'react-icons/fi';

// Import project images
import MapToolsImage from "../assets/map-tools-drawning.png";
import PosImage from "../assets/POS-Cashier.png";
import NeatlyHotelImage from "../assets/neatly-hotel-preview.png";
import TaxiImage from "../assets/taxi.png";
import XCloneImage from "../assets/x-clone.png";
import TodoListImage from "../assets/todoList.png";
import GoogleSearchImage from "../assets/GoogleSearch.png";
import ProductCalcImage from "../assets/product-calculator-preview.png";

// Complete projects from Portfolio.jsx with full descriptions
const PROJECTS = [
  {
    id: 1,
    title: "Vue3 Polygon Mapping Tool",
    category: "GIS / Mapping",
    shortDesc: "A versatile map tool with Vue 3 for drawing & managing polygons on 2D/3D maps.",
    fullDesc: "A versatile map tool built with Vue 3 that enables users to draw, edit, and manage polygons on both 2D and 3D maps. The application uses Leaflet for 2D mapping with OpenStreetMap data and Cesium for immersive 3D visualization. All polygon data is stored locally in the browser's localStorage, eliminating the need for a backend server. Users can customize polygon properties, export data as GeoJSON, and switch between multiple base map styles.",
    tech: ["Vue 3", "Leaflet.js", "Cesium", "OpenStreetMap", "GeoJSON", "LocalStorage"],
    color: "#00F0FF",
    image: MapToolsImage,
    link: "https://zippy-marshmallow-995683.netlify.app/"
  },
  {
    id: 2,
    title: "POS Cashier App",
    category: "Desktop / Web",
    shortDesc: "POS system for browser & desktop using Next.js 14, Tailwind, TypeScript, and Electron.",
    fullDesc: "POS Cashier for Browser And Desktop App: This project using NextJs 14, Tailwind Css, Typescript, Electron that can be used on both browser and desktop. The user can login and use the POS system to manage their products and sales.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Electron", "Desktop App"],
    credentials: "Login: 1111",
    color: "#FF004D",
    image: PosImage,
    link: "https://cozy-naiad-830c4d.netlify.app"
  },
  {
    id: 3,
    title: "Neatly Hotel",
    category: "Booking Platform",
    shortDesc: "Hotel booking website with Next.js, Tailwind CSS, Prisma, and Supabase.",
    fullDesc: "The project is a hotel booking website that allows users to book a room and view the hotel's information. The project is built with Next.js, Tailwind CSS, Prisma and Supabase.",
    tech: ["Next.js", "Tailwind CSS", "Prisma", "Supabase", "PostgreSQL"],
    credentials: "username: admin123, password: 123456",
    color: "#7000FF",
    image: NeatlyHotelImage,
    link: "https://grand-final-project-neatly-hotel-teal.vercel.app/"
  },
  {
    id: 4,
    title: "Taxi Booking",
    category: "Transport App",
    shortDesc: "Taxi booking app with Next.js 14, Tailwind CSS, TypeScript, and Mapbox.",
    fullDesc: "This project using React NextJs 14 Taxi Booking App: NextJs 14, Tailwind Css, Typescript, Mapbox for interactive map integration and real-time taxi booking features.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Mapbox", "React"],
    color: "#FFD700",
    image: TaxiImage,
    link: "https://taxi-booking-nextjs-nu.vercel.app/"
  },
  {
    id: 5,
    title: "X Clone",
    category: "Social Media",
    shortDesc: "Full-stack social media clone with authentication, image handling, and real-time interactions.",
    fullDesc: "This project demonstrates full-stack capabilities, including authentication, image handling, and real-time interactions, modern web application built with Next.js.",
    tech: ["Next.js", "Authentication", "Image Upload", "Real-time", "Full-Stack"],
    color: "#1DA1F2",
    image: XCloneImage,
    link: "https://x-next-two.vercel.app/"
  },
  {
    id: 6,
    title: "Todo List",
    category: "Productivity",
    shortDesc: "Task management app built with Next.js, Tailwind CSS, Prisma, and MongoDB.",
    fullDesc: "This project is a Todo list website built using Next.js, Tailwind CSS, Prisma, and MongoDB. It enables users to create, update, and delete their tasks efficiently.",
    tech: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB", "CRUD"],
    color: "#10B981",
    image: TodoListImage,
    link: "https://todo-list-zeta-blue.vercel.app/"
  },
  {
    id: 7,
    title: "Google Clone",
    category: "Search Engine",
    shortDesc: "Google Search clone for web and image search using Google API.",
    fullDesc: "The project is a Google Search for website and images that allows users to search for website and image by google Google API. The project is built with Next.js, Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "Google API", "Search Engine"],
    color: "#EA4335",
    image: GoogleSearchImage,
    link: "https://google-next-pied-mu.vercel.app/"
  },
  {
    id: 8,
    title: "Price Calculator",
    category: "Utility",
    shortDesc: "Product price calculator built with vanilla HTML, CSS, and JavaScript.",
    fullDesc: "This project using HTML, CSS, JavaScript to calculate the price of the product. A simple yet effective utility tool.",
    tech: ["HTML5", "CSS3", "JavaScript", "Vanilla JS"],
    color: "#F2F2F2",
    image: ProductCalcImage,
    link: "https://product-price-calculator-chi.vercel.app/"
  }
];

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative h-[450px] w-[350px] md:h-[550px] md:w-[700px] bg-glass border border-glass-border rounded-3xl overflow-hidden cursor-pointer flex-shrink-0 transition-all duration-500 hover:border-white/20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/70 group-hover:bg-black/40 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
        <p className="text-xs md:text-sm font-space uppercase tracking-widest mb-2" style={{ color: project.color }}>
          {project.category}
        </p>
        <h3 className="text-3xl md:text-5xl font-syne font-bold text-white mb-3 leading-none">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm md:text-base max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {project.shortDesc}
        </p>
      </div>

      {/* Hover Reveal Button */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
        style={{ borderColor: project.color, borderWidth: '2px' }}
      >
        <span className="text-white font-space text-xs md:text-sm font-bold">DETAILS</span>
      </div>
    </div>
  );
};

// Project Modal
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative bg-obsidian border border-glass-border rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-64 md:h-80">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
          >
            <FiX className="text-white text-xl" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-sm font-space uppercase tracking-widest mb-2" style={{ color: project.color }}>
              {project.category}
            </p>
            <h2 className="text-3xl md:text-5xl font-syne font-bold text-white">{project.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-320px)]">
          {/* Description */}
          <p className="text-secondary-text text-lg leading-relaxed mb-6">
            {project.fullDesc}
          </p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-sm uppercase tracking-widest text-secondary-text mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-white font-space"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Credentials if any */}
          {project.credentials && (
            <div className="mb-6 p-4 bg-white/5 rounded-xl border border-glass-border">
              <h3 className="text-sm uppercase tracking-widest text-secondary-text mb-2">Demo Credentials</h3>
              <p className="text-cyber-cyan font-mono">{project.credentials}</p>
            </div>
          )}

          {/* CTA Button */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-space font-bold transition-all hover:scale-105"
            style={{ backgroundColor: project.color, color: project.color === '#F2F2F2' ? '#000' : '#fff' }}
          >
            Visit Live Demo <FiExternalLink />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ProjectGallery = () => {
  const targetRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Extended scroll for 8 projects
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

  return (
    <>
      <section ref={targetRef} className="relative h-auto md:h-[400vh] bg-obsidian py-20 md:py-0">
        <div className="relative md:sticky md:top-0 flex h-auto md:h-screen items-center overflow-x-auto md:overflow-hidden no-scrollbar">
          <motion.div style={{ x: isDesktop ? x : 0 }} className="flex gap-8 md:gap-12 px-8 md:px-24">
            {/* Header */}
            <div className="flex flex-col justify-center min-w-[300px] md:min-w-[400px]">
              <h2 className="text-5xl md:text-8xl font-syne font-black text-transparent stroke-text" style={{ WebkitTextStroke: '2px #333' }}>
                SELECTED
              </h2>
              <h2 className="text-5xl md:text-8xl font-syne font-black text-white">
                WORKS
              </h2>
              <p className="text-secondary-text mt-6 md:mt-8 font-space max-w-xs text-sm md:text-base">
                A showcase of my latest work - click on any project to see full details.
              </p>
            </div>

            {/* Project Cards */}
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}

            {/* End CTA */}
            <div className="min-w-[300px] md:min-w-[400px] flex flex-col items-center justify-center gap-4">
              <h3 className="text-2xl md:text-4xl font-syne text-secondary-text text-center">
                More on GitHub
              </h3>
              <a
                href="https://github.com/Chayanon11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-cyan hover:text-white transition-colors text-4xl md:text-6xl"
              >
                &rarr;
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};
