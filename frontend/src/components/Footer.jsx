import { FaRegCopyright, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Disclaimer / About section */}
      <div className="footer-section">
        <h2>DISCLAIMER</h2>
        <p>
          SOCIOTANTRA is a non-profit organization based in Thane, Maharashtra,
          working to provide healthcare support and medical financial assistance
          to underprivileged individuals. We aim to ensure that no one is denied
          medical treatment due to lack of funds.
        </p>
      </div>

      {/* Contact information */}
      <div className="footer-section">
        <h3>CONTACT DETAILS</h3>

        <p className="footer-item">
          <FaMapMarkerAlt className="footer-icon" aria-hidden="true" />
          Thane, Maharashtra, India
        </p>

        <p className="footer-item">
          <FaPhoneAlt className="footer-icon" aria-hidden="true" />
          +91 98202 89595
        </p>
      </div>

      {/* Footer bottom bar */}
      <div className="footer-bottom">
        <FaRegCopyright className="footer-icon" aria-hidden="true" />
        <span>2026 Sociotantra. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
