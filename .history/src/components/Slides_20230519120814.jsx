import React from "react";
import slides from "../css/slides.module.css";
import SlidesContent from "./SlidesContent.jsx";
import arrowDown

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
      <img className={slides.arrowUp} />
      <img className={slides.arrowDown} />
    </>
  );
};

export default Slides;
