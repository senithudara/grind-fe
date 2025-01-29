import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" flex justify-between items-center bg-[#F4F0EA] h-[80px] w-full px-10">
      <NavLink to="/home">
        <div className="flex items-center space-x-8 ">
          <img
            src="./public/icon.png"
            className="h-14 w-14 hover:cursor-pointer"
          />
          <h1 className="text-black tracking-[10px] font-extrabold text-[24px] hover:cursor-pointer">
            GRIND
          </h1>
        </div>
      </NavLink>
      <div className="flex flex-auto justify-end space-x-8 items-center text-[18px]">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "text-[#406955] font-medium hover:cursor-pointer active:text-[19px] transition-[0.2s]"
              : "text-[#151716] font-medium hover:cursor-pointer active:text-[19px] transition-[0.2s] hover:text-[#486557]"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive
              ? "text-[#406955] font-medium hover:cursor-pointer active:text-[19px] transition-[0.2s]"
              : "text-[#151716] font-medium hover:cursor-pointer active:text-[19px] transition-[0.2s] hover:text-[#486557]"
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/order"
          className={({ isActive }) =>
            isActive
              ? "text-[#406955] font-medium hover:cursor-pointer active:text-[19px] transition-[0.2s]"
              : "text-[#151716] font-medium hover:cursor-pointer active:text-[19px] transition-[0.2s] hover:text-[#486557]"
          }
        >
          Order
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#406955] font-medium hover:cursor-pointer active:text-[19px] transition-[0.2s]"
              : "text-[#151716] font-medium hover:cursor-pointer active:text-[19px] transition-[0.2s] hover:text-[#486557]"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/our-story"
          className={({ isActive }) =>
            isActive
              ? "text-[#406955] font-medium hover:cursor-pointer active:text-[19px] transition-[0.2s]"
              : "text-[#151716] font-medium hover:cursor-pointer active:text-[19px] transition-[0.2s] hover:text-[#486557]"
          }
        >
          Our Story
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
