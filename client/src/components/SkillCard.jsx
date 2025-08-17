import React from 'react'

const SkillCard = ({ skill }) => {
  return (
    <div 
      className="inline-flex items-center px-3 py-1.5 
                 border border-gray-300 rounded-lg
                 hover:bg-black hover:text-white 
                 text-xs md:text-sm font-poppins font-medium
                 transition duration-200"
    >
      {skill}
    </div>
  )
}


export default SkillCard