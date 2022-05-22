import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import Covid from '../assets/covid.jpg';
import Whatsapp from '../assets/whatsapp.png';
import Progress from '../assets/progress.png'
import Animation from '../assets/movie-list-animation.png'
import OpneAI from '../assets/fun-with-ai.png'
import Kai from '../assets/kai.png'
import Nft from '../assets/nft.png'
import Portfolio from '../assets/portfolio.png'

const Work = () => {
  return (
    <div name='work' className='w-full sm:h-screen bg-scroll text-gray-300 bg-slate-500'>
      <div className='max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full'>
        <div className='pb-1 pt-20 text-center'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects
          </p>
          <p className='py-8 text-2xl'>Check out some of my recent projects</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
            <div
            style={{ backgroundImage: `url(${Covid})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Covid-19 Tracker
              </span>
              <div className='pt-8 text-center'>
                <a href='http://covid19-reactjs.s3-website.us-east-2.amazonaws.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Visit
                  </button>
                </a>
                <a href='https://github.com/JosephThawn/Covid-19-Tracker-ReactJS.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Nucampsite ReactNative
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.youtube.com/watch?v=eHGo_DfOhgg&t=5s'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Visit
                  </button>
                </a>
                <a href='https://github.com/JosephThawn/Nucampsite-React-Native.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Nucampsites MERN
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/JosephThawn/Nucampsite-MERN-Client.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Visit
                  </button>
                </a>
                <a href='https://github.com/JosephThawn/Nucampsite-MERN-Client.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
         
          <div
            style={{ backgroundImage: `url(${Portfolio})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Personal Project Portfolio
              </span>
              <div className='pt-8 text-center'>
                <a href='http://pauthawn-portfolio-react.s3-website.us-east-2.amazonaws.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Visit
                  </button>
                </a>
                <a href='https://github.com/JosephThawn/Personal-Portfolio-React.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Animation})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Movie List Animation
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/JosephThawn/movie-list-animation.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Visit
                  </button>
                </a>
                <a href='https://github.com/JosephThawn/movie-list-animation.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          <div
            style={{ backgroundImage: `url(${Whatsapp})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Whatsapp ReactJS
              </span>
              <div className='pt-8 text-center'>
                <a href='http://whatsapp-clone-react.s3-website.us-east-2.amazonaws.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Visit
                  </button>
                </a>
                <a href='https://github.com/JosephThawn/Whatsapp-ReactJS-Firebase.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${OpneAI})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Personal Project Portfolio
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/JosephThawn/Personal-Portfolio-React.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Visit
                  </button>
                </a>
                <a href='https://github.com/JosephThawn/Personal-Portfolio-React.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          <div
            style={{ backgroundImage: `url(${Kai})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Kai Burmese Cuisine
                (work in process)
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/JosephThawn/kai-burmese-cuisine.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Visit
                  </button>
                </a>
                <a href='https://github.com/JosephThawn/kai-burmese-cuisine.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
      
          <div
            style={{ backgroundImage: `url(${Nft})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Next Project
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Visit
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
