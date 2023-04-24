import React from "react";

const TextContainer = () => {
  return (
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
