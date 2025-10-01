import React from 'react';
import { SiCanva, SiAdobephotoshop, SiMicrosoftexcel, SiFigma, SiMicrosoftpowerpoint, SiMicrosoftword, SiGmail } from 'react-icons/si';
import { FaImage, FaPhone, FaUsers, FaChartLine, FaBriefcase, FaChartBar, FaDatabase, FaTasks, FaPaintBrush } from 'react-icons/fa';

const Resume = () => { 
  return ( 
    <div className="container mx-auto px-4 py-8"> 
      <div className="resume-content grid grid-cols-1 md:grid-cols-2 gap-8"> 
        {/* Left column - Experience */} 
        <div className="resume-left"> 
          <h2 className="section-title title-large text-2xl font-bold mb-4">Experience</h2> 
          <ul className="list space-y-4"> 
            <li className="resume-item"> 
              <div className="resume-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"> 
                <p className="body-large font-semibold"><strong>Alorica</strong></p> 
                <span className="label-medium card-subtitle text-gray-500">July 2025 - Present</span> 
                <span className="body-medium card-text text-gray-700">Customer Service Representative</span> 
              </div> 
            </li> 
            <li className="resume-item"> 
              <div className="resume-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"> 
                <p className="body-large font-semibold"><strong>1Aviation (Cebu Pacific)</strong></p> 
                <span className="label-medium card-subtitle text-gray-500">2024 - 2025</span> 
                <span className="body-medium card-text text-gray-700">Duty Supervisor / Baggage Master / Station Agent</span> 
              </div> 
            </li> 
            <li className="resume-item"> 
              <div className="resume-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"> 
                <p className="body-large font-semibold"><strong>Frontrow international</strong></p> 
                <span className="label-medium card-subtitle text-gray-500">2019 - 2022</span> 
                <span className="body-medium card-text text-gray-700">Sales Associate</span> 
              </div> 
            </li> 
            <li className="resume-item"> 
              <div className="resume-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"> 
                <p className="body-large font-semibold"><strong>Kafat kitchennete Cafe</strong></p> 
                <span className="label-medium card-subtitle text-gray-500">2016 - 2019</span> 
                <span className="body-medium card-text text-gray-700">Waiter / Assistant Chef</span> 
              </div> 
            </li> 
          </ul> 
        </div> 
        {/* Right column - Education */} 
        <div className="resume-right"> 
          <h2 className="section-title title-large text-2xl font-bold mb-4">Education</h2> 
          <ul className="list space-y-4"> 
            <li className="resume-item"> 
              <div className="resume-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"> 
                <p className="body-large font-semibold"><strong>Systems Technology Institute - Pasay Edsa</strong></p> 
                <span className="label-medium card-subtitle text-gray-500">2025 - Present</span> 
                <span className="body-medium card-pro text-gray-700">Bachelor of Science in Tourism Management</span> 
              </div> 
            </li> 
            <li className="resume-item"> 
              <div className="resume-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"> 
                <p className="body-large font-semibold"><strong>Systems Technology Institute - Dasmariñas</strong></p> 
                <span className="label-medium card-subtitle text-gray-500">2019 - 2023</span> 
                <span className="body-medium card-pro text-gray-700">Bachelor of Science in Business Administration</span> 
              </div> 
            </li> 
            <li className="resume-item"> 
              <div className="resume-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"> 
                <p className="body-large font-semibold"><strong>Philippine Christian University</strong></p> 
                <span className="label-medium card-subtitle text-gray-500">2017 - 2019</span> 
                <span className="body-medium card-pro text-gray-700">Science, Technology, Engineering, and Mathematics</span> 
              </div> 
            </li> 
          </ul> 
        </div> 
      </div> 
      {/* Skills & Technologies */} 
      <br />
      <div className="mt-8"> 
        <h2 className="section-title title-large text-2xl font-bold mb-4">Skills & Technologies</h2> 
        <ul className="resume-bottom-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"> 
          <li className="resume-bottom-item flex items-center space-x-2">
            <SiCanva size={28} style={{ color: '#00c4b4' }} />
            <span className="label-medium">Canva</span>
          </li>
          <li className="resume-bottom-item flex items-center space-x-2">
            <FaImage size={28} style={{ color: '#ff5e62' }} /> 
            <span className="label-medium">Picsart</span>
          </li>
          <li className="resume-bottom-item flex items-center space-x-2">
            <SiAdobephotoshop size={28} style={{ color: '#31a8ff' }} />
            <span className="label-medium">Photoshop</span>
          </li>
          <li className="resume-bottom-item flex items-center space-x-2">
            <SiMicrosoftexcel size={28} style={{ color: '#217346' }} />
            <span className="label-medium">Excel</span>
          </li>
          <li className="resume-bottom-item flex items-center space-x-2">
            <SiFigma size={28} style={{ color: '#f24e1e' }} />
            <span className="label-medium">Figma</span>
          </li>
          <li className="resume-bottom-item flex items-center space-x-2">
            <SiMicrosoftpowerpoint size={28} style={{ color: '#d14423' }} />
            <span className="label-medium">PowerPoint</span>
          </li>
          <li className="resume-bottom-item flex items-center space-x-2">
            <SiMicrosoftword size={28} style={{ color: '#2b579a' }} />
            <span className="label-medium">Microsoft Word</span>
          </li>
          <li className="resume-bottom-item flex items-center space-x-2">
            <FaImage size={28} style={{ color: '#00f4e2' }} />
            <span className="label-medium">Capcut</span>
          </li>
          <li className="resume-bottom-item flex items-center space-x-2">
            <SiGmail size={28} style={{ color: '#ea4335' }} />
            <span className="label-medium">Emailing</span>
          </li>
          <li className="resume-bottom-item flex items-center space-x-2">
            <FaPhone size={28} style={{ color: '#0085ca' }} />
            <span className="label-medium">Twilio</span>
          </li>
          <li className="resume-bottom-item flex items-center space-x-2">
            <FaUsers size={28} style={{ color: '#6264a7' }} />
            <span className="label-medium">MS Teams</span>
          </li>
          <li className="resume-bottom-item flex items-center space-x-2">
            <FaChartLine size={28} style={{ color: '#00a1e0' }} />
            <span className="label-medium">Salesforce</span>
          </li>
        </ul>
      </div>
      {/* Services */} 
      <br /><br />
      <div className="mt-8"> 
        <h2 className="section-title title-large text-2xl font-bold mb-4">Services</h2> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 service-container">
          <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start space-x-4">
            <FaBriefcase size={28} style={{ color: '#4b5e7a' }} />
            <div>
              <h3 className="text-lg font-semibold">General Virtual Assistant</h3>
              <p className="text-gray-700">Providing comprehensive administrative support to help you focus on growing your business.</p>
            </div>
          </div>
          <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start space-x-4">
            <FaUsers size={28} style={{ color: '#ff6f61' }} />
            <div>
              <h3 className="text-lg font-semibold">Social Media Management</h3>
              <p className="text-gray-700">Managing your social media presence to enhance engagement and build your brand.</p>
            </div>
          </div>
          <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start space-x-4">
            <FaDatabase size={28} style={{ color: '#00a1e0' }} />
            <div>
              <h3 className="text-lg font-semibold">Data Entry</h3>
              <p className="text-gray-700">Accurate and timely data entry to streamline your processes and improve efficiency.</p>
            </div>
          </div>
          <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start space-x-4">
            <FaTasks size={28} style={{ color: '#34c759' }} />
            <div>
              <h3 className="text-lg font-semibold">Admin Tasks</h3>
              <p className="text-gray-700">Handling administrative tasks to free up your time for more critical business activities.</p>
            </div>
          </div>
          <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start space-x-4">
            <FaChartBar size={28} style={{ color: '#217346' }} />
            <div>
              <h3 className="text-lg font-semibold">Excel Proficiency</h3>
              <p className="text-gray-700">Expertise in data analysis, reporting, and spreadsheet management using Microsoft Excel.</p>
            </div>
          </div>
          <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start space-x-4">
            <FaPaintBrush size={28} style={{ color: '#00c4b4' }} />
            <div>
              <h3 className="text-lg font-semibold">Canva Designs</h3>
              <p className="text-gray-700">Creating visually appealing graphics and social media content using Canva.</p>
            </div>
          </div>
        </div>      </div>
    </div> 
  ); 
};

export default Resume;
