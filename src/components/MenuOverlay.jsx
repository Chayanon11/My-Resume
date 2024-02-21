// MenuOverlay.js

import { Link } from "react-router-dom";

function MenuOverlay({ menuList, toggleMenu }) {
  return (
    <div className="absolute text-center left-0 min-h-full backdrop-blur-lg w-full mt-3 flex flex-col ">
      {menuList.map((item, index) => (
        <Link
          key={index}
          to={`/${item.title.toLowerCase()}`}
          className="text-white text-24 mb-6 text-center hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
          onClick={toggleMenu}>
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default MenuOverlay;
