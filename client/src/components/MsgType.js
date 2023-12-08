import {
  ArrowDownTrayIcon,
  DocumentIcon,
  PhotoIcon,
  EllipsisVerticalIcon,
  ChevronDownIcon
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import {Message_options } from '../data'

const Timeline = ({ el }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="flex-1 divide-y border border-zinc-800"></span>
      <h1 className="mx-4 text-zinc-500">{el.text}</h1>
      <span className="flex-1 divide-y border border-zinc-800"></span>
    </div>
  );
};

const TextMsg = ({ el }) => {
  return (
    <div className={`flex ${el.incoming ? "justify-start" : "justify-end"}`}>
      <div
        className={` flex ${
          el.incoming
            ? "bg-zinc-900 px-7 py-2 rounded-full my-2"
            : "bg-sky-500 rounded-full px-5 py-2  my-2"
        }`}
      >
        <span className="text-zinc-300 ">{el.message}</span>
        <MessageOptions/>
      </div>
    </div>
  );
};
const Media = ({ el }) => {
  return (
    <div
      className={`flex ${
        el.incoming ? "justify-start" : "justify-end"
      } rounded-xl`}
    >
      <div
        className={`${
          el.incoming ? "bg-zinc-900 px-2 py-8 my-2" : "bg-sky-500  my-2"
        }  w-80 h-72 rounded-xl`}
      >
        <img src={el.img} alt={el.message} className="rounded-xl" />
        <span className="text-zinc-300">{el.message}</span>
      </div>
    </div>
  );
};
const Reply = ({ el }) => {
  return (
    <div
      className={`flex ${
        el.incoming ? "justify-start" : "justify-end"
      } rounded-full`}
    >
      <div
        className={`${
          el.incoming ? "bg-zinc-900" : "bg-sky-500"
        } px-1 py-1 my-2 rounded-xl`}
      >
        <h1
          className={`${
            el.incoming ? "bg-zinc-600" : "bg-sky-300"
          } rounded px-3 py-1`}
        >
          {el.message}
        </h1>
        <span className="text-zinc-300">{el.reply}</span>
      </div>
    </div>
  );
};
const Doc = ({ el }) => {
  return (
    <div
      className={`flex ${
        el.incoming ? "justify-start" : "justify-end"
      } rounded-full`}
    >
      <div
        className={`${
          el.incoming ? "bg-zinc-900" : "bg-sky-500"
        } px-1 py-1 my-2 rounded-xl `}
      >
        <div
          className={` flex space-x-2 ${
            el.incoming ? "bg-zinc-700" : "bg-sky-300"
          } rounded px-3 py-2`}
        >
          <span className="h-6 w-6">
            <DocumentIcon />
          </span>
          <h1>Abstract.png</h1>
          <span className="h-6 w-6">
            <ArrowDownTrayIcon />
          </span>
        </div>
        <span className="text-zinc-300 ">{el.message}</span>
      </div>
    </div>
  );
};
const MessageOptions = () => {
  const[showMenu,setShowMenu]=useState(false)
  const handleMenu=()=>{
    setShowMenu(!showMenu)
  }
  return( 
    <div className="relative">
    <ChevronDownIcon
      className="h-4 w-4 text-white my-1 mx-1 cursor-pointer"
      onClick={handleMenu}
    />
   
      <div className="absolute bg-zinc-800 w-28 h-50 right-2 top-5 ">
       
        {
          showMenu && Message_options.map((el)=>(
          <div key={el.title} className="text-white py-2 px-2 hover:bg-zinc-700 ">{el.title}</div>
          ))

          }
        
      </div>
    
  </div>)};

export { Timeline, TextMsg, Media, Reply, Doc, MessageOptions };
