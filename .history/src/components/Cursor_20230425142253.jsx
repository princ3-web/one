import cursor from "../css/cursor.module.css";
import React, { useState, useEffect } from "react";

const Cursor = (props) => {


  const cursorContainerStyle = {
    left: props.cursorCords[1] - 5,
    top: props.cursorCords[0] - 100,
    transitionTimingFunction: "ease-out",
    transition: "0.75s",
    transitionDelay: ".0s",
  };

  return (
    <div className={cursor.cursorContainer} style={cursorContainerStyle}>
      <div className={cursor.cursor} alt="" style={cursorStyle} />
    </div>
  );
};

export default Cursor;
