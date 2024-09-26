import React from 'react';

const NewsLetter = () => {
  return (
    <div className='w-full py-20 sm:py-16 px-4 text-white'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-between'>
        <div className='mb-4'>
          <h2 className='text-3xl font-bold'>
            Stay Updated with Ethereum Insights
          </h2>
          <p className='text-lg mt-2 font-[Mont]'>
            Sign up to our newsletter for the latest tips, trends, and insights into the Ethereum blockchain and decentralized finance ecosystem.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 my-4'>
          <input
            className='pl-5 w-full sm:w-[450px] md:w-[550px] rounded-lg text-black bg-gray-300'
            type='email'
            placeholder='Enter your email'
          />
          <button
            className='bg-gradient-to-r from-[#ff6d00] via-[#ff7900] to-[#ff9100] hover:bg-[#eac42a] px-6 py-3 rounded-lg w-full sm:w-auto text-xl  font-normal text-[#090A29] transition-colors duration-300'>
            Subscribe
          </button>
        </div>

        <div className='mt-2'>
          <p className='text-base font-[Mont]'>
            We care about the security of your data. Read our{' '}
            <span className='text-[#ff6d00] cursor-pointer'>Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;

