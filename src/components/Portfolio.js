import React from 'react';
import Projects from './Projects';
import TypeAnimation from 'react-type-animation';

const ComponentOne = () => {
  return (
    <TypeAnimation
      cursor={true}
      sequence={["Some of my favorite software projects I’ve built.", 12300, '']}
      repeat={Infinity}
      wrapper="p"
    />
  );
};

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title  relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            My projects
          </h2>
          <p className='subtitle'>
           <ComponentOne/>
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
