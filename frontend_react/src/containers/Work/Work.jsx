import React from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import abt from './tesimg.jpg'
import './Work.scss';

const abouts = [
    { title: 'Researcher ', description: 'I have researched in  the area of wireless and optical communication systems', imgUrl: abt },
    { title: 'Faculty', description: 'Experience of 12 years teaching undergraduate and postgraduate courses', imgUrl: abt },
    { title: 'Hands-on experience', description: ' 5+ years working with high-speed instruments and components for demonstrating optical coherent links, and testing analog chips integrated with respective systems', imgUrl: abt },
    { title:'Current', description: 'Currently a working group member for an ongoing work for an IEEE Standard related to rural area network', imgUrl: abt },
  ];

const Work = () => {
  return (  
    <>
        <h2 className="head-text"> My Creative <span> Portfolio </span> </h2>

    </>
  )
}

export default Work