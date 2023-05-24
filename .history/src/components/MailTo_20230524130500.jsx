import React from "react";
import slides from "../css/slides.module.css";

const MailTo = ({ email, subject, body, children }) => {
  const handleMailtoClick = () => {
    const windowWidth = 800;
    const windowHeight = 600;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const windowLeft = (screenWidth - windowWidth) / 2;
    const windowTop = (screenHeight - windowHeight) / 2;

    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(
      mailtoURL,
      "_blank",
      `width=${windowWidth},height=${windowHeight},left=${windowLeft},top=${windowTop}`
    );
  };

  const contactIcons = [{ subtitle: "Get in touch with me" }];

  return (
    <>
      {contactIcons.map((item) => (
        <div className={slides.iconBig} onClick={handleMailtoClick}>
          <div className={slides.iconBigImage}  alt="" />
          <div className={slides.iconBigSubtitle}>{item.subtitle}</div>
        </div>
      ))}
    </>
  );
};

export default MailTo;
