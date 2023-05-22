import React, { useEffect, useState } from "react";
import app from "./css/app.module.css";
import Slides from "./components/Slides";
import SlidesContent from "./components/SlidesContent.jsx";
import Logo from "./components/Logo.jsx";
import DotBar from "./components/DotBar.jsx";
import Background from "./components/Background";

function App() {
  // useState for selected slide number
  const [shift, setShift] = useState(0);

  // useState for checking is cursor position in top or bottom of website - for changing slide with mouse click
  const [cursorPos, setCursorPos] = useState(false);

  // useEffect for sliding text slides with mouse wheel
  useEffect(() => {
    const handleMouseWheel = (event) => {
      if (event.deltaY >= 0 && shift < SlidesContent.length - 1) {
        setShift((state) => state + 1);
      } else if (event.deltaY < 0 && shift > 0) {
        setShift((state) => state - 1);
      }
    };

    document.addEventListener("wheel", handleMouseWheel);
    return () => {
      document.removeEventListener("wheel", handleMouseWheel);
    };
  }, [shift]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 40 && shift < SlidesContent.length - 1) {
        // Down arrow
        setShift((state) => state + 1);
      } else if (event.keyCode === 38 && shift > 0) {
        // Up arrow
        setShift((state) => state - 1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [shift]);

  // useEffect for setting two useState: cursorPos and cursorCords
  useEffect(() => {
    const handleMouseMove = (event) => {
      event.clientY > window.innerHeight / 2 ? setCursorPos(true) : setCursorPos(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={app.app}
      // change slide based on cursor position (cursorPos)
      // onClick={() =>
      //   cursorPos
      //     ? shift < SlidesContent.length - 1
      //       ? setShift((state) => state + 1)
      //       : ""
      //     : shift > 0
      //     ? setShift((state) => state - 1)
      //     : ""
      // }
    >
      {/* components */}
      <Logo />
      <DotBar shift={shift} />
      <Background shift={shift} />
      <Slides shift={shift} rotate={cursorPos} arrowUp={() =>setShift((state) => state + 1)} />
    </div>
  );
}

export default App;
