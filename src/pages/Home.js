import React from 'react';
import Layout from '../components/Layout';
import Lottie from "lottie-react";
import designerAnimation from '../lottie/designer.json'

function Home() {
  return <div>
      <Layout>
          <div>
              <div className='h-screen bg-theme'>

                <div className='grid md:grid-cols-1 grid-cols-2'>
                    <Lottie animationData={designerAnimation} loop='true'/>
                </div>

              </div>
          </div>
      </Layout>
  </div>;
}

export default Home;
