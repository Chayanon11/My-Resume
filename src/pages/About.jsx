import { HeaderComponent } from "../components/Header";
import ChayanonImage2 from "/public/ChayanonImg2.jpg";
import { Link } from "react-router-dom";

export function AboutComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#60072c] via-[#120b2e] to-[#091498] px-8 md:px-14 lg:px-36 pb-10 pt-7 animate-fadeIn">
      <HeaderComponent />

      <div className="flex flex-col lg:flex-row justify-around items-center p-5 bg-gradient-to-tr from-[#60072c] via-[#120b2e] to-[#091498] bg-blur-sm bg-opacity-75 rounded-lg shadow-xl mx-4 md:mx-10 lg:mx-20 my-10">
        <img
          src={ChayanonImage2}
          alt="Chayanon Bharasarn"
          className="max-w-xs md:max-w-sm rounded-lg shadow-2xl mx-5 my-5 hover:scale-105 transition-transform duration-300"
        />
        <div className="text-center md:text-left">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-red-500 mb-4">
              INTRODUCTION
            </h1>
            <p className="text-white text-lg mb-4">
              "Hello! I'm Chayanon, a passionate Full-Stack Developer. My
              journey in technology has been marked by continuous learning and
              growth. Here's a glimpse into my career path."
            </p>
            <h2 className="text-4xl font-bold text-red-500 mb-4">
              My Career Path
            </h2>
            <ul className="text-white text-lg space-y-4 list-disc list-inside">
              <li>
                <span className="mb-4">
                  Developer Trainee at TechUp Bangkok (Nov 2023 - Mar 2024):
                </span>
                Immersed myself in Full-Stack Development, mastering
                technologies like React.js and Node.js.
              </li>
              <li>
                <span className="mb-4">
                  Recruiter at Pantheon Corporation (Thailand) (Jul 2022 -
                  Present):
                </span>
                Enhanced team capabilities and utilized social media for talent
                acquisition, blending my people skills with my tech background.
              </li>
              <li>
                <span className="mb-4">
                  Guest Service Agent at Maleewana Hotel & Resort (Feb 2022 -
                  Jun 2022):
                </span>
                Delivered exceptional customer service, laying the groundwork
                for my user-centric approach in tech.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
