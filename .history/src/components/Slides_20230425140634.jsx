import React from "react";
import slides from "../css/slides.module.css";
import textContent from "./TextContent.jsx";

const Slides = (props) => {
  return (
    <>
      {textContent.map((item, index) => (
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
    </>
  );
};

export default Slides;
