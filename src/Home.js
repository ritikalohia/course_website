import React from "react";
import Common from './Common';
import web from "../src/images/6461.jpg";
// import {NavLink} from 'react-router-dom';

const Home = () => {
    return (
      <>
        <Common name="Learn and
        Grow with us
        " 
        imgsrc={web} 
        visit="/service" 
        btname="Get started"
        content="We are the team of talented developer making websites" />
      </>
    );
  };
  
  export default Home;