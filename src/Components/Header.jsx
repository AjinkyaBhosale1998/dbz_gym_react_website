import React from "react";

function Header() {
  return (
    <div id="main">
      <div className="name">
        <h1 className= "leftside" style={{ float: 'left',marginLeft: '0px', marginBottom: '50px' }}><span style={{ color: 'orange' }}>STEP UP </span>YOUR </h1>
        
        <h1 className= "rightside" style={{ float: 'right', marginRight: '0px', marginTop: '50px'  }}> 
            <span style={{ color: '#4BA0EA' }}>FITNESS </span>
            <span style={{ color: 'white' }}>WITH US</span>
        </h1>
        <div style={{ clear: 'both' }}></div>
        <p className="details">
          Build Your Body And Fitness With Professioanl Touch{" "}
        </p>
        <div className="header-btns">
          <a href="#" className="header-btn">
            BECOME SUPER SAIYYAN
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
