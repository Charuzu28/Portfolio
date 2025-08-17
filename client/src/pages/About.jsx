import React from 'react'
import aboutPic from '../assets/mypics/about.png'
import OceanPic from '../assets/mypics/ocean.jpg'
import SkillCard from '../components/SkillCard'

const About = () => {
    
  return (
    <section className='my-25'>
        <div className='flex flex-col md:flex-row gap-3 md:gap-8 mb-5'>
            <div className='flex-1 flex justify-center'>
                <img src={OceanPic} alt="A photo of mine" className='object-cover py-0 px-0 md:py-3 md:px-4' />
            </div>
            <div className='flex-1 flex flex-col pr-3 pl-3 text-justify justify-center md:px-5' >
                <h1 className='text-5xl md:text-6xl font-medium font-poppins mb-4'>Hi there!</h1>
                <p className='text-sm md:text-xl font-poppins leading-relaxed'>Fueled by passion, I turn ideas into designs that breathe life.
                For me, it’s not just about creating, it’s about crafting experiences that inspire, connect, and stick in people’s minds.
                Every pixel, every detail, every decision is driven by one goal: to make something unforgettable.</p>
            </div>
        </div>

        <div className='flex flex-col md:flex-row gap-6 '>
            <div className='flex flex-col text-justify gap-3 md:gap-8 py-3 px-4'>
                <h1 className='text-5xl md:text-6xl font-medium font-poppins mb-4'>
                    My Career So Far
                </h1>
                <p className='text-sm font-poppins leading-relaxed md:text-xl'>
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