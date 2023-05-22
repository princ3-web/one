import React from "react";
import image from "../assets/images/background1.webp";
import background from "../css/background.module.css";

const Background = (props) => {
  return (
    <div>
      <img
        className={background.background}
        style={{
          transform: `translate(${
            props.shift === 0 ? 0 : props.shift === 1 ? 0 : props.shift === 2 ? 0 : -100
          }px, ${props.shift === 0 ? 0 : props.shift === 1 ? -20 : props.shift === 2 ? -40 : -40}%)`,
        }}
        src={image}
        alt=""
      />
      <div className={background.gradient}></div>
    </div>
  );
};

export default Background;
