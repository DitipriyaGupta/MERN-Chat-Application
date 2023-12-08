import React,{useState} from 'react'

import NavSideBar from './NavSideBar';
import AllChats from './AllChats';
import SideBar from './SideBar';
import Navbar from './NavBar';
import ChatElements from './ChatElements';
import Chats from './ChatElements';
import ChatElement from './ChatElements';
import Conversation from './Conversation';
const Home = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
<div className="bg-black fixed inset-0">
      <Navbar toggleSidebar={toggleSidebar} className=' inset-0'/>
      <div className="flex flex-grow transition-transform duration-300 ease-in-out transform translate-x-0">
      <SideBar isOpen={open} toggleSidebar={toggleSidebar} />  
       <AllChats />
   <Conversation/>
      </div>
    </div>

  )
}

export default Home