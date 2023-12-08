import React, { useRef, useEffect, useState } from "react";
import Hello from "../assets/login.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userLoginAction } from "../redux/actions/userAction";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/solid";

const LoginForm = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => {
    navigate("/register");
  };
  const { userInfo } = useSelector((state) => state.login);

  useEffect(() => {
    console.log("userInfo", userInfo);
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      dispatch(userLoginAction(email, password));
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center py-14 px-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-200 tracking-wide">
          Welcome Back!!
        </h2>
        <img className="mx-auto h-32 w-auto mt-12" src={Hello} alt="Workflow" />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-black py-12 px-6 sm:px-10 mx-auto flex items-center justify-center">
          <form
            className="mb-0 space-y-6 items-center w-full max-w-xs"
            onSubmit={submitHandler}
          >
            <div className="relative text-gray-600 focus-within:text-sky-400">
              <span className="absolute inset-y-0 left-0 flex items-center">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <UserIcon className="h-6 w-6" />
                </button>
              </span>
              <input
                ref={inputRef}
                type="Email"
                name="q"
                className="w-full max-w-xs py-2 text-sm text-white border-b bg-black pl-10 focus:outline-none focus:bg-black focus:border-sky-400 focus:text-gray-500"
                placeholder="Email..."
                autoComplete="on"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative text-gray-600 focus-within:text-sky-400">
              <span className="absolute inset-y-0 left-0 flex items-center">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <LockClosedIcon className="h-6 w-6" />
                </button>
              </span>
              <input
                type="text"
                name="q"
                className=" w-full max-w-xs py-2 text-sm text-white bg-black border-b pl-10 focus:outline-none focus:bg-black focus:border-sky-400 focus:text-gray-500"
                placeholder="Password..."
                autoComplete="on"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="h-12 w-24 mt-9 bg-sky-400 rounded-full flex justify-center items-center hover:bg-sky-300 text-gray-300 font-bold text-center"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-4">
        <p className="mt-2 text-center text-2xl text-gray-200 max-w">
          New User?
        </p>
        <button
          onClick={handleClick}
          type="submit"
          className="h-12 w-32  bg-sky-400 rounded-full flex justify-center items-center animation-pulse text-gray-300 font-bold text-center"
        >
          Join Now
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
