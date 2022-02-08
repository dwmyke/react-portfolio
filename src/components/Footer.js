import React from 'react';
import { FaFacebook, FaImdb, FaLinkedin, FaMailBulk, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div className='bg-theme w-screen flex justify-center'>
      <div className='md:w-full w-1/2'>
      <div className='p-8 font-pop text-center'>
        <p className='text-gray-50'>This gon be my footer up your booter</p>
        <div className='h-1 border-2 border-gray-300 my-2'></div>
        <div className='flex text-white w-full justify-between py-2'>
          <FaFacebook /> <FaLinkedin /> <FaYoutube /> <FaImdb /> <FaMailBulk />
        </div>
        <div className='h-1 border-2 border-gray-300 my-2'></div>
        <p className='text-gray-50'>Copiedrights</p>
      </div>
      </div>
    </div>
  );
}

export default Footer;
