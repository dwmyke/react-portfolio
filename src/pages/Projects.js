import React from 'react';
import Layout from '../components/Layout';
import Lottie from "lottie-react";
import designerAnimation from '../lottie/designer.json';
import projectsData from '../resources/projects';
import AOS from 'aos';
AOS.init({
  duration:1000
});

function Projects() {
  return (
    <Layout>
      <div>
        <div>
          <div className="h-screen relative">
            <div className="h-3/4 pt-20 bg-theme">
            <Lottie className='h-full' animationData={designerAnimation} loop='true' />
            </div>
            <div className="absolute left-0 right-0 -bottom-34">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#2a2a2a" fill-opacity="1" d="M0,256L18.5,240C36.9,224,74,192,111,154.7C147.7,117,185,75,222,80C258.5,85,295,139,332,133.3C369.2,128,406,64,443,64C480,64,517,128,554,165.3C590.8,203,628,213,665,202.7C701.5,192,738,160,775,133.3C812.3,107,849,85,886,106.7C923.1,128,960,192,997,213.3C1033.8,235,1071,213,1108,186.7C1144.6,160,1182,128,1218,117.3C1255.4,107,1292,117,1329,149.3C1366.2,181,1403,235,1422,261.3L1440,288L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path>
            </svg>
            </div>
          </div>
        </div>
      </div>

{/*       <div className="mt-20 md:mt-5">
        <p className="text-xl font-semibold text-center">
          “I can’t teach people everything they need to know. The best I can do
          is position them where they can find what they need to know when they
          need to know .”
        </p>
        <h1 className="text-4xl text-center font-bold mt-5">Because</h1>
      </div> */}
      <div className="font-bold text-center bg-gray-500 m-20 p-20 text-white rounded-tl-full rounded-br-full md:mx-5">
        <h1 className="text-8xl md:text-3xl" data-aos='slide-right'>Many Projects</h1>
      </div>

      <div className="grid mt-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5">
            {projectsData.map((project=>{
              return <div>
                  <div className='relative border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400' data-aos='slide-left'>
                     <img src={project.image} alt={project.imageAlt} className='w-full h-60 text-center rounded-tr-3xl rounded-bl-3xl object-center object-cover'/>

                     <div className='absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80 rounded-tr-3xl rounded-bl-3xl'>
                        <h1 className='text-4xl font-semibold text-white'>{project.title}</h1>
                        <button className='border-2 rounded border-white py-2 hover:bg-green-500 px-5 mt-5 text-white'>DEMO</button>
                     </div>
                  </div>
              </div>
            }))}
      </div>
      <div className='pb-40'></div>
    </Layout>
  );
}

export default Projects;