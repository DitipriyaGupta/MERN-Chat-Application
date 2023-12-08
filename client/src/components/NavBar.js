// Navbar.js
import React from 'react';
import navicon from '../assets/icon.png';

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className=" bg-zinc-900 p-6 pl-8 flex">
      <button
        className="text-white focus:outline-none hover:text-sky-400 "
        onClick={toggleSidebar}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <div className="flex space-x-1 items-center">
        <img className="h-12 w-12 ml-5" src={navicon} alt="logo" />
        <span className="text-white font-bold text-2xl">Talkie</span>
      </div>
    </div>
  );
};

export default Navbar;
