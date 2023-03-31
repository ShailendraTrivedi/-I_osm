import React, { useState } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { RiShoppingCartFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import Login from "../LoginPage/Login";
import { motion } from "framer-motion";
const Header = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpenLogin && <Login onClose={setIsOpenLogin} />}
      <div className="bg-black flex w-[100%] h-40 justify-between items-center gap-10 xl:px-10 px-6 text-lg">
        <div className="flex justify-between items-center xl:gap-52 gap-20">
          <div className="relative flex-col justify-center text-orange-400 gap-3 xl:pl-20 pl-6">
            <div className="flex justify-center h-[70px] items-center w-full gap-3">
              <div className="text-[5rem]">I</div>
              <div className="text-[4rem]">OSM</div>
            </div>
            <div className="flex">Indian Online Shopping Mall</div>
          </div>
          <div className="relative flex flex-wrap">
            <input
              type="search"
              className="relative flex rounded border w-[400px] h-[45px] lg:hidden md:hidden sm:hidden p-3 outline-none bg-white"
              placeholder="Search for products, brand and more"
            />
            <span className="right-0 flex flex-col items-center rounded px-3 py-1.5 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="xl:h-8 xl:w-8 h-10 w-10"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="xl:hidden">Search</div>
            </span>
          </div>
        </div>
        <div className="flex gap-16 text-xl justify-center items-center">
          <div className="relative">
            <button
              className="flex items-center text-white gap-2"
              aria-label="Menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              More
              <IoIosArrowDown />
            </button>
            <motion.div
              className="absolute left-0 h-[164px] w-[200px] right-0 z-[1000] text-black bg-white border border-gray-300 rounded shadow-md"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : -10,
                transition: { duration: 0.2 },
              }}
            >
              <ul className="text-sm">
                <li>
                  <a
                    href="#!"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-400"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-400"
                  >
                    24 x 7 Customer Care
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-400"
                  >
                    Join Us
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-gray-400"
                  >
                    Download App
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
          <motion.div
            whileHover={{ scale: 1.3 }}
            onClick={() => setIsOpenLogin(true)}
            className="flex flex-col justify-center items-center text-white"
          >
            <motion.img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
              className="w-14 rounded-full shadow-lg"
              alt="Avatar"
            />
            Profile
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.3 }}
            className="flex flex-col text-white justify-center items-center"
          >
            <BsSuitHeartFill className="h-[30px] w-[30px]" />
            Wishlist
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.3 }}
            className="flex flex-col text-white justify-center items-center"
          >
            <RiShoppingCartFill className="h-[30px] w-[30px]" />
            Order
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Header;
