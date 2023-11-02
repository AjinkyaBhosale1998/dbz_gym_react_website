import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './Components/Auth0/Auth0.jsx';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Offer from './Components/Offer';
import About from './Components/About';
import Mygears from './Components/Mygears';
import Contact from './Components/Contact';
import Footer from './Components/Footer/Footer.jsx';


function App() {
  return (
    <div className="App">
      <Auth0ProviderWithHistory>
        <Router>
          <Navbar />
          <div id="header-section">
            <Header />
          </div>
          <div id="feature-section">
            <Feature />
          </div>
          <div id="presentation-section">
            <Offer />
          </div>
          <div id="about-section">
            <About />
          </div>
          <div id="mygears-section">
            <Mygears />
          </div>
          <div id="contact-section">
            <Contact />
          </div>
          <Footer />
        </Router>
      </Auth0ProviderWithHistory>
    </div>
  );
}

export default App;
