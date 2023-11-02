import React,{useEffect,useRef} from 'react'
import Friends from '../assets/Register.png'
import { useNavigate } from 'react-router-dom';
function RegisterForm() {
    const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const navigate=useNavigate();
  const handleClick=()=>{navigate('/login')}
  return (
    <div class="min-h-screen bg-black flex flex-col justify-center py-14 px-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-200 tracking-wide">
       Let's Get Started !!
      </h2>
      <img class="mx-auto h-32 w-auto mt-12" src={Friends} alt="Workflow" />
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-black py-12 px-6  sm:px-10 mx-auto flex items-center justify-center">
        <form
          class="mb-0 space-y-6  items-center w-full max-w-xs"
          action="#"
          method="POST"
        >
             <div class="relative text-gray-600 focus-within:text-sky-400  ">
            <span class="absolute inset-y-0 left-0 flex items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="p-1 w-8 h-8 focus:outline-none focus:shadow-outline">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>

                
             
            </span>
            <input
              ref={inputRef}
              type="Name"
              name="q"
              className="w-full max-w-xs py-2 text-sm text-white border-b bg-black pl-10 focus:outline-none focus:bg-black focus:border-sky-400 focus:text-gray-500"
              placeholder="Name..."
              autocomplete="off"
            />
          </div>
          <div class="relative text-gray-600 focus-within:text-sky-400  ">
            <span class="absolute inset-y-0 left-0 flex items-center ">
             
                <svg class="p-1 w-8 h-8 focus:outline-none focus:shadow-outline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                 
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
             
            </span>
            <input
              ref={inputRef}
              type="Email"
              name="q"
              className="w-full max-w-xs py-2 text-sm text-white border-b bg-black pl-10 focus:outline-none focus:bg-black focus:border-sky-400 focus:text-gray-500"
              placeholder="Email..."
              autocomplete="off"
            />
          </div>
          <div class="relative text-gray-600 focus-within:text-sky-400">
            <span class="absolute inset-y-0 left-0 flex items-center">
            
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 p-1 focus:outline-none focus:shadow-outline"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
             
            </span>
            <input
              type="text"
              name="q"
              class=" w-full max-w-xs py-2 text-sm text-white bg-black border-b   pl-10 focus:outline-none focus:bg-black focus:border-sky-400 focus:text-gray-500"
              placeholder="Password..."
              autocomplete="off"
            />
          </div>
          <div class="flex justify-center items-center">
            <button 
              type="submit"
              class="h-12 w-24 mt-9 bg-sky-400 rounded-full flex justify-center items-center hover:bg-sky-300 text-gray-300 font-bold text-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="flex justify-center items-center space-x-4 ">
      <p class="mt-2 text-center text-2xl text-gray-200 max-w">Returning?</p>
      <button onClick={handleClick}
        type="submit"
        class="h-12 w-32  bg-sky-400 rounded-full flex justify-center items-center animation-pulse text-gray-300 font-bold text-center"
      >
    Log in
      </button>
    </div>
  </div>
  )
}

export default RegisterForm