import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa";

import { FaInstagramSquare } from "react-icons/fa";

import myPhoto from './../assets/mypics/2.png'
import IconMarquee from '../components/IconMarquee';

import ProjectCard from '../components/ProjectCard';
import Uiweb from '../assets/project/UIweb.png';
import BC from '../assets/project/BarangayConnect.png';
import Chapterly from '../assets/project/Chapterly.png';
import RoomBooking from '../assets/project/RoomBooking.png';
import comingSoon from '../assets/project/comingSoon.jpg';
import About from './About';
import Contact from './Contact';



const Home = () => {
  return (
    <main className='min-h-screen mx-auto max-w-7xl'>
      {/* Contents */}
      <section className='flex flex-col-reverse md:flex-row items-center justify-center mx-auto md:p-20 md:m-0 h-screen mt-10' id='home'>
          <div className='flex-1 text-center md:text-left space-y-3 p-10'>
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
        <h3 className="text-3xl text-center font-bold mb-4">Tech Stack & Tools</h3>
        <div className="">
            <IconMarquee />
        </div>
        <p className='text-center py-7 text-sm md:text-xl text-gray-600 dark:text-gray-400' >"I'm proficient in using the MERN stack, AMP stack, Figma, and Tailwind CSS."</p>
      </section>


      {/* Projects */}
      <section className='w-full py-16 px-8 my-25' id='projects'>
        <h1 className='text-start text-3xl font-bold mb-10 mt-10'>Projects</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <ProjectCard
            title="Who's Next?(Web Design)"
            description="A job matching platform that connects job seekers and recruiters through interactive swiping."
            image={Uiweb}
            tags={['Figma']}
            link="#"
          />

          <ProjectCard
            title="Chapterly"
            description="A Web-Based Bookshop E-commerce System"
            image={Chapterly}
            tags={['Mongo','ExpressJS','React', 'NodeJS', 'Tailwind', 'Figma']}
            link="#"
          />
          <ProjectCard
            title="Room Booking System"
            description="A Room Booking System that helps both student and professor to reserve rooms in a convenient way."
            image={RoomBooking}
            tags={['Mongo','ExpressJS','React', 'NodeJS', 'Tailwind', 'Figma']}
            link="#"
          />
          <ProjectCard
            title="Barangay Connect"
            description="This is a proposed mock up UI for a barangay appointment system."
            image={BC}
            tags={['Figma']}
            link="#"
          />
          <ProjectCard
            title="Coming Soon!!!"
            description="Coming Soon!!!"
            image={comingSoon}
            tags={['Coming Soon!!!']}
            link="#"
          />
          <ProjectCard
            title="Coming Soon!!!"
            description="Coming Soon!!!"
            image={comingSoon}
            tags={['Coming Soon!!!']}
            link="#"
          />

        </div>
      </section>
      
      <div id='about'></div>
      {/* About */}
      <About />

      {/* Contact */}
      <Contact />
    </main>
  )
}

export default Home