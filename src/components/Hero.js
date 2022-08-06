import React from 'react';
import FireGif from '../assets/img/fireTwo.webp';
import TypeAnimation from 'react-type-animation';

const ComponentOne = () => {
  return (
    <TypeAnimation
      cursor={true}
      sequence={["Hello there,", <br></br>, 2000, "I'm Seth.", 8000, '']}
      repeat={Infinity}
      wrapper="h2"
    />
  );
};

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[87vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[28px]'>
              //
            </p>
            <h1 className='text-4xl leading-[38px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.28] font-bold md:tracking-[-1px]'>
            <ComponentOne/>
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-xl text-center lg:text-left'>
              Software engineer, researcher, reader.
            </p>

            <div>
                  <a target="_blank" href="https://www.linkedin.com/in/seth-nuzum-632075127"> <button type="button" className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
                   Connect with me 
               
                   </button>
                  </a>
                 
             </div>
          </div>
          <div className='hidden lg:flex flex-1 justify-end'>
            <img src={FireGif} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
