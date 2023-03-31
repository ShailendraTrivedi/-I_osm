import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignIn = ({ reg }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = () => {
    reg();
  };
  const toLogin = () => {
    if (email === "" || password === "") {
      toast.error("Please fill all details", {
        position: "top-right",
        theme: "dark",
        autoClose: 2000,
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="flex flex-col justify-around items-center h-full w-full">
        <div className="flex text-3xl gap-2">
          <img src="./Images/Google.png" alt="" className="" />
          Sign in with Google
        </div>
        <div className="flex w-full items-center gap-1">
          <hr className="border-gray-500 border-1 w-[20rem]" />
          <div className="text-2xl">Or</div>
          <hr className="border-gray-500 border-1 w-[20rem]" />
        </div>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-2 border-gray-500 rounded-lg p-2 outline-none"
          placeholder="Email Address"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border-2 border-gray-500 rounded-lg p-2 outline-none"
          placeholder="Password"
        />
        <div className="flex justify-between w-full text-xl">
          <div className="flex justify-center items-center gap-2">
            <input type="checkbox" className="h-5 w-5 " />
            Remember me
          </div>
          <div className="text-blue-700">Forgot Password ?</div>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={toLogin}
            className=" border-2 border-blue-600 bg-blue-600 text-white rounded-md w-[200px] p-2 text-xl"
          >
            Login
          </button>
        </div>
        <div className="flex gap-3">
          You are new here ?
          <button
            className="cursor-pointer text-blue-700"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
