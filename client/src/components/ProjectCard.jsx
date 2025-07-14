import React from 'react'

const ProjectCard = ({title, image, description, link, tags}) => {
  return (
    <div className='flex flex-col bg-gray-50 border border-gray-300 w-full sm:max-w-[90%] lg:max-w-[70%] md:max-w-[40%] rounded-lg shadow-md'>
        <img 
        src={image}
        alt={title}
        className='rounded-lg' />

        <div className='p-2'>
          <h3 className='font-semibold px-1'>{title}</h3>
            <p className='py-1 px-1'>{description}</p>
            <div className=''>
              {tags && tags.map((tag, idx) => (
                <span
                key={idx}
                className='px-1'>
                  {tag}
                </span>
              ))}
            </div>

            <a 
            href={link}
            className='py-2 px-1'
            target='_blank'
            rel='noopener noreferer'>
              View project →
            </a>
        </div>
    </div>
  )
}

export default ProjectCard