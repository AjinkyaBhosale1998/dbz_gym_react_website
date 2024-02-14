import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import demo1 from "../images/demo1.mp4";
import demo2 from "../images/demo2.mp4";
import demo3 from "../images/demo3.mp4";

function About() {
  const videoList = [demo1, demo2, demo3];
  const totalPages = videoList.length;

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => {
      if (prevIndex < totalPages - 1) {
        return prevIndex + 1;
      } else {
        return 0;
      }
    });
  };

  const playPreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const playNextVideo = () => {
    if (currentVideoIndex < totalPages - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  useEffect(() => {
    if (currentVideoIndex >= totalPages) {
      setCurrentVideoIndex(0);
    }
  }, [currentVideoIndex, totalPages]);

  return (
    <div id="about" style={{ display: "flex", alignItems: "center" }}>
      <div className="video-player" style={{ flex: 1, alignSelf: "center" }}>
        {videoList.length > 0 && (
          <ReactPlayer
            url={videoList[currentVideoIndex]}
            controls={true}
            onEnded={handleVideoEnd}
            playing
            width="100%"
            height="100%"
          />
        )}

        <div style={{ display: "flex", justifyContent: "space-between", margin: "20px" }}>
          <button type="button" className="btn btn-secondary" onClick={playPreviousVideo}>
            Previous
          </button>
          <button type="button" className="btn btn-secondary" onClick={playNextVideo}>
            Next
          </button>
        </div>
      </div>

      <div className="about-text" style={{ flex: 1, padding: "10px", marginLeft: "100px", alignSelf: "center" }}>
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
        <h5>Push through the pain, giving up hurts more. – <br/>
        <span style={{ color: "orange" }}>Prince Vegeta</span></h5>
      </div>
    </div>
  );
}

export default About;
