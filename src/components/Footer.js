import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-title">Contact</p>
        <blockquote className="footer-info">
          LJ university<br />
          near Sanand Circle<br />
          Tel: +91 9978617480<br />
          E-mail: <a href="mailto:sibtenkhan6789@gmail.com">sibtenkhan6789@gmail.com</a> 
          {/* &mdash; */}
          {/* Website: <a href="https://www.ergobyte.gr" target="_blank" rel="noopener noreferrer">www.ergobyte.gr</a> */}
        </blockquote>
      </div>
    </footer>
  );
};

export default Footer;
