import React from "react";
import web from "../src/images/2672335.jpg";
//import {NavLink} from 'react-router-dom';
import Common from './Common';

const About = () => {
    return (
      <>
        <Common name="Welcome to About Page" 
        imgsrc={web} 
        visit="/contact"
        btname="Contact Now"
        content="We are a team of teachers, developers and
        students. Who are determined to provide you the content of 
        knowledge in best and easy way. our team is consistently 
        working in the way to get you qualified and enhanced your skills." />
      </>
    );
  };
  
  export default About;