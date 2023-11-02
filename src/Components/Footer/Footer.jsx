import React, { useState } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import footerlogo from "../../images/footerlogo.png";

function Footer() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true); // Initially, assume email is valid

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateEmail(email)) {
      return;
    }

    setEmail("");
    setIsValidEmail(true);
    window.location.href = "https://www.youtube.com/@Front-End-G";
  }

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-section about">
            <h3>About</h3>
            <p>
              Most people recognize me for calisthenics and bodyweight fitness.
              <br />
              However, I also run multiple businesses including my online
              training app that works with other athletes, one e-commerce brand.
            </p>
          </div>
        </div>

        <div className="footer-column">
          <div className="footer-section help">
            <h3>Help</h3>
            <p>
              {" "}
              Learn how to make the most of our app with our handy user manual.
              <br />
              Reach out to our friendly support team for personalized assistance.
            </p>
          </div>
        </div>

        <div className="footer-column">
          <div className="contact-info">
            <h3>Call Us :</h3>
            <p> (+91) 88560 - 49947</p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className={`search-bar ${!isValidEmail ? "invalid" : ""}`}
                placeholder="Sign up for newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="sign-up-button">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-section follow">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>

        <div className="playstore">
          <img src={footerlogo} alt="Footer Logo" style={{ width: "40%" }} />
        </div>

        <div className="copyright">
          <p> Copyright &copy; 2023 DBZ GYM | All rights reserved.</p>
          <p>Terms & Conditons Apply.</p>
          <button
            type="button"
            class="btn btn-outline-info"
            onClick={scrollToTop}
            style={{
              backgroundColor: "orange",
              borderColor: "orange",
              scrollBehavior: "smooth",
            }}
          >
            🚀
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
