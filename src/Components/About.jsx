import React from "react";
import aboutimage from "../images/about.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function About() {
  
  const {text} = useTypewriter ({
    words: ['Devloper', 'Designer', 'Photographer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed:80,
  });

  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h1>
        <span style={{ color: 'white' }}>Learn More{' '}</span> 
        <span style={{ color: 'orange' }}>About Us </span> 
        <span style={{ color: 'orange' }}>{text}</span> {text}
        </h1>
        <p>
          skjada akjfdsa kjbsd kjbdssjdf sjkdf kjsdbcjsmhdb skdjvb jbkv
          skdjvbdsbjkv bvjd bkv mbv mjb
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
}

export default About;
