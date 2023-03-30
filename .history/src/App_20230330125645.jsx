import React, { useEffect, useState } from "react";
import app from "./css/app.module.css";
import mountainBackground from "./assets/images/mountainbackground.png";
import arrow from "./assets/images/arrow.png";

function App() {
  const [shift, setShift] = useState(0);
  const [cursorPos, setCursorPos] = useState(false);
  const [cursorCords, setCursorCords] = useState([0, 0]);
  const [sky, setSky] = useState(0);

  console.log(sky);

  const texts = [
    [
      <>
        <div className={app.textContainer}>
          <div className={[app.text, app.text3].join(" ")}>Web Designer & Developer</div>
          <div className={[app.text, app.text3].join(" ")}>creating custom websites,</div>
          <div className={[app.text, app.text3, app.selected].join(" ")}>with beautiful designs,</div>
          <div className={[app.text, app.text3].join(" ")}>and fast performance.</div>
        </div>
      </>,
    ],
    [
      <>
        <div className={app.textContainer}>
          <div className={[app.text, app.text3].join(" ")}>Web Designer & Developer</div>
          <div className={[app.text, app.text3].join(" ")}>creating custom websites,</div>
          <div className={[app.text, app.text3, app.selected].join(" ")}>with beautiful designs,</div>
          <div className={[app.text, app.text3].join(" ")}>and fast performance.</div>
        </div>
        <div className={app.textContainer}>
          <div className={app.text}>My default text</div>
          <div className={[app.text].join(" ")}>My default text</div>
          <div className={app.text}>My default text</div>
        </div>
      </>,
    ],
    [
      <>
        <div className={app.textContainer}>
          <div className={app.text}>My default text</div>
          <div className={app.text}>My default text</div>
          <div className={app.text}>My default text</div>
        </div>
        <div className={app.textContainer}>
          <div className={app.text}>My default text</div>
          <div className={[app.text, app.selected].join(" ")}>My default text</div>
          <div className={app.text}>My default text</div>
        </div>
      </>,
    ],
    [
      <>
        <div className={app.textContainer}>
          <div className={app.text}>My default text</div>
          <div className={app.text}>My default text</div>
          <div className={app.text}>My default text</div>
        </div>
        <div className={app.textContainer}>
          <div className={app.text}>My default text</div>
          <div className={[app.text, app.selected].join(" ")}>My default text</div>
          <div className={app.text}>My default text</div>
        </div>
      </>,
    ],
    [
      <>
        <div className={app.textContainer}>
          <div className={app.text}>My default text</div>
          <div className={app.text}>My default text</div>
          <div className={app.text}>My default text</div>
        </div>
        <div className={app.textContainer}>
          <div className={app.text}>My default text</div>
          <div className={[app.text, app.selected].join(" ")}>My default text</div>
          <div className={app.text}>My default text</div>
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
    console.log(shift);

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

  return (
    <div className={app.app}>
      <div className={[app.logo, app.text18].join(" ")}>
        <div>Michał</div>
        <div>Górnicki</div>
      </div>

      <img className={app.cursor} style={{ left: cursorCords[1] - 30, top: cursorCords[0] - 50, transition: ".5s",transitionDelay: ".2s", rotate: cursorPos ? "0deg" : "180deg" }} src={arrow} alt="" />

      <div className={app.dotBar}>
        <div className={app.dotLine}></div>
        {texts.map((item, index) => (
          <div className={[app.dot, shift === index ? app.dotSelected : app.dot].join(" ")}></div>
        ))}
      </div>

      <div className={[app.skyButton, sky === 0 ? app.cloudyIcon : app.clearIcon].join(" ")} onClick={() => (sky === 0 ? setSky(1) : setSky(0))}></div>

          
      <img src={mountainBackground} className={[app.background, sky === 0 ? app.lightingClear : app.lightingCloudy].join(" ")} alt="" 
      onClick={() => (cursorPos ? (shift < texts.length - 1 ? setShift((state) => state + 1) : "") : shift > 0 ? setShift((state) => state - 1) : "")}
      />
      <img className={[app.backgroundClouds, sky === 0 ? app.clear : app.cloudy].join(" ")} alt=""
      onClick={() => (cursorPos ? (shift < texts.length - 1 ? setShift((state) => state + 1) : "") : shift > 0 ? setShift((state) => state - 1) : "")}
      />

      {texts.map((item, index) => (
        <div className={[app.container, index < shift ? app.shifted0 : index === shift ? app.shifted1 : index > shift ? app.shifted2 : ""].join(" ")}
        onClick={() => (cursorPos ? (shift < texts.length - 1 ? setShift((state) => state + 1) : "") : shift > 0 ? setShift((state) => state - 1) : "")}
        >{item}</div>
      ))}
    </div>
  );
}

export default App;
