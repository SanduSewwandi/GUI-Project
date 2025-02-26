import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
            <h2>BESTUDENT</h2>
          
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <p>
            <FaMailBulk /> Email:{" "}
            <a href="mailto:info@bestudent.lk">info@bestudent.lk</a>
          </p>
          <p>
            <FaPhone /> Hotline: <a href="tel:0702682680">0702682680</a>
          </p>
          <p>
            <FaWhatsapp /> WhatsApp: <a href="tel:0740178744">0740148744</a> 
            
          </p>
         
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <a href="./home">Home</a>
          <a href="./categories">Categories</a>
          <a href="./courses">Courses</a>
          <a href="./about">About</a>
          
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;

