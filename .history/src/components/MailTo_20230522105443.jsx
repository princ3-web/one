import React from "react";

const MailTo = ({ email, subject, body, children }) => {
  const handleMailtoClick = () => {
    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoURL, "_blank", "height=400,width=600");
  };

  return <div onClick={handleMailtoClick}>{children}</div>;
  return <div onClick={handleMailtoClick}>{children}</div>;
};

export default MailTo;
