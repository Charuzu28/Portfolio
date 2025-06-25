import React, {useState} from 'react'

const NavBar = () => {
  const [showDropdown, setShowDropDown] = useState(false);
  return (
    <nav className='flex justify-between px-4 py-6 items-center w-full relative shadow-md'>
      
      
          <h1 clas>Charles A.</h1>
          
        <ul className='flex items-center'>
          <li className='px-2 relative'onClick={ () =>setShowDropDown(!showDropdown)}>
            <button className='hover:underline cusroir-pointer'>Projects</button>
            {showDropdown &&(
              <ul className='absolute rounded z-10 bg-white right-0 shadow-md px-2 py-2 w-48 mt-2'>
                <li><a href="" className='px-2 hover:underline'>Web Projects</a></li>
                <li><a href="" className='px-2 hover:underline'>Mobile Projects</a></li>
                <li><a href="" className='px-2 hover:underline'>UI/UX Designs</a></li>
                <li><a href="" className='px-2 hover:underline'>Graphic Designs</a></li>
              </ul>
            )}
            </li>
          <li><a href="">Contacts</a></li>
          <li><a href=""></a></li>
        </ul>
    </nav>
  )
}

export default NavBar