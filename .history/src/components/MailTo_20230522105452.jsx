import React from "react";

const MailTo = ({ email, subject, body, children }) => {
  const handleMailtoClick = () => {
    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoURL, "_blank", "height=400,width=600");
  };

  // return <div onClick={handleMailtoClick}>{children}</div>;


      retu<div className={slides.iconBig}>
              <img className={slides.iconBigImage} src={item.image} alt="" />
              <div className={slides.iconSubtitle}>{item.subtitle}</div>
            </div>
};

export default MailTo;
