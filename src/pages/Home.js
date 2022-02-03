import React from 'react';
import Layout from '../components/Layout';
import Lottie from "lottie-react";
import designerAnimation from '../lottie/designer.json'

function Home() {
  return (
      <Layout>
          <div>
              <div className='min h-screen bg-theme'>

                  <div className='grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0 mx-8 z-10 border-white transition-transform rotate-3 md:rotate-0'>
                      <div className='h-1/2 '>
                      <Lottie animationData={designerAnimation} loop='true'/>
                      </div>

                <div className='font-bold text-white md:px-6'>

                    <h1 className='text-6xl md:text-4xl'>Mikel-Jon <b className='text-yellow-500'>(Mike)</b> West</h1>
                    <h1 className='text-3xl md:text-xl'>Content Creator <b className='text-red-500'>Video Editor</b> <b className='text-blue-500'>Graphic Designer</b> Technician</h1>

                  </div>

                  </div>

                  

              </div>
          </div>
      </Layout>
  );
}

export default Home;
