//CODE BY RalDSZ
//Copyright :ORBT TECHNOLOGIES all rights reserved
//Last modified : 03/08/22

import React from 'react'
import { BsLinkedin, BsGoogle } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsLinkedin />
        </div>
        <div>
          <a href = "http://localhost:3333/desk">
            <FaFacebook />
          </a>
        </div> 
        <div>
            <BsGoogle />
        </div> 
    </div>

  )
}

export default SocialMedia