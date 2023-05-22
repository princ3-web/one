import React from 'react';

const MailTo = ({ email, subject, body, children }) => {
  const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <a href={mailtoURL}>{children}</a>
  );
  
};

export default MailTo;