import React from 'react';

const MailTo = ({ email, subject, body, children }) => {
  const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`
  window.open(mailtoURL, '_blank', 'height=400,width=600');
  ;

  return (
    <a href={mailtoURL}>{children}</a>
  );
  
};

export default MailTo;