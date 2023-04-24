import React from "react";
import text from "../css/text.module.css";
import slide from "../components/texts.jsx";

const TextContainer = (props) => {
  return (
    <>
      {texts.map((item, index) => (
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
