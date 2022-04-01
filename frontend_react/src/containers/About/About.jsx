//CODE BY RalDSZ
//Copyright :ORBT TECHNOLOGIES all rights reserved
//Last modified : 08/03/2022
import React,{useState, useEffect} from 'react'
import { motion } from "framer-motion"
import abt from './tesimg.jpg'

import './About.scss'

const abouts = [
  { title: 'Researcher ', description: 'I have researched in  the area of wireless and optical communication systems', imgUrl: abt },
  { title: 'Faculty', description: 'Experience of 12 years teaching undergraduate and postgraduate courses', imgUrl: abt },
  { title: 'Hands-on experience', description: ' 5+ years working with high-speed instruments and components for demonstrating optical coherent links, and testing analog chips integrated with respective systems', imgUrl: abt },
  { title:'Current', description: 'Currently a working group member for an ongoing work for an IEEE Standard related to rural area network', imgUrl: abt },
];

const About = () => {
  return (
    <>
    <h2 className="head-text"> I am <span>Nothing</span><br/>Without<span> Hardwork</span></h2>
   

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About