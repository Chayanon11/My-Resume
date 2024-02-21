import { HiBars3BottomRight } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import { BrowserRouter, Route, Link } from "react-router-dom";

export function HeaderComponent() {
  const [toggle, setToggle] = useState(false);

  const menuList = [
    { title: "HOME", id: 1 },
    { title: "MY STORIES", id: 2 },
    { title: "MY INTEREST", id: 3 },
    { title: "PORTFOLIO", id: 4 },
    { title: "CONTACT", id: 5 },
  ];

  return (
    <div className="flex item-center justify-between mt-5">
      <div className="gap-4">
        <h2 className="text-[24px] font-bold text-white ">
          Chayanon <span className="text-red-500">Bharasarn</span>
        </h2>
      </div>

      <div className="hidden md:flex gap-4">
        {menuList.map((item, index) => (
          <div key={index}>
            <Link
              to={`/${item.title.toLowerCase()}`}
              className="
                hover:border-[1px] border-red-500 rounded-full px-3 py-1 
                text-white text-[15px] cursor-pointer">
              {item.title}
            </Link>
          </div>
        ))}

        <Link
          to="/hire-me"
          className="
            hover:border-[1px] border-red-500 rounded-full px-3 py-1 
            text-white text-[15px] cursor-pointer hover:bg-gradient-to-r from-red-500 to-red-800">
          HIRE ME
        </Link>
      </div>

      <div className="md:hidden">
        {!toggle ? (
          <HiBars3BottomRight
            onClick={() => setToggle(!toggle)}
            className="text-white md:hidden text-[30px] cursor-pointer"
          />
        ) : (
          <HiXMark
            onClick={() => setToggle(!toggle)}
            className="text-white md:hidden text-[30px] cursor-pointer"
          />
        )}
        {toggle ? <MenuOverlay menuList={menuList} /> : null}
      </div>
    </div>
  );
}
