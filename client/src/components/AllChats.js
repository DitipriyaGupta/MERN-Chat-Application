import React,{useState} from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import ChatElements from './ChatElements';
import { ChatList } from '../data/index';
const AllChats = () => {
    const [search,setSearch]=useState("")
  return (
    <> 
   <div className="relative  ml-3 w-2/5  h-screen overflow-hidden overflow-scroll">
<div className='text-gray-300 p-5 font-semibold text-xl'>
All Chats
</div>
<div className="relative mx-auto max-w-md p-1 mr-2">
  <input
    type="text"
    placeholder="Search..."
    className="w-full py-2 pl-10 pr-4 bg-zinc-900 text-gray-400 rounded-full focus:outline-none focus:border-blue-400"
    onChange={(e)=>setSearch(e.target.value)}
  />
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
   <MagnifyingGlassIcon className='w-5 h-5 text-gray-400'/>
  </div> 
</div>
<div className='flex flex-col h-full overflow-scroll pt-4'>
    {ChatList.map((chat,idx)=>{
       return  <ChatElements {...chat}/>
    })}
    </div></div>
 
</>
  )
}

export default AllChats