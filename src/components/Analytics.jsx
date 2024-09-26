import React from 'react';
import laptop from '../images/laptop1.png';

const Analytics = () => {
  return (
    <div className='w-full py-4 sm:py-5 px-4 text-white relative z-10'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
        <img
          className='w-[350px] sm:w-[400px] md:w-[550px] mx-auto my-4'
          src={laptop} alt="laptop" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#7b2cbf] font-medium font-[Mont] text-[28px]'>Blockchain Data Analysis</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Harness the Power of Ethereum for Real-Time Analytics
          </h1>
          <p className='py-2 font-[Mont]'>
            Leverage Ethereum’s decentralized infrastructure to analyze your blockchain data like never before. Monitor transactions, optimize smart contracts, and gain insights that fuel innovation across <b className='text-[#ff8500] text-xl'>DeFi, NFTs, and more.</b>
          </p>
          <button className="bg-gradient-to-r from-[#7b2cbf] to-[#5a189a] hover:bg-[#8c03c5] w-[150px] sm:w-[200px] text-2xl sm:text-lg rounded-md font-medium my-6 mx-auto md:mx-0 py-2 sm:py-3 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;


