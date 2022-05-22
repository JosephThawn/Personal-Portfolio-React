import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
// import ME from "../assets/me.jpg";
import sample  from '../assets/sample.jpg'

const Home = () => {
  const backgroundIamgeStyle = {
    backgroundImage: `url("${sample}")`,
    backgroundsize: 'cover',

  }
  return (
    <div name="home" className="sm:w-full h-screen bg-slate-500 ">
          <div className="sm:w-95 h-screen  bg-no-repeat bg-contain bg-center" style ={backgroundIamgeStyle}>

          <div className="max-w-[1200px] mx-auto px-6 flex flex-col justify-center h-full">
            <div className="flex flex-row">
                  <div className="flex flex-col">
                      <p className="text-white text-2xl">Hi, my name is</p>
                      <h1 className="text-4xl sm:text-7xl font-bold text-white">
                          Pau Thawn
                      </h1>
                      <h2 className="text-4xl sm:text-7xl font-bold text-white">
                          I'm a Full Stack Developer
                      </h2>
                          <div>
                              <button className='text-white group border-2 px-6 py-3 my-2 flex     items-center       
                                  hover:bg-pink-600 hover:border-pink-600'>
                                      <Link to='work' smooth={true} duration={500} className="text-3xl">
                                          View my projects
                                      </Link>
                                      <span className='group-hover:rotate-90 duration-300'>
                                          <HiArrowNarrowRight className='ml-3 ' />
                                      </span>
                              </button>
                          </div>
                  </div>                      
            </div>
          

          </div>
          </div>


        </div>
        
            
  );
};

export default Home;
