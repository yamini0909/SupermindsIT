import React from "react";
import "./Footer.css";
import emailIcon from "../Images/email.icon.png"
import PhoneIcon from "../Images/phone-icon.png"
import fbIcon from "../Images/fb-icon.png"
import instaIcon from "../Images/insta-icon.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="update">
        <div className="input-contact">
          <div className="update-input">
            <div className="update-heading">Get Event Updates</div>
            <div className="inputEmail-submitBtn">
              <input
                className="enter-email"
                type="text"
                placeholder="Enter your Email"
              />
              <button className="submit">Sumit</button>
            </div>
          </div>
          <div className="contact">
            <div className="contact-heading">Contact Us</div>
            <div className="email-phone-social">
              <div className="email">
                <div className="email-icon mg-10">
                  <img src={emailIcon} alt="" />
                </div>
                <div className="email-text mg-10">events@18candleriggs.com</div>
              </div>
              <div className="phone">
                <div className="phone-icon mg-10">
                <img src={PhoneIcon} alt="" />
                </div>
                <div className="phone-text mg-10">07936 558303</div>
              </div>
              <div className="social-media">
                <div className="facebook-icon mg-10">
                <img src={fbIcon} alt="" />
                </div>
                <div className="insta-icon mg-10">
                <img src={instaIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
