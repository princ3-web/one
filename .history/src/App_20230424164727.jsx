import React, { useEffect, useState } from "react";
import app from "./css/app.module.css";
import cursor from "./css/cursor.module.css";
import text from "./css/text.module.css";
import logo from "./css/logo.module.css";
import background from "./css/background.module.css";
import dotBar from "./css/dotBar.module.css";
import TextContainer from "./components/TextContainer";
import texts from "./components/textContent.jsx";

function App() {
  const [shift, setShift] = useState(0);
  const [cursorPos, setCursorPos] = useState(false);
  const [cursorCords, setCursorCords] = useState([0, 0]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.deltaY >= 0 && shift < texts.length - 1) {
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

  const cursorStyle = {
    left: cursorCords[1] - 5,
    top: cursorCords[0] - 100,
    transitionTimingFunction: "ease-out",
    transition: "0.75s",
    transitionDelay: ".0s",
    rotate: cursorPos ? "0deg" : "180deg",
  };

  return (
    <div
      className={app.app}
      onClick={() =>
        cursorPos
          ? shift < texts.length - 1
            ? setShift((state) => state + 1)
            : ""
          : shift > 0
          ? setShift((state) => state - 1)
          : ""
      }
    >
      <div className={[logo.logo, text.text18].join(" ")}>
        <div>Michał</div>
        <div>Górnicki</div>
      </div>

      <div className={cursor.cur}></div>
      <div className={cursor.cursor} style={cursorStyle} alt="" />

      <div className={dotBar.dotBar}>
        <div className={dotBar.dotLine}></div>
        {texts.map((item, index) => (
          <div
            className={[
              dotBar.dot,
              shift === index ? dotBar.dotSelected : dotBar.dot,
            ].join(" ")}
          ></div>
        ))}
      </div>

      <video
        loop
        autoPlay
        muted
        className={background.video}
        src={require("./assets/images/video.mp4")}
      />

      <TextContainer shift={shift} />
    </div>
  );
}

export default App;
