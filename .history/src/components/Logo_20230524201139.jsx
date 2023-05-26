import React from "react";
import logo from "../css/logo.module.css";
import logoImage from "../assets/icons/logoW.png"

const Logo = () => {
  return (
    <div className={logo.}>
    <img src={logoImage} className={[logo.logo].join(" ")} alt="" />
    </div>
  );
};

export default Logo;
