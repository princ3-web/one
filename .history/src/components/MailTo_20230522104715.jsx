import React from 'react';

const MailTo = ({ email, subject, body, children }) => {
  const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <a href={mailtoURL}>{children}</a>
  );
  window.open(mailtoURL, '_blank', 'height=400,width=600');

};

export default MailTo;