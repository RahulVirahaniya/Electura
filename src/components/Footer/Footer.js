import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerHeading">
        Follow Us
        <br />
        <a href="www.instagram.com">
          <i class="fab fa-instagram faFooter"></i>
        </a>
        <a href="www.facebook.com">
          <i class="fab fa-facebook-f faFooter"></i>
        </a>
        <a href="www.github.com">
          <i class="fab fa-github faFooter"></i>
        </a>
      </div>

      <div className="lastFooter">Copyright @Electura</div>
    </div>
  );
}

export default Footer;
