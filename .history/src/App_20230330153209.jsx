import React, { useEffect, useState } from "react";
import app from "./css/app.module.css";
import cursor from "./css/cursor.module.css";
import text from "./css/text.module.css";
import logo from "./css/logo.module.css";
import background from "./css/background.module.css";
import skyButton from "./css/skyButton.module.css";
import dotBar from "./css/dotBar.module.css";
import mountainBackground from "./assets/images/mountainbackground.png";
import arrow from "./assets/images/arrow.png";

function App() {
  const [shift, setShift] = useState(0);
  const [cursorPos, setCursorPos] = useState(false);
  const [cursorCords, setCursorCords] = useState([0, 0]);
  const [sky, setSky] = useState(0);



  const texts = [
    [
      <>
        <div className={text.sectionContainer}>
          <div className={[text.text, text.text3].join(" ")}>Web Designer & Developer</div>
          <div className={[text.text, text.text3].join(" ")}>creating custom websites,</div>
          <div className={[text.text, text.text3, text.selected].join(" ")}>with beautiful designs,</div>
          <div className={[text.text, text.text3].join(" ")}>and fast performance.</div>
        </div>
      </>,
    ],
    [
      <>
        <div className={text.sectionContainer}>
          <div className={[text.text, text.text3].join(" ")}>Web Designer & Developer</div>
          <div className={[text.text, text.text3].join(" ")}>creating custom websites,</div>
          <div className={[text.text, text.text3, text.selected].join(" ")}>with beautiful designs,</div>
          <div className={[text.text, text.text3].join(" ")}>and fast performance.</div>
        </div>
        <div className={text.sectionContainer}>
          <div className={text.text}>My default text</div>
          <div className={[text.text].join(" ")}>My default text</div>
          <div className={text.text}>My default text</div>
        </div>
      </>,
    ],
    [
      <>
        <div className={text.sectionContainer}>
          <div className={text.text}>My default text</div>
          <div className={text.text}>My default text</div>
          <div className={text.text}>My default text</div>
        </div>
        <div className={text.sectionContainer}>
          <div className={text.text}>My default text</div>
          <div className={[text.text, text.selected].join(" ")}>My default text</div>
          <div className={text.text}>My default text</div>
        </div>
      </>,
    ],
    [
      <>
        <div className={text.sectionContainer}>
          <div className={text.text}>My default text</div>
          <div className={text.text}>My default text</div>
          <div className={text.text}>My default text</div>
        </div>
        <div className={text.sectionContainer}>
          <div className={text.text}>My default text</div>
          <div className={[text.text, text.selected].join(" ")}>My default text</div>
          <div className={text.text}>My default text</div>
        </div>
      </>,
    ],
    [
      <>
        <div className={text.sectionContainer}>
          <div className={text.text}>My default text</div>
          <div className={text.text}>My default text</div>
          <div className={text.text}>My default text</div>
        </div>
        <div className={text.sectionContainer}>
          <div className={text.text}>My default text</div>
          <div className={[text.text, text.selected].join(" ")}>My default text</div>
          <div className={text.text}>My default text</div>
        </div>
      </>,
    ],
  ];

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
    left: cursorCords[1] - 30, 
    top: cursorCords[0] - 50, 
    transitionTimingFunction: "ease-out", 
    transition: "0.75s", 
    transitionDelay: ".0s", 
    rotate: cursorPos ? "0deg" : "180deg"}

  return (
    <div className={app.app}>
      <div className={[logo.logo, text.text18].join(" ")}>
        <div>Michał</div>
        <div>Górnicki</div>
      </div>

      <img className={cursor.cursor} style={cursorStyle} 
        src={arrow} alt="" />

      <div className={dotBar.dotBar}>
        <div className={dotBar.dotLine}></div>
        {texts.map((item, index) => (
          <div className={[dotBar.dot, shift === index ? dotBar.dotSelected : dotBar.dot].join(" ")}></div>
        ))}
      </div>

      <div className={[skyButton.skyButton, sky === 0 ? skyButton.cloudyIcon : skyButton.clearIcon].join(" ")} onClick={() => (sky === 0 ? setSky(1) : setSky(0))}></div>
          
      <img src={mountainBackground} 
      className={[background.background, 
        sky === 0 ? background.lightingClear : background.lightingCloudy].join(" ")} alt="" 
      onClick={() => (cursorPos ? (shift < texts.length - 1 ? setShift((state) => state + 1) : "") : shift > 0 ? setShift((state) => state - 1) : "")}
      />
      <img className={[background.backgroundClouds, sky === 0 ? background.clear : background.cloudy].join(" ")} alt=""
      onClick={() => (cursorPos ? (shift < texts.length - 1 ? setShift((state) => state + 1) : "") : shift > 0 ? setShift((state) => state - 1) : "")}
      />

      {texts.map((item, index) => (
        <div className={[text.container, index < shift ? text.shifted0 : index === shift ? text.shifted1 : index > shift ? text.shifted2 : ""].join(" ")}
        onClick={() => (cursorPos ? (shift < texts.length - 1 ? setShift((state) => state + 1) : "") : shift > 0 ? setShift((state) => state - 1) : "")}
        >{item}</div>
      ))}
    </div>
  );
}

export default App;
