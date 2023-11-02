import React from "react";
import Featurebox from "./Featurebox";
import fimage1 from "../images/1.svg";
import fimage2 from "../images/2.svg";
import fimage3 from "../images/3.svg";
import fimage4 from "../images/4.svg";

function Feature() {
  return (
    <div id="feature">
      <h1 style={{ color: "orange", textAlign: "center", padding: "100px" }}>
        THE FEATURES
      </h1>
      <div className="a-container">
        <Featurebox image={fimage1} title1="Weight Lifting" title2="Strength Training" />
        <Featurebox image={fimage2} title1="Specific Muscle" title2="Targeted Workouts" />
        <Featurebox image={fimage3} title1="Flex Your Muscle" title2="Flexibility Training" />
        <Featurebox image={fimage4} title1="Cardio Exercise" title2="Aerobic Workouts" />
      </div>
    </div>
  );
}

export default Feature;
