//CODE BY RalDSZ
//Copyright :ORBT TECHNOLOGIES all rights reserved
//Last modified : 03/08/22
import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './containers';
import { Navbar } from './components';
import './App.scss';


const App = () => (
  <div className="app"> 
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
