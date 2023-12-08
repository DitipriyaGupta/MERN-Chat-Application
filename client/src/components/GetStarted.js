import React from "react";
import Started from "../assets/chat.png";
import { useNavigate } from "react-router-dom";
function GetStarted() {
  const navigate=useNavigate();
  const handleClick = () => navigate('/login');
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-white">
          Welcome to Talkie
        </h1>
        <p className="mt-2 text-center text-sm text-gray-400 max-w">
          Where Conversations Come to Life! 🗨️💬
        </p>
        <img className="mx-auto mt-4 h-48 w-auto" src={Started} alt="Workflow" />
        <p className="mt-2 text-center text-sm text-gray-400 max-w">
          Start Talking Now!
        </p>
        <div className="bg-black">
          <div className="flex justify-center items-center">
            <button onClick={handleClick}
              type="submit"
              className="h-14 w-14 mt-9 bg-sky-400 rounded-full flex justify-center items-center animation-pulse  text-center"
            >
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white  item-center "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg "
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
