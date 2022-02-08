import React from 'react';
import { FaFacebook, FaImdb, FaLinkedin, FaMailBulk, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <>
    <div className='h-82 -mt-40'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2a2a2a" fill-opacity="1" d="M0,128L18.5,138.7C36.9,149,74,171,111,160C147.7,149,185,107,222,112C258.5,117,295,171,332,192C369.2,213,406,203,443,218.7C480,235,517,277,554,266.7C590.8,256,628,192,665,160C701.5,128,738,128,775,144C812.3,160,849,192,886,218.7C923.1,245,960,267,997,256C1033.8,245,1071,203,1108,186.7C1144.6,171,1182,181,1218,202.7C1255.4,224,1292,256,1329,266.7C1366.2,277,1403,267,1422,261.3L1440,256L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
    </div>
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
    </>
  );
}

export default Footer;
