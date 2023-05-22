import React from "react";
import slides from "../css/slides.module.css";
import image from "../assets/icons/email.png";


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
    window.open(mailtoURL, "_blank", "height=600,width=800");
  };

  const contactIcons = [{ image: image, subtitle: "email" }];

  // return <div onClick={handleMailtoClick}>{children}</div>;

  return (
    <>
      {contactIcons.map((item) => (
        <div className={slides.iconBig} onClick={handleMailtoClick}>
          <img className={slides.iconBigImage} src={item.image} alt="" />
          <div className={slides.iconSubtitle}>{item.subtitle}</div>
        </div>
      ))}
    </>
  );
};

export default MailTo;
