import React from 'react';


const TimelineItem = ({ time, title, description }) => (
  <div className="relative pl-8 sm:pl-32 py-6 group">

    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-700 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-cyan-500 after:border-4 after:box-content after:border-slate-800 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-cyan-400 bg-slate-800 rounded-full">{time}</time>
      <div className="text-xl font-bold text-white">{title}</div>
    </div>
 
    <div className="text-slate-400 ml-4 sm:ml-0">{description}</div>
  </div>
);

function Timeline() {
  return (
    <div className="bg-slate-900 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-cyan-400">Event Timeline</h2>
        <p className="text-slate-300 mt-2">Follow our schedule from registration to the final announcement.</p>
      </div>
      <div className="max-w-3xl mx-auto">
        <TimelineItem
          time="Oct 1"
          title="Registration Opens"
          description="Form your teams and sign up to secure your spot in Kerala's most exciting hackathon."
        />
        <TimelineItem
          time="Oct 20"
          title="Registration Closes"
          description="Final call for all teams. Make sure your application is submitted before the deadline."
        />
        <TimelineItem
          time="Oct 25"
          title="Hackathon Begins"
          description="Check-in, grab your swag, and get ready for 36 hours of intense coding and innovation."
        />
        <TimelineItem
          time="Oct 27"
          title="Winners Announced"
          description="The moment of truth! Winners are announced and prizes are distributed during the closing ceremony."
        />
      </div>
    </div>
  );
}

export default Timeline;
