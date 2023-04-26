import React from "react";
import slides from "../css/slides.module.css";
import SlidesContent from "./SlidesContent.jsx";
import arrow from "../assets/icons/arrow.png";

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
      <img className={slides.iconArrow} src={arrow} style={{rotate: props.rotate ? "0deg" : "180deg", top: props.rotate ? "0px" : "50"}} alt="" />
    </>
  );
};

export default Slides;
