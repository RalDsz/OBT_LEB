/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
//CODE BY RalDSZ
//Copyright :ORBT TECHNOLOGIES all rights reserved
//Last modified : 24/06/22
import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#313BAC' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;