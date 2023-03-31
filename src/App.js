import React from "react";
import BelowHeader from "./HeaderPages/BelowHeader.js";
import Header from "./HeaderPages/Header.js";
import Carousel from "./UpperBody.js/Carousel.js";
const App = () => {
  return (
    <>
      <div className="bg-red-500 lg:bg-green-400 md:bg-blue-700 sm:bg-yellow-300 h-[100px] sm:h-[160px]"></div>
      <div className="max-w-screen max-h-screen">
        <div className="">
          <Header />
        </div>
        <div className="">
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default App;
