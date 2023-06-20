import React from "react";
import logo from "../css/logo.module.css";
import logoImage from "../assets/icons/logo.png"

const Logo = () => {
  return (
    <img src={logoImage} className={[logo.logo].join(" ")} alt="" />
  );
};

export default Logo;