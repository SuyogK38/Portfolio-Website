import {
  FaFacebook,
  FaGit,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>24 Magarpatta City.</p>
              <p>Pune.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 - 8208982315
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              suyog.kubde02@tcs.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the Company</h4>
          <p>
            This is me Suyog Kubde.Founder of Techsol.I enjoy discussing new
            problems, projects and design challanges.
          </p>
          <div className="social">
            <FaFacebook
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaGit size={20} style={{ color: "#fff", marginRight: "1rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
