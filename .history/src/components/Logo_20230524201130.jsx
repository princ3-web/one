import React from "react";
import logo from "../css/logo.module.css";
import logoImage from "../assets/icons/logoW.png"

const Logo = () => {
  return (
    <div className="">
    <img src={logoImage} className={[logo.logo].join(" ")} alt="" />
  );
};

export default Logo;
