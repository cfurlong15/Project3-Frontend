import React, { useEffect, useRef } from "react";
import "./Background.css";
import Vimeo from "@vimeo/player";

function Background() {
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      id: 896971507,
      autoplay: true,
      loop: true,
      muted: true,
      background: true,
      width: 1920,
      height: 1080,
    };

    if (videoRef.current) {
      const player = new Vimeo(videoRef.current, options);
      player.setPlaybackRate(0.65);
    }
  }, []);

  return (
    <div className="video-background-container">
      <div ref={videoRef} className="video-container"></div>
    </div>
  );
}

export default Background;
