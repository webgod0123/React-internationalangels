import React, { Component } from "react";

import ContactImg from "../assets/images/contact.png";
import Phone from "../assets/images/phone.png";
import Email from "../assets/images/email.png";

export default class Home extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-landing">
          <img src={ContactImg} alt="Contact" />
        </div>
        <div className="contact-info">
          <div className="contact-info-item">
            <img src={Phone} alt="contact phone info" />
            <p>Have an urgent message? Get in contact with us right now.</p>
            <p className="info">+1 510-998-7145</p>
          </div>
          <div className="contact-info-item">
            <img src={Email} alt="contact email info" />
            <p>Interested in investing or have a business idea? Email us at:</p>
            <a href="mailto:kyran@berkeley.edu">
              <p className="info">kyran@berkeley.edu</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
