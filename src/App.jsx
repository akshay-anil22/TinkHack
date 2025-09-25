import React from 'react';
import LandingSection from './components/LandingSection';
import Overview from './components/Overview';
import Timeline from './components/Timeline';
import Sponsors from './components/Sponsers';
import Contact  from './components/Contact';

function App() {
  return (
    <div>
      <LandingSection />
      <Overview />
      {/* <Timeline />
      <Sponsors />
      <Contact /> */}
    </div>
  );
}

export default App;