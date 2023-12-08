import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import {
  PhoneIcon,
  VideoCameraIcon,
  MagnifyingGlassIcon,
  EllipsisVerticalIcon,
  FaceSmileIcon,
  LinkIcon,
  PaperAirplaneIcon,
  PhotoIcon,
  CameraIcon,
  DocumentIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Message from "./Message";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const Actions = [
  {
    color: "#4da5fe",
    icon: <PhotoIcon size={24} />,
    y: 172,
    title: "Photo/Video",
  },
  {
    color: "#0172e4",
    icon: <CameraIcon size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <DocumentIcon size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <UserCircleIcon size={24} />,
    y: 382,
    title: "Contact",
  },
];
const Conversation = () => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [areActionsVisible, setAreActionsVisible] = useState(false);
  const [isIconVisible, setIsIconVisible] = useState(false);
  const handleEmojiSelect = () => {
    setIsPickerOpen(!isPickerOpen);
  };
const handleLinkIcon=()=>{
  setAreActionsVisible(!areActionsVisible);
}
  return (
    <div className="w-screen p-2">
      
      <div class="flex items-center  px-3 py-3 text-sm shadow-2xl shadow-gray-500 rounded-lg">
        <div class="relative">
          <img
            class="w-10 h-10 rounded-full"
            src={faker.image.avatar()}
            alt=""
          />
          <span class="bottom-0 left-7 absolute  w-2.5 h-2.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
        <div class="w-full">
          <div class="flex justify-between">
            <span class=" block ml-3 font-semibold text-base text-gray-300 align-center">
              {faker.person.firstName()}
            </span>
            <div className="flex space-x-8">
              <PhoneIcon className=" text-sky-400 h-5 w-5" />
              <VideoCameraIcon className=" text-sky-400 h-5 w-5" />
              <MagnifyingGlassIcon className=" text-sky-400 h-5 w-5 font-bold" />
              <EllipsisVerticalIcon className=" text-sky-400 h-5 w-5 font-bold" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full p-6  overflow-y-auto h-[29rem]">
        <Message />
      </div>
      //footer
      <div className={`relative w-full p-1 flex space-x-2 `}>
        <LinkIcon className="text-blue-400 h-6 w-6 ml-10 mt-2 cursor-pointer active:text-blue-500" onClick={handleLinkIcon}/>

        <span className={`flex relative  w-5/6 items-center `}>
          <input
            type="text"
            placeholder=" Type a message"
            className="rounded-full w-full bg-zinc-900 p-2  pl-10 focus:outline-none text-gray-400"
          />

          <FaceSmileIcon
            className=" text-blue-400 h-6 w-6 absolute ml-2 active:text-blue-500"
            onClick={handleEmojiSelect}
          />
        </span>
        <div
          className={`absolute left-0 bottom-14 ${
            isPickerOpen ? "block" : "hidden"
          }`}
        >
          {isPickerOpen && <Picker onSelect={handleEmojiSelect} theme="dark" />}
        </div>
        
        <div className="absolute">
          {areActionsVisible && Actions.map((el) => (
            <div
              key={el.title}
              className="text-center absolute"
              style={{top: `${-el.y}px` }}
              
            >
              <div
                data-tooltip-id={`tooltip-${el.title}`}
                className={`w-10 h-10 p-2 rounded-full text-zinc-300`}
                style={{ backgroundColor: el.color }}
              >
                {el.icon}
              </div>
              <ReactTooltip
                id={`tooltip-${el.title}`}
                place="right"
                effect="solid"
              >
                {el.title}
              </ReactTooltip>
            </div>
          ))}
        </div>
       
        <div className="relative w-9 h-9 rounded-full bg-sky-400 animation-pulse  flex items-center justify-center">
          <button className="rounded-full">
            <PaperAirplaneIcon className="text-white h-5 w-5 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Conversation;


          