import React from 'react';
import { LiaUserSolid } from 'react-icons/lia';
import { PiUsersBold, PiUsersThreeBold } from 'react-icons/pi';

const Cards = () => {
  return (
    <div className='w-full py-16 px-4 text-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {/* Single User Plan */}
        <div className='w-full shadow-xl flex flex-col items-center justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#e4d9ec] text-black opacity-90'>
          <LiaUserSolid className='text-5xl mb-4 text-[#ac03f5]' />
          <p className='text-xl font-bold mb-2'>Basic Plan</p>
          <p className='text-xl font-bold border-b-2 border-gray-900 mb-4'>$150</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b border-gray-300'>500 GB Storage</p>
            <p className='py-2 border-b border-gray-300'>1 Granted User</p>
            <p className='py-2 border-b border-gray-300'>Send up to 2 GB</p>
          </div>
          <button className='bg-[#ac03f5] hover:bg-[#8c03c5] w-full sm:w-[200px] text-md sm:text-lg rounded-md font-medium my-4 py-2 transition-colors duration-300'>
            Start Trial
          </button>
        </div>

        {/* Double User Plan */}
        <div className='w-full shadow-xl flex flex-col items-center justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300  bg-[#e4d9ec] text-black opacity-90'>
          <PiUsersBold className='text-5xl mb-4 text-[#ac03f5]' />
          <p className='text-xl font-bold mb-2'>Standard Plan</p>
          <p className='text-xl font-bold border-b-2 border-gray-900 mb-4'>$350</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b border-gray-300'>1 TB Storage</p>
            <p className='py-2 border-b border-gray-300'>2 Granted Users</p>
            <p className='py-2 border-b border-gray-300'>Send up to 5 GB</p>
          </div>
          <button className='bg-black hover:bg-gray-800 w-full sm:w-[200px] text-md sm:text-lg rounded-md font-medium my-4 py-2 transition-colors duration-300 text-[#ac03f5]'>
            Start Trial
          </button>
        </div>

        {/* Triple User Plan */}
        <div className='w-full shadow-xl flex flex-col items-center justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300  bg-[#e4d9ec] text-black opacity-90'>
          <PiUsersThreeBold className='text-5xl mb-4 text-[#ac03f5]' />
          <p className='text-xl font-bold mb-2'>Pro Plan</p>
          <p className='text-xl font-bold border-b-2 border-gray-900 mb-4'>$550</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b border-gray-300'>5 TB Storage</p>
            <p className='py-2 border-b border-gray-300'>3 Granted Users</p>
            <p className='py-2 border-b border-gray-300'>Send up to 10 GB</p>
          </div>
          <button className='bg-black hover:bg-gray-800 w-full sm:w-[200px] text-md sm:text-lg rounded-md font-medium my-4 py-2 transition-colors duration-300 text-[#ac03f5]'>
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
