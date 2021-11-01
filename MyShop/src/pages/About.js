import React from "react";
import { TiContacts } from "react-icons/ti";

const About = () => {
  return (
    <div className="central-container">
      <div className="circle">
        <div className="contact-icon">
          <TiContacts size={100} />
        </div>
      </div>
      <h2 className="upper-title">About</h2>
      <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit.
      </p>
    </div>
  );
};

export default About;
