import React from 'react'
import aboutPic from '../assets/mypics/about.png'
import OceanPic from '../assets/mypics/ocean.jpg'
import SkillCard from '../components/SkillCard'

const About = () => {
    
  return (
    <section id="about" className='flex flex-col-reverse md:flex-row items-center justify-center mx-auto md:p-20 md:m-0 h-screen '>

        <div className='flex flex-col md:flex-row gap-6 '>
            <div className='flex flex-col text-justify gap-3 md:gap-8 py-3 px-4'>
                <h1 className='text-5xl md:text-6xl font-medium font-poppins mb-4'>
                   About Me
                </h1>
                <p className='text-sm font-poppins md:text-xl'>
                    Proactive web developer pursuing a BS in Information Technology at Divine Word College of Legazpi. Experienced in the MERN stack, Tailwind CSS, Figma, and graphic design, with strong skills in UI/UX, coding, and collaboration. Adaptable, quick to learn, and eager to contribute creativity and technical expertise to dynamic online teams.
                </p>
            </div>

            <div className='flex flex-wrap gap-3 py-2 px-3'>
                <SkillCard
                    skill='FRONTEND'
                />
                <SkillCard
                    skill='UI DESIGN'
                />
                <SkillCard
                    skill='UX DESIGN'
                />
                <SkillCard
                    skill='PROTOTYPING'
                />
                <SkillCard
                    skill='HTML/CSS'
                />
                <SkillCard
                    skill='FIGMA'
                />
                <SkillCard
                    skill='MERN'
                />
                <SkillCard
                    skill='AMP'
                />
                <SkillCard
                    skill='GRAPHIC DESIGN'
                />
                <SkillCard
                    skill='TAILWINDCSS'
                />

            </div>
        </div>
    </section>
  )
}

export default About