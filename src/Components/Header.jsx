import React, { useState, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';

function Header() {

  const { loginWithRedirect } = useAuth0();
  
  const [text, setText] = useState("THIS COULD BE YOU");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((prevText) =>
        prevText === "THIS COULD BE YOU" ? "THIS WILL BE YOU" : "THIS COULD BE YOU"
      );
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleLoginClick = () => {
    loginWithRedirect();
  }


  return (
    
    <div id="main">
    <div className="name"style={{ marginTop: '60px' }}>
      <h1 className="leftside" style={{ marginBottom: "-30px", textAlign: "center", fontWeight: "600" }}>
        <span style={{ color: text === "THIS WILL BE YOU" ? "#50C2FF" : "orange" }}>{text}</span>
      </h1>
      <button onClick={handleLoginClick} className="header-btn" style={{ textDecoration: 'none', marginTop: '60px' }}>
        BECOME SUPER SAIYYAN
      </button>
    </div>
  </div>
);
}

export default Header;
