import React from 'react';
import { motion } from 'framer-motion'; // 1. Import motion

function Overview() {
  return (
    <div id="overview" className="bg-slate-800 text-white py-20 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
          initial={{ opacity: 0, y: 20 }} // Start invisible and 20px down
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 0.5 }}
          viewport={{ once: true }} // Only animate once
        >
          What is TinkHack?
        </motion.h2>
        <motion.p
          className="text-slate-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          TinkHack is the premier 36-hour hackathon organized by TinkerHub MEC. It's a gathering of passionate students, developers, and designers who are eager to learn, collaborate, and create innovative solutions for real-world challenges.
        </motion.p>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Card 1 */}
          <motion.div
            className="bg-slate-700 p-6 rounded-lg flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }} // Staggered delay
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2">Build Your Skills</h3>
            <p>Tackle challenging problems, learn new technologies, and build a project for your portfolio.</p>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            className="bg-slate-700 p-6 rounded-lg flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }} // Staggered delay
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2">Network with Mentors</h3>
            <p>Get guidance and feedback from experienced professionals and industry experts.</p>
          </motion.div>
          {/* Card 3 */}
          <motion.div
            className="bg-slate-700 p-6 rounded-lg flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }} // Staggered delay
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2">Win Amazing Prizes</h3>
            <p>Compete for a large prize pool, cool swag, and recognition for your hard work.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Overview;