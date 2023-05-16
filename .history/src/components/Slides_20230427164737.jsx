import React from "react";
import slides from "../css/slides.module.css";
import SlidesContent from "./SlidesContent.jsx";
import arrow from "../assets/icons/arrow.png";
import mouseUp from "../assets/icons/mouseUp.png";
import mouseDown from "../assets/icons/mouseDown.png";

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
        <img src={slides.arrowUp} src={arrowUp} alt="" />
        <img src={slides.arrowDown} src={arrowUp} alt="" />
      </div>
    </>
  );
};

export default Slides;
