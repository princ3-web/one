import React from "react";
import image from "../assets/images/background1.webp";
import background from "../css/background.module.css";

const Background = (props) => {
  return (
    <div>
      <img
        className={background.background}
        style={{ transform: `translate(${props.shift === 1 ? 300 : props.shift === 1 ? 300}px, ${-20 * props.shift}%)` }}
        src={image}
        alt=""
      />
      <div className={background.gradient}></div>
    </div>
  );
};

export default Background;
