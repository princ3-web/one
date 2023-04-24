import React from "react";
import text from "../css/text.module.css";

const TextContainer = () => {  return (
    <div>
      {texts.map((item, index) => (
        <div
          className={[
            text.container,
            index < shift
              ? text.shifted0
              : index === shift
              ? text.shifted1
              : index > shift
              ? text.shifted2
              : "",
          ].join(" ")}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default TextContainer;
