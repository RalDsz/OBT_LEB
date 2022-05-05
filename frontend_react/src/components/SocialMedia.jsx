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
            <FaFacebook />
        </div> 
        <div>
            <BsGoogle />
        </div> 
    </div>

  )
}

export default SocialMedia