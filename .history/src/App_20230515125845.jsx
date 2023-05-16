import React, { useEffect, useState } from "react";
import app from "./css/app.module.css";
import Slides from "./components/Slides";
import SlidesContent from "./components/SlidesContent.jsx";
import CursorComponent from "./components/Cursor.jsx";
import Logo from "./components/Logo.jsx";
import DotBar from "./components/DotBar.jsx";
import Video from "./components/Video.jsx";
import Background from "./components/Background";

function App() {
  // useState for selected slide number
  const [shift, setShift] = useState(0);

  // useState for checking is cursor position in top or bottom of website - for changing slide with mouse click
  const [cursorPos, setCursorPos] = useState(false);

  // useState for cursor coordinates, used for glowing light tracking cursor effect
  const [cursorCords, setCursorCords] = useState([0, 0]);

  // useEffect for sliding text slides with mouse wheel
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.deltaY >= 0 && shift < (SlidesContent.length)) {
        setShift((state) => state + 1);
      } else if (event.deltaY < 0 && shift > 0) {
        setShift((state) => state - 1);
      }
    };

    document.addEventListener("wheel", handleKeyPress);
    return () => {
      document.removeEventListener("wheel", handleKeyPress);
    };
  });

  // useEffect for setting two useState: cursorPos and cursorCords
  useEffect(() => {
    const handleMouseMove = (event) => {
      event.clientY > window.innerHeight / 2 ? setCursorPos(true) : setCursorPos(false);
      setCursorCords([event.clientY, event.clientX]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  console.log(SlidesContent)


  return (
    <div
      className={app.app}
      // change slide based on cursor position (cursorPos)
      onClick={() =>
        cursorPos
          ? shift < SlidesContent.length - 1
            ? setShift((state) => state + 1)
            : ""
          : shift > 0
          ? setShift((state) => state - 1)
          : ""
      }
    >
      {/* components */}
      <Logo />
      <CursorComponent cursorCords={cursorCords} cursorPos={cursorPos} />
      <DotBar shift={shift} />
      {/* <Video /> */}
      <Background shift={shift}/>
      <Slides shift={shift} rotate={cursorPos} />
    </div>
  );
}

export default App;
