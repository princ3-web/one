import app from "./css/app.module.css";

const Cursor = (props) => {
    <img className={app.cursor} style={{ 
        left: cursorCords[1] - 30, 
        top: cursorCords[0] - 50, 
        transitionTimingFunction: "ease-out", 
        transition: "1s", 
        transitionDelay: ".1s", 
        rotate: cursorPos ? "0deg" : "180deg" }} 
        src={props.i} alt="" />
}

export default Cursor;