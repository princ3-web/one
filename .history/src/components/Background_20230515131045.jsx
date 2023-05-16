import React from "react";
import image from "../assets/images/background0.jpg";
import background from "../css/background.module.css";

const Background = (props) => {
  return (
    <div>
      <img
        className={background.background}
        style={{ transform: `translate(0px, ${-20 * props.shift}%)` }}
        src={image}
        alt=""
      />
      <div className={background.background}></div>
    </div>
  );
};

export default Background;
