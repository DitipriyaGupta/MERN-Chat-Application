// // Sidebar.js
import React, { useState } from "react";

import navicon from "../assets/icon.png";

const NavSideBar = () => {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    // <div className="flex flex flex-col flex-grow translate-x-0 ">
    //   <div className="bg-black p-3 pl-8 flex ">
    //     <button
    //       className="text-white focus:outline-none hover:text-sky-400"
    //       onClick={toggleSidebar}
    //     >
    //       <svg
    //         className="w-8 h-8"
    //         fill="none"
    //         stroke="currentColor"
    //         viewBox="0 0 24 24"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M4 6h16M4 12h16m-7 6h7"
    //         ></path>
    //       </svg>
    //     </button>
    //     <div className="flex space-x-1 items-center">
    //       <img className="h-12 w-12 ml-3" src={navicon} alt="logo" />
    //       <span className="text-white font-bold text-2xl">Talkie</span>
    //     </div>
    //   </div>
      <div
        className={` ${
          open ? "w-72" : "w-20"
        } bg-black h-screen p-2  pt-8 pl-8 relative duration-300`}
      >
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    // </div>
  );
};
export default NavSideBar;
