import React from 'react';


const SponsorLogo = ({ name, imageUrl }) => (
  <div className="flex justify-center items-center p-4 bg-slate-700 rounded-lg">
    <img src={imageUrl} alt={`${name} Logo`} className="h-12 w-auto" />
  </div>
);

function Sponsors() {
  return (
    <div id="sponsors" className="bg-slate-800 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">Our Sponsors</h2>
        <p className="text-slate-300 mb-12">
          We are incredibly grateful for the support of our partners who make this event possible.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <SponsorLogo name="Sponsor 1" imageUrl="https://placehold.co/200x100/FFF/000000?text=Sponsor+1" />
          <SponsorLogo name="Sponsor 2" imageUrl="https://placehold.co/200x100/FFF/000000?text=Sponsor+2" />
          <SponsorLogo name="Sponsor 3" imageUrl="https://placehold.co/200x100/FFF/000000?text=Sponsor+3" />
          <SponsorLogo name="Sponsor 4" imageUrl="https://placehold.co/200x100/FFF/000000?text=Sponsor+4" />
          <SponsorLogo name="Sponsor 5" imageUrl="https://placehold.co/200x100/FFF/000000?text=Sponsor+5" />
          <SponsorLogo name="Sponsor 6" imageUrl="https://placehold.co/200x100/FFF/000000?text=Sponsor+6" />
          <SponsorLogo name="Sponsor 7" imageUrl="https://placehold.co/200x100/FFF/000000?text=Sponsor+7" />
          <SponsorLogo name="Sponsor 8" imageUrl="https://placehold.co/200x100/FFF/000000?text=Sponsor+8" />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;