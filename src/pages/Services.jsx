import { HeaderComponent } from "../components/Header";
import { Link } from "react-router-dom";

export function ServicesComponent() {
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
            id="item1"
            className="carousel-item w-full flex flex-col justify-center">
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg?t=1703123157"
              className="w-1/2 object-cover h-48 mx-auto"
              alt="Dota 2"
            />
            <h2 className="py-3 text-white text-bold text-center">Gaming</h2>
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
            id="item2"
            className="carousel-item w-full flex flex-col justify-center">
            <img
              src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
              className="w-1/2 object-cover h-48 mx-auto"
              alt="Music"
            />
            <h2 className="py-3 text-white text-bold text-center">Music</h2>
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
            id="item3"
            className="carousel-item w-full flex flex-col justify-center">
            <img
              src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-1/2 object-cover h-48 mx-auto"
              alt="Basketball"
            />
            <h2 className="py-3 text-white text-bold text-center">Sport</h2>
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
            id="item4"
            className="carousel-item w-full flex flex-col justify-center">
            <img
              src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-1/2 object-cover h-48 mx-auto"
              alt="Technology"
            />
            <h2 className="py-3 text-white text-bold text-center">
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
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
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
