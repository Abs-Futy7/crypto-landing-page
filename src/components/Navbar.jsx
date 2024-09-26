import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='max-w-[1240px] flex justify-between items-center mx-auto text-[#090A29] px-6 mt-6 rounded-full bg-gradient-to-r from-[#7b2cbf] via-[#581AA9] to-[#5a189a] bg-opacity-10 backdrop-blur-lg'>
      {/* Logo Section */}
      <div className='py-4 px-4'>
        <h1 className='text-3xl text-[#ffffff] font-medium font-[Mont]'>Ethereum</h1>
      </div>

      {/* Nav Links */}
      <ul className='hidden md:flex gap-6 text-[16px]'>
        <li className='rounded-full px-3 py-1 duration-300 hover:text-yellow-400 text-white text-base cursor-pointer'>Home</li>
        <li className='rounded-full px-3 py-1 duration-300 hover:text-yellow-400 text-white text-base cursor-pointer'>About</li>
        <li className='rounded-full px-3 py-1 duration-300 hover:text-yellow-400 text-white text-base cursor-pointer'>Resources</li>
        <li className='rounded-full px-3 py-1 duration-300 hover:text-yellow-400 text-white text-base cursor-pointer'>Contacts</li>
      </ul>

      {/* Hamburger Menu Icon for small screens */}
      <div onClick={handleNav} className='md:hidden'>
        { !nav ? <AiOutlineMenu /> : <AiOutlineClose /> }
      </div>

      {/* Side Drawer */}
<ul className={`fixed top-20 ${nav ? 'left-0' : 'left-[-100%]'} w-[60%] h-screen bg-[#090A29] px-10 border-r border-r-gray-900 transition-transform duration-500 ease-in-out`}>
  
  <li className='border-b border-gray-600 py-2 cursor-pointer text-white'>Home</li>
  <li className='mt-2 border-b border-gray-600 py-2 cursor-pointer text-white'>About</li>
  <li className='mt-2 border-b border-gray-600 py-2 cursor-pointer text-white'>Resources</li>
  <li className='mt-2 py-2 cursor-pointer text-white'>Contacts</li>
</ul>


      {/* Join Now Button */}
      <div className='hidden md:block bg-[#ff8500] font-[Mont] text-[#090A29] px-3.5 py-1.5 rounded-full cursor-pointer transition-colors duration-300 hover:bg-yellow-500 hover:text-[#090A29] font-normal'>
        Join Now
      </div>
    </div>
  );
};

export default Navbar;


