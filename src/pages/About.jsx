import { HeaderComponent } from "../components/Header";
import ChayanonImage2 from "../assets/ChayanonImg2.jpg";
import { Link } from "react-router-dom";

export function AboutComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#60072c] via-[#120b2e] to-[#091498] px-8 md:px-14 lg:px-36 pb-10 pt-7">
      <HeaderComponent />

      <div className="max-w-7xl mx-auto mt-5  backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-12 p-8 md:p-12">
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              <img
                src={ChayanonImage2}
                alt="Chayanon Bharasarn"
                className="w-full rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-purple-500/25"
              />
            </div>
          </div>

          <div className="lg:w-2/3 space-y-12">
            <section className="space-y-6">
              <h1 className="text-5xl font-bold  text-red-500 ">
                INTRODUCTION
              </h1>
              <p className="text-gray-200 text-xl leading-relaxed">
                "Hello! I'm Chayanon, a passionate Full-Stack Developer. My
                journey in technology has been marked by continuous learning and
                growth. Here's a glimpse into my career path."
              </p>
            </section>

            <section className="space-y-8">
              <h2 className="text-4xl font-bold text-red-500">
                My Career Path
              </h2>

              <div className="space-y-8">
                <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-red-500 mb-4">
                    Full Stack Developer at TDM Thai Digital Map
                    <span className="text-red-500 text-sm ml-2">
                      June 2024 - Present
                    </span>
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    {[
                      "Maintained and enhanced Bangkok Fire and Rescue Department's internal GIS system using Vue.js, Node.js/Express, and PostgreSQL",
                      "Implemented interactive mapping features utilizing Leaflet.js, OpenStreetMap, and DeeMap",
                      "Optimized geospatial database queries and spatial data management in PostgreSQL",
                      "Developed real-time emergency response tracking and visualization features",
                      "Engineered RESTful APIs for efficient geospatial data transactions",
                      "Integrated third-party mapping services and maintained system documentation",
                      "Maintained 95% test coverage across critical GIS components",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gray-300 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-red-500 mb-4">
                    Developer Trainee at TechUp Bangkok
                    <span className="text-red-500 text-sm ml-2">
                      Nov 2023 - Mar 2024
                    </span>
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    {[
                      "Developed full stack applications emphasizing modern JavaScript frameworks",
                      "Created responsive, mobile-first interfaces using Tailwind CSS",
                      "Implemented secure authentication and authorization systems",
                      "Deployed microservices architecture solutions and maintained documentation",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gray-300 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-red-500 mb-4">
                    Guest Service Agent at Maleewana Hotel & Resort
                    <span className="text-red-500 text-sm ml-2">
                      Feb 2022 - Jun 2022
                    </span>
                  </h3>
                  <p className="text-gray-300">
                    Delivered exceptional customer service, laying the
                    groundwork for my user-centric approach in tech.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
