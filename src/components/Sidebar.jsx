import React, { useState } from 'react';
import { FaUserGraduate, FaChevronCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Studentslists from '../pages/teacher/Studentslist';
import { RiMenuFill } from "react-icons/ri";
import ToolTip from './ToolTip';

const Sidebar = ({ Menus, sidebarcolor, textcolor, iconscolor , active }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } ${sidebarcolor} h-screen p-5 pt-8 relative duration-300 `}
      >
        {/* Toggle Button */}

        <RiMenuFill
          className={`absolute cursor-pointer right-6 top-15 w-7 h-11  rounded-full ${!open}`}
          style={{
            color: textcolor,
          }}
          onClick={() => setOpen(!open)}
        />
        
        {/* Logo */}
        <div className="flex gap-x-4 items-center">
          <h1
            className={`origin-left  text-3xl font-extrabold duration-200 ${!open && "scale-0"}`}
            style={{
              color: textcolor,
            }}
          >
            Edulink
          </h1>
        </div>
        
        {/* Menu List */}
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex items-center gap-x-4 rounded-md p-2 cursor-pointer hover:bg-opacity-75 ${
                Menu.gap ? "mt-9" : "mt-2"
              }`}
              style={{
                color: textcolor,
              }}
            >
              <Link to={Menu.link} className="flex items-center gap-x-4">
                <span
                  className={`text-2xl`}
                  style={{
                    color: iconscolor,
                  }}
                >
                  <ToolTip color='rgba(255,255,255,0.17)' text={Menu.title}>
                  {Menu.icon}</ToolTip>
                </span>
                <span className={`${!open && "hidden"} origin-left duration-200 `}>
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
