// import React, { useState } from 'react'
// import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
// import {ChatList } from '../data/index'
const ChatElements = ({ id, img, name, msg, time, unread, pinned, online }) => {
  return (
    <>
      <div className="relative ml-0 h-screen">
        <div class="flex items-center  px-3 py-3 text-sm transition duration-150 ease-in-out  border-b border-gray-900 cursor-pointer hover:bg-zinc-900 focus:outline-none">
        <div class="relative">
    <img class="w-10 h-10 rounded-full" src={img} alt=""/>
    <span class="bottom-0 left-7 absolute  w-2.5 h-2.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
</div>
          <div class="w-full">
            <div class="flex justify-between">
              <span class=" block ml-3 font-semibold text-base text-gray-300 align-center">
               {name}
              </span>
              <span class="block ml-2 font-semibold text-gray-500">{time}</span>
            </div>
            <div class="flex justify-between">
              <span class=" block ml-3 font-semibold text-gray-500">
                {msg}
              </span>
              <span class="block ml-2 bg-sky-400 text-gray-200 text-xs font-semibold h-6 w-6 rounded-full  flex items-center justify-center">{unread}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatElements;
