import React from 'react';
import { MdMail, MdCall, MdInsertDriveFile } from 'react-icons/md'; 

const Hero = () => {
  return (
    <section className="section hero">
      <div className="container">
        <figure className="hero-banner img-holder" style={{ '--width': '240px', '--height': '240px' }}>
          <img
            src="https://kylelubayan.netlify.app/assets/img/kyle.jpg"
            width="150"
            height="150"
            alt="Kyle Lubayan"
            className="img-cover"
          />
        </figure>

        <div className="hero-content">
          <span className="label-large section-subtitle">Freelancer</span>
          <h1 className="display-small">Kyle Lubayan</h1>
          <p className="body-large section-text">
            Your future is created by what you so today not Tomorrow
          </p>

          <div className="btn-wrapper">
            <a href="mailto:kylelubayan@gmail.com" className="chip">
              <MdMail aria-hidden="true" />
              <span className="label-large">kylelubayan@gmail.com</span>
              <div className="state-layer"></div>
            </a>
            <a href="https://verfolio-resume.vercel.app/" class="chip">
              <MdInsertDriveFile aria-hidden="true" />
              <span class="label-large">View Resume</span>
              <div class="state-layer"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
