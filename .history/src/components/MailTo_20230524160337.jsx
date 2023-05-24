import React from "react";
import slides from "../css/slides.module.css";

const MailTo = ({ email, subject, body, children }) => {
  
  const handleMailtoClick = () => {
    const mailtoURL = 'mailto:example@example.com';
    window.open(mailtoURL, '_blank');
  };

  const items = [{ subtitle: "Get in touch with me" }];

  return (
    <>
      {items.map((item) => (
        <div className={slides.iconBig} onClick={handleMailtoClick}>
          <div className={slides.iconBigImage}  alt="" />
          <div className={slides.iconBigSubtitle}>{item.subtitle}</div>
        </div>
      ))}
    </>
  );
};

export default MailTo;
