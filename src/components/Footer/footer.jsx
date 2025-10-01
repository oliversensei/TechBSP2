import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();  

  return (
    <footer className="footer">
      <div className="container">
        <p className="body-medium">Copyright {currentYear} developed by TechBSP2. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
