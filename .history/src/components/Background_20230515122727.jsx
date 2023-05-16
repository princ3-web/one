import React from 'react';
import image from "../assets/images/background0.jpg";
import background from "../css/background.module.css";

const Background = () => {
  return (
    <div>
        <img className={background.background} style={{}} src={image} alt="" />
    </div>
  )
}

export default Background;