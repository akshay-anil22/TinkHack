import React from 'react';

function Hero() {
  return (
    <div className="bg-slate-900 text-white min-h-screen flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
        Innovate. Collaborate. Build.
      </h1>
      <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
        The flagship 36-hour hackathon by TinkerHub MEC, where Kerala's brightest minds come together to solve real-world problems.
      </p>
      <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
        Register Now
      </button>
    </div>
  );
}

export default Hero;