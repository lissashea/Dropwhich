// components/Footer.js

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <p className="footerContact">
          <span>Instagram:</span> @cathstable
        </p>
        <p className="footerContact">
          <span>Email:</span> dropwich@gmail.com
        </p>
        <p className="footerContact">
          <span>Phone:</span> 555-555-5555
        </p>
      </div>
    </footer>
  );
}

export default Footer;
