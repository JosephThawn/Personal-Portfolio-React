import React from "react";
import ME from "../assets/me.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="sm:w-full h-screen bg-zinc-500	">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <p className="text-white">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#black]">
              Pau Thawn
            </h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#black]">
              I'm a Full Stack Developer.
            </h2>
            <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
        <Link to='work' smooth={true} duration={500}>
            View my projects
          </Link>
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3 ' />
          </span>
        </button>
      </div>
          </div>
          <div className="flex flex-col justify-start p-2 m-3 ">
            <img src={ME} style={{ width: "500px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
