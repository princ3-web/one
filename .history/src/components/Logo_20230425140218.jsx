import React from "react";
import logo from "../css/logo.module.css";
import logoImage from "../assets/icons/logo2.png"

const Logo = () => {
  return (
    // <div className={[logo.logo].join(" ")}>
    //   <div>Michał</div>
    //   <div>Górnicki</div>
    // </div>
    <img src={logoImage} className={[logo.logo].join(" ")} alt="" />
  );
};

export default Logo;
