import React from 'react';
import Layout from '../components/Layout';
import Lottie from "lottie-react";
import contactAnimation from '../lottie/contact.json'

function Contact() {
  return (
  <Layout>
    <div>
      <div className='h-screen'>
      <Lottie className='h-2/3' animationData={contactAnimation} loop='true' />
      </div>

      <div className='w-screen flex justify-center -mt-80 mb-20'>
        <div className='md:w-full w-1/2 p-10 shadow-xl bg-gray-50'>
          <h1>Contact Me</h1>
          <input type="text" placeholder='Name' className='w-full border-2 bordor-gray-500 rounded-md p-2 shadow-lg mt-4' />
          <input type="text" placeholder='Email' className='w-full border-2 bordor-gray-500 rounded-md p-2 shadow-lg mt-4' />
          <textarea type="text" placeholder='Message' className='w-full border-2 bordor-gray-500 rounded-md p-2 shadow-lg mt-4' />

          <button className='bg-red-500 rounded text-white px-5 py-1 mt-5'>Submit</button>
        </div>
      </div>
      
    </div>
  </Layout>
    );
}

export default Contact;
