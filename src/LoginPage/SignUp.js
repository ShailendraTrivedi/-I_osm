import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiArrowBack } from "react-icons/bi";
const SignUp = ({ reg }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [consfirmPassword, setConsfirmPassword] = useState("");
  const BackToLogin = () => {
    reg();
  };
  const handleRegister = () => {
    {
      if (email === "" || password === "" || consfirmPassword === "") {
        toast.error("Please fill all details", {
          position: "top-right",
          theme: "dark",
          autoClose: 2000,
        });
      } else {
        reg();
      }
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="relative flex flex-col justify-around h-full w-full">
        <BiArrowBack
          className="absolute top-0 left-0 text-3xl"
          onClick={BackToLogin}
        />
        <div className="flex justify-center text-3xl">
          Start Your Journey With Us !
        </div>
        <input
          type="text"
          className="w-full border-2 border-gray-500 rounded-lg p-2 outline-none focus:border-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <input
          type="password"
          className="w-full border-2 border-gray-500 rounded-lg p-2 outline-none focus:border-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <input
          type="password"
          className="w-full border-2 border-gray-500 rounded-lg p-2 outline-none focus:border-black"
          value={consfirmPassword}
          onChange={(e) => setConsfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />

        <div className="flex items-center justify-center">
          <button
            onClick={handleRegister}
            className=" border-2 border-blue-600 bg-blue-600 text-white rounded-md w-[200px] p-2 text-xl"
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
