import React, { useState } from 'react';
import Projects from '../Project/projects'
import Resume from '../Resume/resume'
import ContactInfo from '../Contact/contactInfo'
import ContactForm from '../Contact/contactForm'


const PrimaryTabs = () => {
    const [activeTab, setActiveTab] = useState('project');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            {/* Primary tabs */}
            <div className="primary-tabs">
                <button
                    className={`tab-btn ${activeTab === 'project' ? 'active' : ''}`}
                    onClick={() => handleTabClick('project')}
                >
                    <span className="tab-text title-small">Certificates</span>
                    <div className="state-layer"></div>
                </button>
                <button
                    className={`tab-btn ${activeTab === 'resume' ? 'active' : ''}`}
                    onClick={() => handleTabClick('resume')}
                >
                    <span className="tab-text title-small">Resume</span>
                    <div className="state-layer"></div>
                </button>
                <button
                    className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
                    onClick={() => handleTabClick('contact')}
                >
                    <span className="tab-text title-small">Contact</span>
                    <div className="state-layer"></div>
                </button>
            </div>

            {/* Tab content sections */}
            <section className={`section tab-content ${activeTab === 'project' ? 'active' : ''}`} data-tab-content="project">
                <Projects />
            </section>

            <section className={`section tab-content ${activeTab === 'resume' ? 'active' : ''}`} data-tab-content="resume">
                <Resume />
            </section>

            <section className={`section tab-content contact-tab ${activeTab === 'contact' ? 'active' : ''}`} data-tab-content="contact">
              <div className='container '>
                <ContactInfo />
                <ContactForm />
              </div>
            </section>
        </div>
    );
};

export default PrimaryTabs;
