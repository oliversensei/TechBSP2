import React from 'react';
import { MdLocationOn, MdWork } from 'react-icons/md'; 
import { FaGlobe } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-card">
      <h2 className="card-title title-medium">About</h2>
      <p className="body-medium card-text">
        A passionate Freelancer with a strong background in Customer Service
      </p>
      <ul className="about-list">
        <li className="list-item">
          <MdLocationOn size={25} aria-hidden="true" />
          <span className="label-medium">Philippines • Calabarzon • Cavite</span>
        </li>
        <li className="list-item">
          <MdWork size={25} aria-hidden="true" />
          <span className="label-medium">Customer Service Representative</span>
        </li>
        {/* <li className="list-item">
          <FaGlobe size={25} aria-hidden="true" />
          <a href="https://olivergrades.vercel.app/" className="label-medium">
            https://olivergrades.vercel.app/
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default About;
