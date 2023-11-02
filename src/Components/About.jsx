import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import demo1 from "../images/demo1.mp4";
import demo2 from "../images/demo2.mp4";
import demo3 from "../images/demo3.mp4";

function About() {
  const videoList = [demo1, demo2, demo3];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => prevIndex + 1);
  };

  const playPreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const playNextVideo = () => {
    if (currentVideoIndex < videoList.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  useEffect(() => {
    if (currentVideoIndex >= videoList.length) {
      setCurrentVideoIndex(0);
    }
  }, [currentVideoIndex, videoList]);

  return (
    <div id="about" style={{ display: "flex", alignItems: "center" }}>
      <div className="video-player" style={{ flex: 1.3 }}>
        {videoList.length > 0 && (
          <ReactPlayer
            url={videoList[currentVideoIndex]} controls onEnded={handleVideoEnd} playing width="100%" height="100%"
          />
        )}
        
        <button type="button"style={{ margin: "20px" }} onClick={playPreviousVideo}>Previous</button>
        <button type="button"style={{ margin: "20px" }} onClick={playNextVideo}>Next</button>
      </div>


      <div className="about-text" style={{ flex: 1, padding: "10px", marginLeft:"100px" }}>
        <h1>
          <span style={{ color: "white" }}>Learn More </span>
          <span style={{ color: "orange" }}>About Us </span>
        </h1>
        <p>
          <br />
          If you want to be shredded, healthy than you should do the following :{" "}
          <br />
          <br />
          Eliminate inflammatory foods, challenge your body physically, eat for
          your biology, reduce stagnation with movement, sweat frequently, spend
          some time in nature, get barefoot and regularly let your skin absorb
          sunlight.
          <br />
          <br />
          Your body is the vessel in which you get to experience life. Treat it
          with respect and your life can be significantly enhanced.
        </p>
      </div>

    </div>
  );
}

export default About;
