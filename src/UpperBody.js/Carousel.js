import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Carousel = () => {
  const [index, setIndex] = useState(0);
  const prev = () => {
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  };
  const next = () => {
    setIndex(index === slides.length - 1 ? 0 : index + 1);
  };
  const slides = [
    {
      url: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg",
    },
    {
      url: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg",
    },
    {
      url: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg",
    },
  ];

  // Increment slide index every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(index === slides.length - 1 ? 0 : index + 1);
    }, 3000);
    return () => clearInterval(timer);  
  }, [index, slides.length]);

  return (
    <>
      <div className="relative transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
        <IoIosArrowBack
          onClick={prev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-5xl"
        />
        <IoIosArrowForward
          onClick={next}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-5xl"
        />
        <img
          src={slides[index].url}
          className="block w-full object-cover h-[400px]"
          alt="..."
        />
      </div>
    </>
  );
};

export default Carousel;
