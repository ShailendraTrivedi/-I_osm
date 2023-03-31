import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import LeftLogin from "./LeftLogin.js";
import RightLogin from "./RightLogin.js";
const Login = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-500 opacity-50 z-10"
          onClick={handleClose}
        />
      )}
      <div className="h-[800px] w-[1500px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md z-20">
        <div className="fixed right-5">
          <RxCross1 onClick={handleClose} className="h-20 w-10" />
        </div>
        <div className="grid grid-cols-3 h-full">
          <LeftLogin />
          <div className="col-span-2">
            <RightLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
