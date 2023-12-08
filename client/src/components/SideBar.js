// Sidebar.js
import React, { useState } from 'react';


const Sidebar = ({ isOpen }) => {
  const Menus = [
    { title: 'Dashboard', src: 'Chart_fill' },
    { title: 'Inbox', src: 'Chat' },
    { title: 'Accounts', src: 'User', gap: true },
    { title: 'Schedule ', src: 'Calendar' },
    { title: 'Search', src: 'Search' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Files ', src: 'Folder', gap: true },
    { title: 'Setting', src: 'Setting' },
  ];

  return (
   
    <div className={` ${isOpen ? 'w-64' : 'w-24'} bg-zinc-900 h-screen p-2  pt-3 pl-8`}>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-light-white'}`}
          >
            <img src={`./src/assets/${Menu.src}.png`} />
            <span className={`${!isOpen && 'hidden'} origin-left duration-200 ml-2`}>{Menu.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
