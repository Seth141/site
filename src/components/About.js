import React from 'react';
import Sphere from '../assets/img/fireThree.gif';
import TypeAnimation from 'react-type-animation';

const ComponentOne = () => {
  return (
    <TypeAnimation
      cursor={true}
      sequence={["Software engineer specializing in Deep Learning and web dev.", 12300, '']}
      repeat={Infinity}
      wrapper="p"
    />
  );
};

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Sphere}
            alt='Rotating sphere'
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative before:absolute before:opacity-40 before:-top-[2rem] '>
                About me:
              </h2>
              
              <p className='mb-4 text-accent'>
                <ComponentOne/>
              </p>
              
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              Most of my engineering efforts are focused 
              on machine learning, deep learning and reinforcement 
              learning applications in addition to developing 
              state-of-the-art + intuitive websites.

                <br />
                <br />
                In my free time I enjoy 3D printing, writing
                 AR software, playing a bit of chess, 
                 reading some phenomenal sci-fi and firing 
                 up my open-backs for some synth :)
              </p>
            </div>
             <div>
             
               <button onClick={() => window.location = 'mailto:seth141592@gmail.com'} type="button" className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
                   Shoot me an email 
               </button>
            
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
