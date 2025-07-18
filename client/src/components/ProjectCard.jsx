import React from 'react'

const ProjectCard = ({title, image, description, link, tags}) => {
  return (
    <div className='flex flex-col bg-gray-50 border border-gray-300 w-full rounded-lg shadow-md transition-transform duration-300 hover:scale-105'>
      <div className='overflow-hidden'>
        <img 
        src={image}
        alt={title}
        className='rounded-lg object-cover transition-transform duration-300 hover:scale-110 origin-center' />
      </div>
       

        <div className='p-2'>
          <h3 className='font-semibold px-1'>{title}</h3>
            <p className='py-1 px-1'>{description}</p>
            <div className='flex flex-wrap gap-2'>
              {tags && tags.map((tag, idx) => (
                <span
                key={idx}
                className='px-2 py-1 bg-gray-200 text-sm rounded-full text-gray-700'>
                  {tag}
                </span>
              ))}
            </div>
              
            <a 
            href={link}
            className='inline-block py-2 px-2 border border-gray-300 rounded-lg mt-2 mb-2 bg-white hover:bg-gray-100 transition-colors text-center text-sm'
            target='_blank'
            rel='noopener noreferer'>
              View project
            </a>
        </div>
    </div>
  )
}

export default ProjectCard