import { HeaderComponent } from "../components/Header";
import { Link } from "react-router-dom";

export function AboutComponent() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-tr from-[#60072c] via-[#120b2e] to-[#091498] px-8 md:px-14 lg:px-36 pb-10 pt-7">
        <HeaderComponent />
        <div className="grid grid-cols-1 md:grid-cols-2 p-10 items-center border-black-1px"></div>
        <div className="hero-content flex-col justify-center p-5 bg-gradient-to-tr from-[#60072c] via-[#120b2e] to-[#091498] bg-blur-sm bg-opacity-50 p-8 md:p-14 lg:p-36 pb-10 pt-7">
          <h1 className="text-[24px] font-bold text-red-500">
            INTRO<span className="text-white">DUCTION</span>
          </h1>
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <p className="py-6 ">
              "Hello! I'm Chayanon, a recent graduate from Tech Up Bootcamp
              specializing in Full-Stack Development. My expertise spans a
              versatile tech stack that encompasses HTML, CSS, JavaScript,
              React, SQL, MongoDB, Node.js, Express.js, Git/GitHub, Software
              Testing, Authentication, as well as proficiency in Data Structures
              and Algorithms.
            </p>
          </div>
          <h1 className="text-5xl font-bold">About Me</h1>
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <p className="py-6">
              I'm passionate about crafting robust and user-centric applications
              while staying at the forefront of innovative technologies. With a
              keen eye for detail and a dedication to continuous learning, I
              strive to create seamless digital experiences that leave a lasting
              impact. Let's connect and explore the endless possibilities of
              technology together."
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
