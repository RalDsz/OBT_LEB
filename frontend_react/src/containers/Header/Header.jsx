//CODE BY RalDSZ
//Copyright :ORBT TECHNOLOGIES all rights reserved
//Last modified : 03/08/22

import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion' 
import human from '../../assets/human.png'
import circle from '../../assets/circle.svg' 
import img1 from './t1.png' 
import img2 from './t2.png'
import img3 from './t3.png'  
import { AppWrap } from '../../wrapper'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',

    }
  }
}

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-150, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Heyy! i am,</p>
            <h1 className="head-text">Rashmi</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Senior Research Scientist</p>
          <p className="p-text">IIT Bombay India</p>
        </div>
      </div>
    </motion.div>
   <motion.div
      whileInView={{  opacity: [0, 1] }}
      transition={{ duration: 1, delayChildren:0.5}}
      className="app__header-img"
    >
      <img src={human} alt="human" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[img1, img2, img3].map((circle) => (
        <div className="circle-cmp app__flex" key={`circle`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
    

    

   
     

    
 
);

export default AppWrap(Header, 'home');