import { HeaderComponent } from "../components/Header";
import { Link } from "react-router-dom";
import profileImg from "/public/ChayanonImg.jpg";

export function ContactComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#60072c] via-[#120b2e] to-[#091498] px-8 md:px-14 lg:px-36 pb-10 pt-7">
      <HeaderComponent />
      <div className="hero-content flex-col justify-center items-center p-5 bg-gradient-to-tr from-[#60072c] via-[#120b2e] to-[#091498] bg-blur-sm bg-opacity-50 rounded-lg shadow-lg mx-4 md:mx-10 lg:mx-20 my-10">
        <h1 className="text-4xl font-bold text-white mb-6">Contact Me</h1>
        <div className="image-box bg-white p-4 rounded-lg shadow-lg m-2">
          <img
            src={profileImg}
            alt="Picture profile"
            className="h-40 w-full object-cover rounded-lg m-0"
          />
        </div>
        <p className="text-xl text-gray-300 mb-4">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>
        <div className="space-y-4">
          <p className="text-white">Email: neung0511@gmail.com</p>
          <p className="text-white">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/chayanon-bharasarn-a516b8246/"
              className="text-blue-300">
              linkedin.com/in/chayanon-bharasarn
            </a>
          </p>
          <p className="text-white">
            Github:{" "}
            <a href="https://github.com/Chayanon11" className="text-blue-300">
              https://github.com/Chayanon11
            </a>
          </p>
        </div>
        <div className="mt-8">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
