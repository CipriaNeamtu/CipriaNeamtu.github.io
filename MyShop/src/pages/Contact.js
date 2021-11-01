import React from "react";
import { TiContacts } from "react-icons/ti";

const Contact = () => {
  return (
    <div className="central-container">
      <div className="circle">
        <div className="contact-icon">
          <TiContacts size={100} />
        </div>
      </div>
      <h2 className="upper-title">Contact</h2>
      <div className="contact-text">
        <p className="contact-info">droid@droid.com</p>
        <p className="contact-info">
          tel. 123 - 456 - 789 tel. 887 - 236 - 324
        </p>
        <p className="contact-info">Cluj, Cluj-Napoca</p>
        <p className="contact-info">Romania</p>
      </div>
    </div>
  );
};

export default Contact;
