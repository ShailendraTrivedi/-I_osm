import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const RightLogin = () => {
  const [open, setOpen] = useState(false);

  const handleRegisterClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="flex justify-center items-center h-full w-full p-5">
        <div className="h-[500px] w-[600px]">
          {!open ? (
            <SignIn reg={handleRegisterClick} />
          ) : (
            <SignUp reg={handleRegisterClick} />
          )}
        </div>
      </div>
    </>
  );
};

export default RightLogin;
