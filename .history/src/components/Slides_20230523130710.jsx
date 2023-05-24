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
        <img src={arrowUp} className={slides.arrow} alt="" onClick={props.arrowUp}/>
        <img src={arrowDown} className={slides.arrow} alt="" onClick={props.arrowDown}/>
      </div>
    </>
  );
};

export default Slides;
