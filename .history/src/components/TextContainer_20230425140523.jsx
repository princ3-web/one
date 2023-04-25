import React from "react";
import slides from "../css/slides.module.css";
import textContent from "./TextContent.jsx";

const TextContainer = (props) => {
  return (
    <>
      {textContent.map((item, index) => (
        <div
          className={[
            slides.container,
            index < props.shift
              ? text.shifted0
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

export default TextContainer;
