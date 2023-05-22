import React from "react";
import slides from "../css/slides.module.css";
import SlidesContent from "./SlidesContent.jsx";
import arrowDown from "../assets/icons/arrowDown.png";
import arrowUp from "../assets/icons/arrowUp.png";

const Slides = (props) => {
  return (
    <>
      {SlidesContent.map((item, index) => (
        <div
          className={[
            slides.container,
            index < props.shift
              ? slides.shifted0
              : index === props.shift
              ? slides.shifted1
              : index > props.shift
              ? slides.shifted2
              : "",
          ].join(" ")}
        >
          {item}
        </div>
      ))}
      <div className={slides.arrowContainer}>
        <img src={arrowUp} className={slides.arrowUp} alt="" onClick={}/>
        <img src={arrowDown} className={slides.arrowDown} alt="" />
      </div>
    </>
  );
};

export default Slides;
