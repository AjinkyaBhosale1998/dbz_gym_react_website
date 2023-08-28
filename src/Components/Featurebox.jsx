import React from "react";

function Featurebox(props) {
  return (
    <div className="a-box">
      <div class="a-b-img">
        <img src={props.image} alt="" />
      </div>
      <div className="a-b-text">
        <h2>{props.title}</h2>
        <p>Lorem ahds jadssbc kjsdbcj bkdc kbd</p>
      </div>
    </div>
  );
}

export default Featurebox;