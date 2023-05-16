import React from "react";
import background from "../css/background.module.css";

const Video = () => {
  return (
    <video
      loop
      autoPlay
      muted
      className={background.video}
      src={require("../assets/images/video.webm")}
      src={require("../assets/images/video.mp4")}
    />
  );
};

export default Video;
