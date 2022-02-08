import React from 'react';
import Layout from '../components/Layout';
import Lottie from "lottie-react";
import designerAnimation from '../lottie/designer.json'
import videoProductionAnimation from '../lottie/video-production.json'
import editorAnimation from '../lottie/editor.json'
import graphicAnimation from '../lottie/graphic.json'
import techAnimation from '../lottie/technical.json'
import blobAnimation from '../lottie/blob.json'
import {
  MdVideoSettings,
  MdVideoCameraBack,
  MdPhotoSizeSelectLarge
} from 'react-icons/md'
import {GrCloudComputer} from 'react-icons/gr'
import AOS from 'aos';

AOS.init({
  duration:1000
});

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

                    <h1 className='text-6xl md:text-4xl' data-aos='slide-right'>Mikel-Jon <b className='text-yellow-500'>(Mike)</b> West</h1>
                    <h1 className='text-3xl md:text-xl' data-aos='slide-left'>Content Creator <b className='text-red-500'>Video Editor</b> <b className='text-blue-500'>Graphic Designer</b> Technician</h1>

                  </div>

                </div>
            </div>

            {/* Skills */}

              <div className='mt-20' aos-data='zoom-in'>
                  <h1 className='text-4xl text-blue-400 font-bold text-center mt-10 mb-5'>Mad Skills</h1>
                  <h2 className='text-2xl text-blue-600 font-semibold text-center'>What I can do for you</h2>
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
                  <h1 className='text-white font-bold text-4xl py-10' aos-data='zoom-in'>Content Creator</h1>
                </div>

                <div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-xl hover:bg-blue-500 hover:text-white'>
                <div className='h-96'>
                <Lottie className="h-full" animationData={videoProductionAnimation} loop='true'/>
                </div>

                <p className='text-xl my-5 md:px-5 px-14 py-10'>
                  I create short and feature length films, music videos, and promotional packages for performing artists and small business from pre-production screenwriting and previsualization, to all aspects of production, to post-production distributions.
                </p>
              </div>

              </div>

              {/* Video Editor */}

              <div className='my-20'>

                <div className='text-center h-52 bg-red-400'>
                  <h1 className='text-white font-bold text-4xl py-10'>Video Editor</h1>
                </div>

                <div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-xl hover:bg-yellow-400'>
                <div className='h-96'>
                <Lottie className="h-full" animationData={editorAnimation} loop='true'/>
                </div>

               <div className='grid md:grid-cols-1 grid-cols-3 p-12 mx-5'>

                 <div className='text-left'>
                 <h1 className='text-xl font-bold my-2'>Software Used</h1>
                 <hr />
                 <p className='font-semibod my-1'>DaVinci Resolve</p>
                 <p className='font-semibod my-1'>Adobe Premiere Pro</p>
                 <p className='font-semibod my-1'>Adobe After Effects</p>
                 <p className='font-semibod my-1'>Adobe Audition</p>
                 <p className='font-semibod my-1'>Final Cut</p>
                 </div>

                 <div className='text-center'>
                 <h1 className='text-xl font-bold my-2'>Techniques</h1>
                 <hr />
                 <p className='font-semibod my-1'>Multicamera</p>
                 <p className='font-semibod my-1'>Motion Graphics & Titles</p>
                 <p className='font-semibod my-1'>Color Correction</p>
                 <p className='font-semibod my-1'>Sound Mixing</p>
                 <p className='font-semibod my-1'>Special Effects</p>
                 </div>

                 <div className='text-right'>
                 <h1 className='text-xl font-bold my-2'>Formats</h1>
                 <hr />
                 <p className='font-semibod my-1'>Theatrical</p>
                 <p className='font-semibod my-1'>DVD & Blu-Ray</p>
                 <p className='font-semibod my-1'>Social Media</p>
                 <p className='font-semibod my-1'>Broadcast Television</p>
                 </div>

               </div>
              </div>

              </div>

               {/* Graphic Designer */}

               <div className='my-20'>

<div className='text-center h-52 bg-blue-500'>
  <h1 className='text-white font-bold text-4xl py-10'>Graphic Designer</h1>
</div>

