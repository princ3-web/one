import React from "react";
import slides from "../css/slides.module.css";
import SlidesContent from "./SlidesContent.jsx";
import arrow from "../assets/icons/arrow.png";
import mouseUp from "../assets/icons/mouseUp.png";
import mouseDown from "../assets/icons/mouseDown.png";
import arrowUp from "../assets/icons/arrowUp.png";
import arrowDown from "../assets/icons/arrowDown.png";

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
      <img
        className={slides.iconArrow}
        src={props.rotate ? mouseDown : mouseUp}
        alt=""
      />

      <div className={slides.arrowContainer}>
        <img className={slides.arrowUp} src={arrowUp} alt="" />
        <img className={slides.arrowDown} src={arrowDown} alt="" />
      </div>
    </>
  );
};

export default Slides;
