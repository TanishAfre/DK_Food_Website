import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <img className="footer-img" src={assets.logo} alt="logo" />
            <p>
            Your one-stop shop for all things mobile. We offer a wide selection of phones, accessories, and vapes, along with expert repair services for phones and laptops. Visit us today for great deals, friendly service, and quick fixes to keep you connected.
            </p>
            <div className="footer-social-icon">
            <a href="https://www.facebook.com/ipoint.dundalk/" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="facebook" />
            </a>
              {/* <img src={assets.twitter_icon} alt="twitter" />
              <img src={assets.linkedin_icon} alt="linkedin" /> */}
            </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>085 192 5850</li>
                <li>iPoint@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr/>
        <p className="footer-copyright"> Tanish 2024 &copy; iPoint.com</p>
      </div>
    </>
  );
};

export default Footer;