import React from 'react'
import { FaGithub } from "react-icons/fa";

// FIX FOOTER
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-white flex px-3 py-5 items-center justify-center '>
        <div className='text-sm text-center text-gray-500'>
          © {year} Chs | All Rights Reserved
        </div>
    </footer>
  )
}

export default Footer