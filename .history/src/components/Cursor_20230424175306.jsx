const Cursor = (props) => {
  const cursorStyle = {
    left: cursorCords[1] - 5,
    top: cursorCords[0] - 100,
    transitionTimingFunction: "ease-out",
    transition: "0.75s",
    transitionDelay: ".0s",
    rotate: cursorPos ? "0deg" : "180deg",
  };

  return <div className={cursor.cursor} alt="" style={cursorStyle} />;
};

export default Cursor;
