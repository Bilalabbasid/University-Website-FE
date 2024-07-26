import React, { useState } from 'react';
import Navbar from './assets/Components/Navbar';
import Hero from './assets/Components/Hero';
import Program from './assets/Components/Program';
import Title from './assets/Components/Title/Title';
import About from './assets/Components/About/About';
import Campus from './assets/Components/Campus/Campus';
import Testimonials from './assets/Components/Testimonials/Testimonials';
import Contact from './assets/Components/Contact/Contact';
import Footer from './assets/Components/Footer/Footer';
import Videoplayer from './assets/Components/Videoplayer/Videoplayer'; // Import Videoplayer

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our Programs' title='What We Offer' />
        <Program />
        <About setPlayState={setPlayState} />
        <Title subtitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subtitle='Testimonials' title='What Students Say' />
        <Testimonials />
        <Title subtitle='Contact Us' title='Get In Touch' />
        <Contact />
        <Footer />
        <Videoplayer playState={playState} setPlayState={setPlayState} />
      </div>
    </>
  );
}

export default App;
