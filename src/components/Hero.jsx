import { Link } from "react-router-dom";

export function HeroComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-20 items-center">
      <div className="mb-10">
        <p className="text-white text-[13px] ">
          HELLO THERE, WELCOME TO MY SITE
        </p>
        <p className="text-white text-[40px] font-bold">
          I'm Chayanon Bharasarn
        </p>
        <p className="text-red-500 text-[40px] font-bold">
          I'am Full Stack Developer
        </p>
        <p className="text-white text-[40px] font-bold">& UI/UX Designer</p>
        <div className="mt-4 flex gap-4">
          <Link
            to="/portfolio"
            className="bg-red-500 rounded-full border-[2px] border-red-500 text-white text-[12px] px-3 pb-2 py-2 hover:border-white">
            SEE PORTFOLIO
          </Link>
          <Link
            to="/contact"
            className="bg-white-900 rounded-full border-[2px] border-red-500 text-white text-[12px] px-3 pb-2 py-2 hover:border">
            CONTACT ME
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="h-[320px] w-[250px] bg-gradient-to-b from-[#ff004d] to-[#2a26bc] rounded-[20px] p-2">
          <img
            src="https://media.licdn.com/dms/image/D5603AQHOkpevAZF13Q/profile-displayphoto-shrink_800_800/0/1669885721423?e=2147483647&v=beta&t=0HCaDKE9Z1EdEAdI7hF2Ts5xjP9HzGeW8BsjBx8RQpI"
            alt="profilePicture"
            className="h-full w-[250px] object-cover rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
}
