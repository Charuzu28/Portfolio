import React, {useState} from 'react'
import{ Menu, X } from 'lucide-react'

const NavBar = () => {
  const [showDropdown, setShowDropDown] = useState(false);
  const navigation = ['Projects', 'Contact', 'About'];
  return (
    <nav className='bg-white sticky shadow-md top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div>
                Charles <span className=''>.</span>
            </div>

              <div className='hidden md:flex space-x-8'>
                {navigation.map((item) => (
                  <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className='text-gray-600 hover:text-blue-600 font-medium transition'
                  >
                    {item}
                  </a>
                ))}
              </div>
              
              <div className='md:hidden'>
                  <button
                  onClick={() => setShowDropDown(!showDropdown)}
                  className='text-gray-800 focus:outline-none'
                  >
                    {showDropdown ? <X size={24} /> : <Menu size={24} />}
                  </button>
              </div>
          </div>
        </div>

        {showDropdown &&(
          <div className='md:hidden px-4 py-4 space-y-6'>
            {navigation.map((item) => (
              <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className='block hover:text-blue-500 font-medium transition text-gray-800'
              >
                {item}
              </a>
            ))}
          </div>
        )}
    </nav>

    
  )
}

export default NavBar