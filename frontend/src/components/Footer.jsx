import React from "react";

function Footer() {
  var currentYear = new Date().getFullYear();

  return (
    <div className="footer-section">
      <footer>
        <p className="mt-3">Copyright © My Website {currentYear}</p>
      </footer>
    </div>
  );
}

export default Footer;
