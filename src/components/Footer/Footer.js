import React from 'react';
import './footer.css';
import { FaArrowCircleUp } from 'react-icons/fa';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="scroll-to-top-container">
        <button className="scroll-to-top" onClick={handleScrollToTop}>
          <FaArrowCircleUp size={30} />
        </button>
      </div>
      <div className="footer-content">
        <div className="logo">मालवीबोल</div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/manu2705/" className="social-link">Linkedin</a>
          <a href="#" className="social-link">Twitter</a>
          <a href="#" className="social-link">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
