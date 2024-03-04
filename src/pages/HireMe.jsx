import { HeaderComponent } from "../components/Header";
import { Link } from "react-router-dom";
import TechStack1 from "/public/TechStackLogo1.png";
import TechStack2 from "/public/TechStackLogo2.png";
import TechStack3 from "/public/TechStackLogo3.png";
import Resume from "/public/ChayanonResume.pdf";

export function HireMeComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#60072c] via-[#120b2e] to-[#091498] px-8 md:px-14 lg:px-36 pb-10 pt-7">
      <HeaderComponent />

      <div className="text-center p-10">
        <h1 className="text-4xl font-bold text-white mb-2">
          Chayanon Bharasarn
        </h1>
        <p className="text-xl text-gray-300 mb-4">Full Stack Web Developer</p>
        <p className="text-lg text-gray-300">
          Passionate about blending educational experiences with technology to
          create intuitive web applications.
        </p>
      </div>

      <div className="hero-content flex-col lg:flex-row justify-center bg-gradient-to-tr from-[#60072c] via-[#120b2e] to-[#091498] bg-blur-sm bg-opacity-50 p-8 md:p-14 lg:p-36 pb-10 pt-7">
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-3xl font-bold text-white mb-4">
            Skills & Experiences
          </h2>
          <ul className="text-lg text-gray-300 list-disc list-inside mb-4">
            <li>React.js, Node.js, MongoDB, PostgreSQL</li>
            <li>Front-end and back-end web development</li>
            <li>Database design and management</li>
            <li>Professional experience in recruitment and customer service</li>
          </ul>
          <a
            href={Resume}
            download="ChayanonResume.pdf"
            className="btn btn-primary">
            Download Resume
          </a>
        </div>
        <div className="lg:w-1/2 flex justify-around flex-wrap mt-8 lg:mt-0">
          <div className="image-box bg-white p-4 rounded-lg shadow-lg m-2">
            <img
              src={TechStack1}
              alt="Skill Image 1"
              className="h-40 w-full object-cover rounded-lg"
            />
            <p className="mt-2 text-white">Front-End Development</p>
          </div>
          <div className="image-box bg-white p-4 rounded-lg shadow-lg m-2">
            <img
              src={TechStack3}
              alt="Skill Image 2"
              className="h-40 w-full object-cover rounded-lg"
            />
            <p className="mt-2 text-white">Back-End Development</p>
          </div>
          <div className="image-box bg-white p-4 rounded-lg shadow-lg m-2">
            <img
              src={TechStack2}
              alt="Skill Image 3"
              className="h-40 w-full object-cover rounded-lg"
            />
            <p className="mt-2 text-white">Database Management</p>
          </div>
        </div>
      </div>
    </div>
  );
}
