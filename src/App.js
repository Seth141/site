//
///
////
//////
//Copy-write 2022 Seth Nuzum + Iris. All rights reserved.
//////
////
///
//

import React from 'react';
import {Helmet} from 'react-helmet';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import BackTopBtn from './components/BackTopBtn';

function App() {
  return (
    <div className='App'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Seth Nuzum</title>
                <link rel="canonical" href="http://sethnuzum.com/" />
                <meta name="description" content="Hello there. I am Seth Nuzum: a software engineer focusing on machine learning and web development. Let's connect!" />
      </Helmet>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Testimonials />
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;
