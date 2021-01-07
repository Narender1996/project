import React from 'react'
import './App.css';

import Slider from './component/slider';
import Navbar from './component/navbar';
import Footer from './component/footer';
import Services from './component/services';
import Contact from './component/contactus';
import About from './component/aboutus'
import Team from './component/team'
function App() {
  return (
     <div className='app'>
     <Navbar />
     <Slider />
     <About/>
     <Services/>
     <Team/>
     <Contact/>
     <Footer/>
     </div>
  );
}

export default App;
