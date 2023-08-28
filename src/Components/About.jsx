import React from "react";
import aboutimage from "../images/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h1>Learn More About Us </h1>
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
