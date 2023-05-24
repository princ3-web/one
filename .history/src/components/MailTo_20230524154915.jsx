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
      {contactIcons.map((item, index) => (
        <div key={index} className={slides.iconBig} onClick={handleMailtoClick}>
          <div className={slides.iconBigImage} alt="" />
          <div className={slides.iconBigSubtitle}>{item.subtitle}</div>
        </div>
      ))}
    </>
  );
};

export default MailTo;
Changes made:

Added the necessary import statement for React.
Added a key prop to the div element in the map function to avoid a console warning. It's important to provide a unique key for each item when rendering a list of elements.
Fixed the syntax error by closing the div element for iconBigImage properly.
Make sure to double-check your other code and ensure that the CSS classes slides.iconBig, slides.iconBigImage, and slides.iconBigSubtitle are correctly defined in your CSS file.






