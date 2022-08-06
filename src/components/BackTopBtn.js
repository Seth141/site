import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { ArrowCircleUpIcon } from '@heroicons/react/outline';

const BackToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  {
    return (
      show && (
        <button
          onClick={() => scrollToTop()}
          className='bg-accent hover:bg-accent-hover text-black w-12 h-12 rounded-full fixed right-24 bottom-24 cursor-pointer flex justify-center items-center transition-all'
        >
          <ArrowCircleUpIcon className='w-10 h-10' />
        </button>
      )
    );
  }
};

export default BackToTop;
