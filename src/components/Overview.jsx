import React from 'react';

function Overview() {
  return (
    <div id="overview" className="bg-slate-800 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-cyan-400">What is TinkHack?</h2>
        <p className="text-slate-300 mb-12">
          TinkHack is the premier 36-hour hackathon organized by TinkerHub MEC. It's a gathering of passionate students, developers, and designers who are eager to learn, collaborate, and create innovative solutions for real-world challenges.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
    
          <div className="bg-slate-700 p-6 rounded-lg flex-1">
            <h3 className="text-2xl font-bold mb-2">Build Your Skills</h3>
            <p>Tackle challenging problems, learn new technologies, and build a project for your portfolio.</p>
          </div>
         
          <div className="bg-slate-700 p-6 rounded-lg flex-1">
            <h3 className="text-2xl font-bold mb-2">Network with Mentors</h3>
            <p>Get guidance and feedback from experienced professionals and industry experts.</p>
          </div>
      
          <div className="bg-slate-700 p-6 rounded-lg flex-1">
            <h3 className="text-2xl font-bold mb-2">Win Amazing Prizes</h3>
            <p>Compete for a large prize pool, cool swag, and recognition for your hard work.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;