import React from "react";

function Header() {
  return (
    <div id="main">
      <div className="name">
        <h1 className= "leftside" style={{ float: 'left',marginLeft: '0px', marginBottom: '50px' }}><span style={{ color: 'orange' }}>This Could Be </span>YOU </h1>
        
        <h1 className= "rightside" style={{ float: 'right', marginRight: '0px', marginTop: '50px'  }}> 
            <span style={{ color: '#4BA0EA' }}>This Will Be </span>
            <span style={{ color: 'white' }}>YOU</span>
        </h1>
        <div style={{ clear: 'both' }}></div>
        <p className="details">
          Build Your Body And Fitness With Professioanl Touch{" "}
        </p>
        <div className="header-btns">
          <a href="#" className="header-btn" style={{ textDecoration: 'none' }} >
            BECOME SUPER SAIYYAN
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
