import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import myPhoto from './../assets/2.png'
import { SiMongodb, SiExpress, SiPhp ,SiApache } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

const Home = () => {
  return (
    <main className='flex px-6 py-10 min-h-screen mx-auto max-w-7xl'>
      <section className='flex flex-col-reverse md:flex-row items-center justify-center mx-auto'>
          <div className='flex-1 text-center md:text-left space-y-3'>
            <h1 className='text-3xl md:text-4xl font-bold font-poppins'>Hi! Welcome to my page!</h1>
              <h2 className='text-2xl md:text-3xl font-poppins'>I am <span className='font-poppins font-bold'>Charles</span><span className='text-blue-500 font-bold'>.</span></h2>
              <p className='text-lg md:text-xl text-gray-600 font-poppins'>A Web developer, Web Designer, and Graphic Designer.</p>
              <div className='flex flex-row justify-center md:justify-start space-x-4'>
              <a
              href='https://github.com/Charuzu28'
              target='_blank'
              rel='noopener noreferrer' 
              className='hover:text-blue-500 text-5xl text-black transition duration-200'>
                <FaGithub />
              </a>
              <a
              href='https://www.linkedin.com/in/charles-alamares-106601279/'
              target='_blank'
              rel='noopener noreferrer' 
              className='hover:text-blue-500 text-5xl text-black transition duration-200'>
                <FaLinkedin />
              </a>
              <a
              href='https://www.instagram.com/itssssmeechs28/'
              target='_blank'
              rel='noopener noreferrer' 
              className='hover:text-blue-500 text-5xl text-black transition duration-200'>
                <FaInstagramSquare />
              </a>

              </div>
          </div>

          <div className='flex-1 flex items-center justify-center mb-10 md:mb-0'>
            {/* <div className='bg-gray-300 shadow-md rounded-full w-48 h-48 md:w-72 md:h-72'>
            </div> */}
            <img
              src={myPhoto} 
              alt='Profile'
              className='rounded-full w-48 h-48 md:w-72 md:h-72 object-cover shadow-md bg-gray-300'
            />
          </div>
      </section>
        
        {/* Tech stack */}
      <section className=''>
            <h2 className='text-black font-bold text-2xl'>Tech Stacks</h2>
            <div>
              <SiMongodb />
              <SiExpress />
              <FaReact />
              <FaNodeJs />
            </div>
            <div>
              <SiApache />
              <DiMysql />
              <SiPhp />
            </div>
      </section>
    </main>
  )
}

export default Home