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
            props.shift === 1 ? 150 : props.shift === 3 ? -300 : 0
          }px, ${props.shift === 1 ? 20 : props.shift === 2 ? 4 : 0}%)`,
        }}
        src={image}
        alt=""
      />
      <div className={background.gradient}></div>
    </div>
  );
};

export default Background;
