import React from "react";
import text from "../css/text.module.css";


const TextContainer = (props) => {
  const texts = [
    [
      <>
        <div className={text.sectionContainer}>
          <div className={[text.text].join(" ")}>Web Designer & Developer</div>
          <div className={[text.text].join(" ")}>creating custom websites,</div>
          <div className={[text.text].join(" ")}>with beautiful designs,</div>
          <div className={[text.text].join(" ")}>and fast performance</div>
          <div className={[text.text].join(" ")}>for your needs.</div>
        </div>
      </>,
    ],
    [
      <>
        <div className={text.sectionContainer}>
          <div className={[text.text, text.text3].join(" ")}>ABCD EFGH ijkl</div>
        </div>
      </>,
    ],
    [
      <>
        <div className={text.sectionContainer}>
          <div className={[text.text, text.text3].join(" ")}>ABCD EFGH ijkl</div>
        </div>
      </>,
    ],
    [
      <>
        <div className={text.sectionContainer}>
          <div className={[text.text, text.text3].join(" ")}>ABCD EFGH ijkl</div>
        </div>
      </>,
    ],
    [
      <>
        <div className={text.sectionContainer}>
          <div className={[text.text, text.text3].join(" ")}>ABCD EFGH ijkl</div>
        </div>
      </>,
    ],
  ];

  return (
    <div>
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
    </div>
  );
};

export default TextContainer;
