import React from 'react';
import Countdown from 'react-countdown';

const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg w-24 min-w-max">
    <div className="text-4xl sm:text-5xl font-bold text-white tracking-wider">{String(value).padStart(2, '0')}</div>
    <div className="text-xs uppercase text-slate-400 mt-1">{label}</div>
  </div>
);


const CountdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
 
    return <div className="text-2xl font-bold text-green-400">The Hackathon is Live!</div>;
  } else {
   
    return (
      <div className="flex justify-center gap-4 sm:gap-8">
        <TimeUnit value={days} label="Days" />
        <TimeUnit value={hours} label="Hours" />
        <TimeUnit value={minutes} label="Minutes" />
        <TimeUnit value={seconds} label="Seconds" />
      </div>
    );
  }
};


function Hero() {
  return (
    <div  id="home" className="bg-slate-900 text-white min-h-screen flex flex-col justify-center items-center text-center p-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 animated-gradient">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
        Innovate. Collaborate. Build.
      </h1>
      <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
        The flagship 36-hour hackathon by TinkerHub MEC, where Kerala's brightest minds come together to solve real-world problems.
      </p>
      <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
        Register Now
      </button>

         <div className="mt-12">
        <p className="text-slate-300 mb-4">Hackathon starts in:</p>
        <Countdown
          date={new Date('2025-10-25T10:00:00')}
          renderer={CountdownRenderer} 
        />
      </div>

    </div>
  );
}

export default Hero;