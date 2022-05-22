import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  

} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-slate-500	 flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4 text-2xl pb-6'>Shoot me an email - josianthawn@gmail.com</p>
            </div>
            <div className='flex '>
        
          <li className=' flex justify-between items-center hover:ml-[-10px]  bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/pau-thawn
              '
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='flex justify-between items-center hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/JosephThawn'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center  hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://josianthawn@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center  hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/pau-thawn/overlay/1635488736985/single-media-viewer/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        
      </div>
        </form>
    </div>
  )
}

export default Contact

