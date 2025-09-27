import React from 'react';
import { motion } from 'framer-motion'; // 1. Import motion

// Import your logo files
import sbiLogo from '../assets/logos/GKV1_State Bank of India (SBI)-logobase.net.png';
import southIndianBankLogo from '../assets/logos/GKV23_South Indian Bank-logobase.net.png';
import beiLogo from '../assets/logos/GKV124_Bursa Efek Indonesia (BEI)-logobase.net.png';
import kseiLogo from '../assets/logos/GKV125_KSEI (Kustodian Sentral Efek Indonesia)-logobase.net.png';
import womFinanceLogo from '../assets/logos/GKV127_WOM Finance-logobase.net.png';
import otoGroupLogo from '../assets/logos/GKV129_OTO Group-logobase.net.png';
import indomobilFinanceLogo from '../assets/logos/GKV130_Indomobil Finance-logobase.net.png';
import payNetLogo from '../assets/logos/GKV185_PayNet (Payments Network Malaysia)-logobase.net.png';

// 2. Organize logos into an array for easier mapping
const sponsorsList = [
  { name: "State Bank of India", imageUrl: sbiLogo },
  { name: "South Indian Bank", imageUrl: southIndianBankLogo },
  { name: "Bursa Efek Indonesia", imageUrl: beiLogo },
  { name: "KSEI", imageUrl: kseiLogo },
  { name: "WOM Finance", imageUrl: womFinanceLogo },
  { name: "OTO Group", imageUrl: otoGroupLogo },
  { name: "Indomobil Finance", imageUrl: indomobilFinanceLogo },
  { name: "PayNet", imageUrl: payNetLogo },
];

const SponsorLogo = ({ name, imageUrl }) => (
  <div className="flex justify-center items-center p-4 bg-slate-700 rounded-lg transition duration-300 hover:bg-slate-600">
    <img src={imageUrl} alt={`${name} Logo`} className="h-12 w-auto" />
  </div>
);

function Sponsors() {
  return (
    <div id="sponsors" className="bg-slate-800 py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold text-cyan-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Sponsors
        </motion.h2>
        <motion.p 
          className="text-slate-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We are incredibly grateful for the support of our partners who make this event possible.
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* 3. Map over the list to create animated logos */}
          {sponsorsList.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }} // Dynamic delay for stagger
              viewport={{ once: true }}
            >
              <SponsorLogo name={sponsor.name} imageUrl={sponsor.imageUrl} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;