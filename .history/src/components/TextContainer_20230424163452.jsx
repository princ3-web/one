import React from "react";
import text from "../css/text.module.css";
import textContent from "../components/textContent.jsx";

const TextContainer = (props) => {
  return (
    <>
      {textContent.map((item, index) => (
        <div
          className={[
            text.container,
            index < props.shift
              ? text.shifted0
              : index === props.shift
              ? text.shifted1
              : index > props.shift
              ? text.shifted2
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
