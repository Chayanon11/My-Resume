import { HeaderComponent } from "../components/Header";
import { Link } from "react-router-dom";

export function ServicesComponent() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-tr from-[#60072c] via-[#120b2e] to-[#091498] px-8 md:px-14 lg:px-36 pb-10 pt-7">
        <HeaderComponent />

        <div className="grid grid-cols-1 md:grid-cols-2 p-10 items-center border-black-1px"></div>
        <div className="hero-content flex-col justify-center bg-gradient-to-tr from-[#60072c] via-[#120b2e] to-[#091498] bg-blur-sm bg-opacity-50 p-8 md:p-14 lg:p-36 pb-10 pt-7">
          <h1 className="text-[24px] font-bold text-red-500">
            MY <span className="text-white">INTEREST</span>
          </h1>

          <div className="carousel w-full ">
            <div
              id="item1"
              className="carousel-item w-full flex flex-col justify-center">
              <img
                src="https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg?t=1703123157"
                className="w-90 h-auto mx-auto"
                alt="Dota 2"
              />
              <div>
                <p className="py-6 ">
                  I'm passionate about coding, constantly evolving to create
                  top-notch websites and apps. The thrill of discovering new
                  technologies keeps me engaged and eager to innovate. Beyond
                  coding, I find solace in online gaming, particularly Dota 2.
                  It's my gateway to unwind and bond with friends in the digital
                  realm. This harmonious blend of tackling coding challenges and
                  enjoying gaming adds vibrancy to my days. It's about
                  professional growth coexisting with personal relaxation.
                </p>
              </div>
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                className="w-full"
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                className="w-full"
              />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img
                src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                className="w-full"
              />
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
    </div>
  );
}