<div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-xl hover:bg-green-600 hover:text-white'>
<div className='h-96'>
<Lottie className="h-full" animationData={graphicAnimation} loop='true'/>
</div>

<div className='grid md:grid-cols-1 grid-cols-3 p-12 mx-5'>

 <div className='text-left'>
 <h1 className='text-xl font-bold my-2'>Software Used</h1>
 <hr />
 <p className='font-semibod my-1'>Adobe Photoshop</p>
 <p className='font-semibod my-1'>Adobe After Effects</p>
 <p className='font-semibod my-1'>Adobe Illustrator</p>
 <p className='font-semibod my-1'>Autodesk Maya</p>
 </div>

 <div className='text-center'>
 <h1 className='text-xl font-bold my-2'>Techniques</h1>
 <hr />
 <p className='font-semibod my-1'>Sketching & Painting</p>
 <p className='font-semibod my-1'>Photo Editing</p>
 <p className='font-semibod my-1'>Motion Graphics & Typography</p>
 <p className='font-semibod my-1'>Animation</p>
 </div>

 <div className='text-right'>
 <h1 className='text-xl font-bold my-2'>Formats</h1>
 <hr />
 <p className='font-semibod my-1'>Posters, Flyers, and Media Inserts</p>
 <p className='font-semibod my-1'>Logos, Titles, and Credits</p>
 <p className='font-semibod my-1'>Social Media Banners</p>
 <p className='font-semibod my-1'>Website Assets</p>
 </div>

</div>
</div>

</div>

{/* Technician */}

<div className='my-20'>

<div className='text-center h-52 bg-yellow-500'>
  <h1 className='text-white font-bold text-4xl py-10'>Technical Experience</h1>
</div>

<div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-xl hover:bg-red-700 hover:text-gray-300'>
<div className='h-96'>
<Lottie className="h-full" animationData={techAnimation} loop='true'/>
</div>

<div className='grid md:grid-cols-1 grid-cols-3 p-12 mx-5'>

 <div className='text-left'>
 <h1 className='text-xl font-bold my-2'>Master Control Operator</h1>
 <hr />
 <p className='font-semibod my-1'>KOB-TV</p>
 <p className='font-semibod my-1'>REELZ Channel</p>
 <p className='font-semibod my-1'>ThisTV</p>
 <p className='font-semibod my-1'>KRQE - Acme Television</p>
 </div>

 <div className='text-center'>
 <h1 className='text-xl font-bold my-2'>IT & Helpdesk</h1>
 <hr />
 <p className='font-semibod my-1'>Nike World Headquarters</p>
 <p className='font-semibod my-1'>Gateway, Inc.</p>
 <p className='font-semibod my-1'>The University of New Mexico</p>
 </div>

 <div className='text-right'>
 <h1 className='text-xl font-bold my-2'>Film & Television</h1>
 <hr />
 <p className='font-semibod my-1'>Swicthboard Operator</p>
 <p className='font-semibod my-1'>Camera Operator</p>
 <p className='font-semibod my-1'>Sound Operator</p>
 <p className='font-semibod my-1'>Set Decoration & Lighting</p>
 </div>

</div>
</div>

</div>

{/* About */}
<div>
  <h1 className='text-4xl text-gray-500 text-center'>About Mikel-Jon (Mike) West</h1>
  <div className='h-screen relative'>
    <div className='h-full'>
      <Lottie className='h-full' animationData={blobAnimation} loop='true' />
    </div>
    <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
      <p className='text-xl md:text-sm my-5 font-robo max-w-lg'>Mike West grew up in Albuquerque, New Mexico where he received his Bachelor of Fine Arts degree from the University of New Mexico and Film Crew Technician training. Mike worked as crew for major motion picture studios, independent filmmakers, and live broadcast television. He was a Promotions Video Editor, Master Control Operator, and hired background talent for network television and motion picture studios before starting his own production company, "Mega Ultra Studios" in 2012.</p>
      <p className='text-xl md:text-sm my-5 font-robo max-w-lg'>Mike West moved to Portland, Oregon and worked for several years in IT support for Nike World Headquarters. He now lives in the Seattle, Washington area and is looking to put his skills and experience to work for you on your next project. </p>
    </div>
  </div>
</div>


          </div>
      </Layout>
  );
}

export default Home;
