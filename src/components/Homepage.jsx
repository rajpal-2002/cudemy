import React from "react";
import Navbar from "./Navbar";
import Sliderapp from './Sliderapp';
import Page2 from './Page2';


function Homepage() {
  return (
    <>
    <div className='homepage'>
      <Navbar></Navbar>
      <Sliderapp></Sliderapp>
      <Page2></Page2>
      
    </div>
    </>
  );
}

export default Homepage;
