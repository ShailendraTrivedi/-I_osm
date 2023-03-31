import React from "react";

const LeftLogin = () => {
  return (
    <>
      <div className="bg-black text-white ">
        <div className="grid grid-row-2 h-full">
          <div className=" h-full w-full">
            <div className="flex flex-col gap-3 h-[250px] p-10 justify-center items-center">
              <div className="text-xl w-[230px]">Step into a world of </div>
              <div className=" text-5xl text-orange-500 mx-10">
                Indian Online Shopping Mall!
              </div>
            </div>
            <div className="flex px-10 justify-center items-center text-xl">
              Let's get started! Sign up with your mobile number to access
              exclusive deals and seamless shopping.
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="w-full"
              alt="Login"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftLogin;
