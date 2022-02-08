import React from 'react';
import Layout from '../components/Layout';
import Lottie from "lottie-react";
import designerAnimation from '../lottie/designer.json';
import projectsData from '../resources/projects';

function Projects() {
  return (
      <Layout>
        <div className='mt-20'>
          <div className='h-screen'>
            <div className='h-3/4'>
            <Lottie className='h-full' animationData={designerAnimation} loop='true' />
            </div>
            <div className='font-semibold font-robo text-center bg-red-500 mx-20 p-10 text-white rounded-tl-full rounded-br-full'>
            <h1 className='text-6xl'>Many projects</h1>
            </div>
          </div>
        </div>

        <div className='grid mt-20 md:grid-cols-1 lg:grid-cols-2 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5 text-robo'>
          {projectsData.map((project=> {
            return (
            <div key={project.id} className='group relative'>
              <div className='relative p-10 border-2 text-center rounded-3xl h-80 w-full aspect-w-2 group-hover:opacity-75'>
                <img src={project.image} alt={project.imageAlt} className='w-full h-full rounded-xl object-center object-cover' />
                </div>
                
                  <h1 className='text-3xl font-semibold mt-2'>{project.title}</h1>
                  <button className='border-2 rounded-2xl mt-2 border-white p-2 hover:bg-green-500'>Demo</button>
                
              </div>
          )}))}
        </div>
      </Layout>
  );
}

export default Projects;
