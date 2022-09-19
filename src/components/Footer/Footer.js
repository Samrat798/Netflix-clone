import React from "react";
import Link from "./Link";
import Column from "./Column";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <a className="footer-title" href="#">
        Questions? Contact us.
      </a>
      <div className="footer-row">
        <Column>
          <Link>FAQ</Link>
          <Link>Investor Relations</Link>
          <Link>Privacy</Link>
          <Link>Speed Test</Link>
        </Column>
        <Column>
          <Link>Help Center</Link>
          <Link>Jobs</Link>
          <Link>Cookie Preferences</Link>
          <Link>Legal Notices</Link>
        </Column>
        <Column>
          <Link>Account</Link>
          <Link>Ways to Watch</Link>
          <Link>Corporate Information</Link>
          <Link>Netflix Originals</Link>
        </Column>
        <Column>
          <Link>Media Center</Link>
          <Link>Terms of Use</Link>
          <Link>Contact Us</Link>
        </Column>
      </div>
    </footer>
  );
}

export default Footer;
