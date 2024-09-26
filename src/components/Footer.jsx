import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-5xl font-[Mont] text-[#ff9100]'>Ethereum</h1>
        <p className='py-4'>Empowering decentralized applications with Ethereum’s robust blockchain technology. Connect with us to explore the future of secure and transparent digital transactions.</p>
        

        <div className='flex justify-between md:w-[75%] my-6 '>
          <FaFacebookSquare size={30}   />
          <FaInstagram size={30}  />
          <FaTwitterSquare size={30}  />
          <FaGithubSquare size={30}  />
          <FaDribbbleSquare size={30}  />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-xl text-[#ff9e00] pb-2'>Blockchain Solutions</h6>
          <ul>
            <li className='py-2 text-sm'>Smart Contracts</li>
            <li className='py-2 text-sm'>Decentralized Finance</li>
            <li className='py-2 text-sm'>NFTs</li>
            <li className='py-2 text-sm'>Tokenization</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-xl  text-[#ff9e00] pb-2'>Resources</h6>
          <ul>
            <li className='py-2 text-sm'>Whitepapers</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Developer Guides</li>
            <li className='py-2 text-sm'>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-xl text-[#ff9e00] pb-2'>About Us</h6>
          <ul>
            <li className='py-2 text-sm'>Our Mission</li>
            <li className='py-2 text-sm'>Team</li>
            <li className='py-2 text-sm'>Careers</li>
            <li className='py-2 text-sm'>Press</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-xl text-[#ff9e00] pb-2'>Legal</h6>
          <ul>
            <li className='py-2 text-sm'>Privacy Policy</li>
            <li className='py-2 text-sm'>Terms of Service</li>
            <li className='py-2 text-sm'>Compliance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
