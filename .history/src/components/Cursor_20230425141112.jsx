import cursor from "../css/cursor.module.css";
import React, { useState, useEffect } from "react";

const Cursor = (props) => {
  const cursorStyle = {
    left: props.cursorCords[1] - 5,
    top: props.cursorCords[0] - 100,
    transitionTimingFunction: "ease-out",
    transition: "0.75s",
    transitionDelay: ".0s",
    rotate: props.cursorPos ? "0deg" : "180deg",
  };

  return (<div className={cursor.cursor} alt="" style={cursorStyle} />);
};

export default Cursor;
