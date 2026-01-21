import React from 'react'

const SkillCard = ({ skill }) => {
  return (
    <div className="
      inline-flex items-center justify-center
      px-4 h-10
      border border-gray-300 rounded-lg
      hover:bg-black hover:text-white
      text-xs md:text-sm font-poppins font-medium
      transition cursor-pointer
    ">

      {skill}
    </div>
  )
}


export default SkillCard