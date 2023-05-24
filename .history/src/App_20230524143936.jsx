import React, { useEffect, useState } from "react";
import app from "./css/app.module.css";
import Slides from "./components/Slides";
import SlidesContent from "./components/SlidesContent.jsx";
import Logo from "./components/Logo.jsx";
import DotBar from "./components/DotBar.jsx";
import Background from "./components/Background";

function App() {
  const [shift, setShift] = useState(0);



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
    >
      {/* components */}
      <Logo />
      <DotBar shift={shift} />
      <Background shift={shift} />
      <Slides
        shift={shift}
        rotate={cursorPos}
        arrowDown={() =>
          shift < SlidesContent.length - 1 ? setShift((state) => state + 1) : ""
        }
        arrowUp={() => (shift > 0 ? setShift((state) => state - 1) : "")}
      />
    </div>
  );
}

export default App;
