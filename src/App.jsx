import React from 'react';
import LandingSection from './components/LandingSection';
import Overview from './components/Overview';
import Timeline from './components/Timeline';
import Sponsors from './components/Sponsers';
import Contact  from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <LandingSection />
      <Overview />
      <Timeline />
      <Sponsors />
      <Contact /> 
    </div>
  );
}

export default App;