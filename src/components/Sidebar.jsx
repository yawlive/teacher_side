import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenuFill } from "react-icons/ri";

const Sidebar = ({ Menus, sidebarcolor, textcolor, iconscolor }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="relative ">
    
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar Container */}
      <div
        className={`${
          open ? "left-0" : "-left-72"
        } ${sidebarcolor} fixed top-0 h-screen p-5 pt-8 z-50 w-72 duration-300 lg:relative lg:left-0`}
      >
        {/* Toggle Button */}
        <RiMenuFill
          className={`${
            open ? "right-3 top-8 " : "-right-8 top-7 "
          }absolute cursor-pointer  w-7 h-7 rounded-full lg:hidden`}
          style={{
            color: textcolor,
          }}
          onClick={() => setOpen(!open)}
        />

        {/* Logo */}
        <div className="flex gap-x-4 items-center">
          <h1
            className={`origin-left text-3xl font-extrabold duration-200 ${
              !open 
            }`}
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
                  {Menu.icon}
                </span>
                <span
                  className={`${!open} origin-left duration-200`}
                >
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
