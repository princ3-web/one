import React from "react";
import logo from "../css/logo.module.css";
import logoImage from "../assets/images/logoalt.png"

const Logo = () => {
  return (
    // <div className={[logo.logo].join(" ")}>
    //   <div>Michał</div>
    //   <div>Górnicki</div>
    // </div>
    <img src={logoImage}  alt="" />
  );
};

export default Logo;
