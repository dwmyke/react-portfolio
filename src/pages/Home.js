import React from 'react';
import Layout from '../components/Layout';
import Lottie from "lottie-react";
import designerAnimation from '../lottie/designer.json'
import videoProductionAnimation from '../lottie/video-production.json'
import {
  MdVideoSettings,
  MdVideoCameraBack,
  MdPhotoSizeSelectLarge
} from 'react-icons/md'
import {GrCloudComputer} from 'react-icons/gr'

function Home() {
  return (
      <Layout>
          <div>
              {/* Intro Section */}
              <div className='h-screen bg-theme'>

              <div
            className="grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0
            mx-10 z-10 bg-theme
          border-white transform rotate-6 md:rotate-0"
          >
                      <div className='h-3/4'>
                      <Lottie className="h-full" animationData={designerAnimation} loop='true'/>
                      </div>

                <div className='font-bold text-white md:px-6'>

                    <h1 className='text-6xl md:text-4xl'>Mikel-Jon <b className='text-yellow-500'>(Mike)</b> West</h1>
                    <h1 className='text-3xl md:text-xl'>Content Creator <b className='text-red-500'>Video Editor</b> <b className='text-blue-500'>Graphic Designer</b> Technician</h1>

                  </div>

                </div>
            </div>

            {/* Skills */}

              <div className='mt-20'>
                  <h1 className='text-4xl text-blue-400 font-bold text-center my-10'>Mad Skills</h1>
                <div className='grid md:grid-cols-1 grid-cols-4'>
                  <MdVideoCameraBack size={82} color='blue' className='w-full text-center mt-16'/>
                  <MdVideoSettings size={82} color='red' className='w-full text-center mt-16 animate-bounce'/>
                  <MdPhotoSizeSelectLarge size={82} color='orange' className='w-full text-center mt-16'/>
                  <GrCloudComputer size={82} color='green' className='w-full text-center mt-16 animate-pulse'/>
                </div>

              </div>

              {/* Content Creator */}

              <div className='my-20'>

                <div className='text-center h-52 bg-primary'>
                  <h1 className='text-white font-bold text-4xl py-10'>Content Creator</h1>
                </div>

                <div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-xl hover:bg-blue-500 hover:text-white'>
                <div className='h-96'>
                <Lottie className="h-full" animationData={videoProductionAnimation} loop='true'/>
                </div>

                <p className='text-xl my-5 font-semibold md:px-5 px-14 py-10'>
                  I create short and feature length films, music videos, and promotional packages for performing artists and small business
                </p>
              </div>

              </div>


          </div>
      </Layout>
  );
}

export default Home;
