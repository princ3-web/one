import cursor from "../css/cursor.module.css";
import React, { useState, useEffect } from "react";

const Cursor = (props) => {
  const cursorStyle = {

    rotate: props.cursorPos ? "0deg" : "180deg",
  };

  const cursorContainerStyle = {
    left: props.cursorCords[1] - 5,
    top: props.cursorCords[0] - 100,
  };

  return (
    <div className={cursor.cursorContainer} style={cursorContainerStyle}>
      <div className={cursor.cursor} alt="" style={cursorStyle} />
    </div>
  );
};

export default Cursor;
