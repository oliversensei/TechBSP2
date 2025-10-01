import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <>
      {/* Contact Info */}
      <div className="contact-info">
        <h4 className="section-title title-large">Contact Info</h4>
        <ul className="contact-info-list">
          <li className="contact-info-item">
            <div className="icon-box">
              <FaEnvelope size={24} />
            </div>
            <div className="info-content">
              <p className="label-large info-title">Mail</p>
              <a
                href="mailto:kylelubayan@gmail.com"
                className="label-medium info-text"
              >
                kylelubayan@gmail.com
              </a>
              {/* <a
                href="mailto:jnmartillos1212@gmail.com"
                className="label-medium info-text"
              >
                jnmartillos1212@gmail.com
              </a> */}
            </div>
          </li>
          <li className="contact-info-item">
            <div className="icon-box">
              <FaPhoneAlt size={24} />
            </div>
            <div className="info-content">
              <p className="label-large info-title">Contact</p>
              <a href="tel:+09663857153" className="label-medium info-text">
                +63 962 289 1752
              </a>
            </div>
          </li>
          <li className="contact-info-item">
            <div className="icon-box">
              <FaMapMarkerAlt size={24} />
            </div>
            <div className="info-content">
              <p className="label-large info-title">Address</p>
              <a
                href="https://www.bing.com/maps?q=Dasmari%C3%B1as&satid=id.sid%3Aa43bcd80-bf95-429f-9b78-0dae250e594d&FORM=KC2MAP&cp=14.339423%7E120.946362&lvl=16.8"
                className="label-medium info-text"
                target='_blank'
                rel="noreferrer" 
              >
                Philippines • Calabarzon
              </a>
            </div>
          </li>
        </ul>

        <h4 className="title-large">Social Info</h4>
        <div className="social-list">
          <a href="https://www.facebook.com/Kylelubayan.072001" className="social-item" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com" className="social-item" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://github.com" className="social-item" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
