import React from "react";
import slides from "../css/slides.module.css";
import image from "../assets/icons/email.png";


const MailTo = ({ email, subject, body, children }) => {
  const handleMailtoClick = () => {
    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoURL, "_blank", "height=400,width=600");
  };

  const contactIcons = [{ image: image, subtitle: "email" }];

  // return <div onClick={handleMailtoClick}>{children}</div>;

  return (
    <>
      {contactIcons.map((item) => (
        <div className={slides.iconBig}>
          <img className={slides.iconBigImage} src={item.image} alt="" />
          <div className={slides.iconSubtitle}>{item.subtitle}</div>
        </div>
      ))}
    <>
  );
};

export default MailTo;
