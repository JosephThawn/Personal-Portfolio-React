import React from 'react';
import me  from '../assets/me.jpg'


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-slate-500 text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='pt-20 pb-3 text-center'>
              <p className='text-4xl text-center font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold p-3'>
              <img src={me}/>
            </div>
            <div className="text-3xl p-3">
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
