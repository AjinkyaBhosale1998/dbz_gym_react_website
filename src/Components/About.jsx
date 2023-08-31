import React from "react";
import aboutimage from "../images/about.png";

function About() {

  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h1>
        <span style={{ color: 'white' }}>Learn More</span> 
        <span style={{ color: 'orange' }}>About Us </span> 
        </h1>
        <p><br/>
        If you want to be shredded, healthy than you should do the following : <br/><br/>Eliminate inflammatory foods, challenge your body physically, eat for your biology, reduce stagnation with movement, sweat frequently, spend some time in nature, get barefoot and regularly let your skin absorb sunlight.

        <br/><br/>Your body is the vessel in which you get to experience life. Treat it with respect and your life can be significantly enhanced.
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
}

export default About;
