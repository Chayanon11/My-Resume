import { HeaderComponent } from "../components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Sport from "../assets/MuayThai.jpg";
import Music from "../assets/bass-guitar.jpg";
import Travel from "../assets/Travel.jpg";

export function ServicesComponent() {
  const totalItems = 4;
  const [activeItem, setActiveItem] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prevActiveItem) =>
        prevActiveItem < totalItems ? prevActiveItem + 1 : 1
      );
    }, 100000); // Adjusted to change slide every 30 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  const handleNavigation = (itemNumber) => () => {
    setActiveItem(itemNumber);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#60072c] via-[#120b2e] to-[#091498] px-8 md:px-14 lg:px-36 pb-10 pt-7">
      <HeaderComponent />

      <div className="hero-content flex-col justify-center bg-gradient-to-tr from-[#60072c] via-[#120b2e] to-[#091498] bg-blur-sm bg-opacity-50 p-8 md:p-14 lg:p-36 pb-10 pt-7">
        <h1 className="text-[24px] font-bold text-red-500">
          MY <span className="text-white">INTERESTS</span>
        </h1>

        <div className="carousel w-full">
          {/* Item 1: Gaming */}
          <div
            className={`carousel-item w-full flex flex-col justify-center ${
              activeItem === 1 ? "block" : "hidden"
            }`}>
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg?t=1703123157"
              className="w-1/2 object-cover h-48 mx-auto"
              alt="Dota 2"
            />
            <h2 className="py-3 text-white text-bold text-center font-bold">
              Gaming
            </h2>
            <p className="py-6 text-white">
              I really enjoy gaming, especially Dota 2, because it's like a
              brain workout. It's not just fun; it makes me think fast and work
              well with others, just like when I'm coding. Dota 2's complex play
              and teamwork have really improved my planning and problem-solving
              skills, which are super important in my tech projects.
            </p>
          </div>
          {/* Item 2: Music */}
          <div
            className={`carousel-item w-full flex flex-col justify-center ${
              activeItem === 2 ? "block" : "hidden"
            }`}>
            <img
              src={Music}
              className="w-1/2 object-cover h-48 mx-auto"
              alt="Music"
            />
            <h2 className="py-3 text-white text-bold text-center font-bold">
              Music
            </h2>
            <p className="py-6 text-white">
              Music is a big part of my day, both while I'm working and when I'm
              chilling out. Listening to tunes helps me concentrate and get more
              creative with my coding. I also play the bass to relax and express
              myself in a different way from coding. Mixing the structure of
              coding with the creativity of music helps me in all parts of my
              life.
            </p>
          </div>
          {/* Item 3: Sports - Basketball and Fitness */}
          <div
            className={`carousel-item w-full flex flex-col justify-center ${
              activeItem === 3 ? "block" : "hidden"
            }`}>
            <img
              src={Sport}
              className="w-1/2 object-cover h-48 mx-auto"
              alt="Basketball"
            />
            <h2 className="py-3 text-white text-bold text-center font-bold">
              Sport
            </h2>
            <p className="py-6 text-white">
              Sports are my go-to for taking a break from sitting at a computer.
              I love playing basketball and tennis because they're fun and keep
              me active. I also enjoy watching boxing and Muay Thai fights for
              entertainment and to learn about discipline and strategy. These
              activities remind me how important it is to keep improving and to
              stay competitive, just like in my work.
            </p>
          </div>
          {/* Item 4: Technology */}
          <div
            className={`carousel-item w-full flex flex-col justify-center ${
              activeItem === 4 ? "block" : "hidden"
            }`}>
            <img
              src={Travel}
              className="w-1/2 object-cover h-48 mx-auto"
              alt="Technology"
            />
            <h2 className="py-3 text-white text-bold text-center font-bold">
              Tech & Travel
            </h2>
            <p className="py-6 text-white">
              I'm always excited about the newest tech stuff and love to see how
              it can solve real problems. Traveling is another passion of mine
              because it opens my eyes to different ways of life and new ideas.
              Combining tech and travel keeps me inspired and eager to make
              technology that understands and improves people's lives around the
              world.
            </p>
          </div>
        </div>

        <div className="flex justify-center w-full py-2 gap-2">
          {/* Pass the item number directly to the handler */}
          <button className="btn btn-xs" onClick={handleNavigation(1)}>
            1
          </button>
          <button className="btn btn-xs" onClick={handleNavigation(2)}>
            2
          </button>
          <button className="btn btn-xs" onClick={handleNavigation(3)}>
            3
          </button>
          <button className="btn btn-xs" onClick={handleNavigation(4)}>
            4
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/" className="btn btn-primary mt-10">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
