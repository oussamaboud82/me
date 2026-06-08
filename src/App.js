import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import MySkills from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import MusicPlayer from './components/MusicPlayer';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <MySkills />
      <Work />
      <Contact />
      <MusicPlayer />
    </div>
  );
};

export default App;
