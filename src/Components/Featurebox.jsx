import React from "react";

function Featurebox(props) {
  return (
    <div className="a-box" onClick={props.onClick}>
      <div className="a-b-img">
        <img src={props.image} alt="" />
      </div>
      <div className="a-b-text">
        <h2>{props.title1}</h2>
        <p>{props.title2}</p>
      </div>
    </div>
  );
}

export default Featurebox;