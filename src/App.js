import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import Offer from "./Components/Offer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
