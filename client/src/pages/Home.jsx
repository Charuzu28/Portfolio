import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa";

import { FaInstagramSquare } from "react-icons/fa";

import myPhoto from './../assets/mypics/3.jpg'
import IconMarquee from '../components/IconMarquee';

import ProjectCard from '../components/ProjectCard';
import Uiweb from '../assets/project/UIweb.png';
import BC from '../assets/project/BarangayConnect.png';
import Chapterly from '../assets/project/Chapterly.png';
import RoomBooking from '../assets/project/RoomBooking.png';
import comingSoon from '../assets/project/comingSoon.jpg';
import blynkn from '../assets/project/Blynkn.png'
import About from './About';
import Contact from './Contact';
import Timeline from '../components/Timeline/Timeline.jsx'



const Home = () => {
  return (
    <main className='min-h-screen mx-auto max-w-7xl'>
      {/* Contents */}
      <section className='flex flex-col-reverse md:flex-row items-center justify-center mx-auto md:p-20 md:m-0 h-screen ' id='home'>
          <div className='flex-1 text-center md:text-left space-y-3 p-10'>
            <h1 className='text-3xl md:text-4xl font-bold font-poppins'>Hi! Welcome to my page!</h1>
              <h2 className='text-2xl md:text-3xl font-poppins'>I am <span className='font-poppins font-bold'>Charles</span><span className='text-blue-500 font-bold'>.</span></h2>
              <p className='text-lg md:text-xl text-gray-600 font-poppins'>A Full-stack Web developer, Web Designer, and Graphic Designer.</p>
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

          <div className='flex items-center justify-center mb-10 md:mb-0'>
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
      <section className='py-16 px-8 w-full max-w-6xl mx-auto items-center justify-center'>
        <h3 className="text-3xl text-center font-bold mb-4 font-poppins">Tech Stack & Tools</h3>
        <div className="">
            <IconMarquee />
        </div>
        <p className='font-poppins text-center py-7 text-sm md:text-lg text-black' >"MongoDB, ExpressJS, ReactJS, NodeJS, TailwindCSS, PHP, Javascript, Figma, and Postman API"</p>
      </section>

      {/* About */}
      <About />
      {/* Projects */}
      <section className='mb-10' id='projects'>
        <h1 className='text-center text-3xl font-bold mb-10 mt-10'>PROJECTS</h1>
        <Timeline />
      </section>

      {/* Contact */}
      <div className='w-full mt-10'>
      <Contact />
      </div>
    </main>
  )
}

export default Home