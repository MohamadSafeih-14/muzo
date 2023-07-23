import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Introduce from './components/Introduce';
import Collections from './components/Collections';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Community from './components/Community';
import Muzo from './components/Muzo';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Introduce />
      <Collections />
      <Roadmap />
      <Team />
      <FAQ />
      <Community />
      <Muzo />
      <Footer />
    </div>
  )
}

export default App
