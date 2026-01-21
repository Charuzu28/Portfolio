import React from 'react'
import { FaGithub } from "react-icons/fa";

// FIX FOOTER
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-black flex px-3 py-5 items-center justify-center '>
        <div className='text-sm text-center text-white flex gap-0.5'>
          © {year} Chs <p className='text-blue-600 font-extrabold'>. </p> | All Rights Reserved
        </div>
    </footer>
  )
}

export default Footer