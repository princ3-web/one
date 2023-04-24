import React from "react";
import dotBar from "./css/dotBar.module.css";


const DotBar = () => {
  return (
    <div className={dotBar.dotBar}>
      <div className={dotBar.dotLine}></div>
      {texts.map((item, index) => (
        <div
          className={[dotBar.dot, shift === index ? dotBar.dotSelected : dotBar.dot].join(
            " "
          )}
        ></div>
      ))}
    </div>
  );
};

export default DotBar;
