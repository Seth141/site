import React from 'react';
import TestiSlider from './TestiSlider';
import TypeAnimation from 'react-type-animation';

const ComponentOne = () => {
  return (
    <TypeAnimation
      cursor={true}
      sequence={["Books I'm currently reading and others that I've enjoyed in the past. ", <br></br>, 8000, '']}
      repeat={Infinity}
      wrapper="h2"
    />
  );
  };

const Books = () => {
  return (
    <section id='testimonials' className='section bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title  relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>
            The Bookshelf
          </h2>
          <p className='subtitle'>
            <ComponentOne/>
          </p>
        </div>
        <TestiSlider />
      </div>
    </section>
    
  );
};

export default Books;
