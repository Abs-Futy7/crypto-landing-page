import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="w-full h-screen relative text-white">
      <div className="max-w-[800px] mx-auto h-screen flex flex-col items-center text-center justify-center p-4">
        {/* Intro Text */}
        <p className="text-[#ffffff] font-[Mont] text-xl sm:text-2xl md:text-3xl font-medium px-2">
          Welcome to the Future of
        </p>

        {/* Main Heading */}
        <h1 className="font-medium text-4xl sm:text-5xl md:text-6xl md:py-5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Ethereum Blockchain
        </h1>

        {/* Typed Text Section */}
        <div className='flex flex-wrap justify-center items-center'>
          <p className='text-lg sm:text-2xl font-[Mont] md:text-3xl font-light'>
            Powering decentralized apps for
          </p>
          <ReactTyped
            className='text-lg sm:text-2xl md:text-3xl font-bold text-[#9647db] sm:pl-4'
            strings={['Developers', 'Innovators', 'Creators']}
            typeSpeed={140}
            backSpeed={160}
            loop
          />
        </div>

        {/* Subtitle */}
        <p className='text-[10px] sm:text-lg md:text-xl font-light text-gray-500 sm:px-5 py-5'>
          Join millions of users leveraging Ethereum for the next generation of decentralized solutions.
        </p>

        {/* Call to Action Button */}
        <button className="bg-gradient-to-r from-[#ff6d00] via-[#ff7900] to-[#ff9100] hover:bg-[#eac42a] w-[150px] sm:w-[200px] text-md sm:text-lg rounded-full font-medium my-6 mx-auto py-2 sm:py-3 transition-colors duration-300 text-[#090A29] font-[Mont]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;


