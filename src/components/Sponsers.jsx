import React from 'react';


import sbiLogo from '../assets/logos/GKV1_State Bank of India (SBI)-logobase.net.png';
import southIndianBankLogo from '../assets/logos/GKV23_South Indian Bank-logobase.net.png';
import beiLogo from '../assets/logos/GKV124_Bursa Efek Indonesia (BEI)-logobase.net.png';
import kseiLogo from '../assets/logos/GKV125_KSEI (Kustodian Sentral Efek Indonesia)-logobase.net.png';
import womFinanceLogo from '../assets/logos/GKV127_WOM Finance-logobase.net.png';
import otoGroupLogo from '../assets/logos/GKV129_OTO Group-logobase.net.png';
import indomobilFinanceLogo from '../assets/logos/GKV130_Indomobil Finance-logobase.net.png';
import payNetLogo from '../assets/logos/GKV185_PayNet (Payments Network Malaysia)-logobase.net.png';


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
          <SponsorLogo name="State Bank of India" imageUrl={sbiLogo} />
          <SponsorLogo name="South Indian Bank" imageUrl={southIndianBankLogo} />
          <SponsorLogo name="Bursa Efek Indonesia" imageUrl={beiLogo} />
          <SponsorLogo name="KSEI" imageUrl={kseiLogo} />
          <SponsorLogo name="WOM Finance" imageUrl={womFinanceLogo} />
          <SponsorLogo name="OTO Group" imageUrl={otoGroupLogo} />
          <SponsorLogo name="Indomobil Finance" imageUrl={indomobilFinanceLogo} />
          <SponsorLogo name="PayNet" imageUrl={payNetLogo} />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;