// components/Footer.js

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <p className="footerContact">
          <span>Email:</span> dropwich@gmail.com
        </p>
        <p className="footerContact">
          <span>Phone:</span> 555-555-5555
        </p>
        <p className="footerContact instagram">
          <span>Instagram:</span> @cathstable
        </p>
        <p className="footerContact venmo">
          <span>Venmo:</span> @cathstable
        </p>
      </div>
    </footer>
  );
}

export default Footer;
