import React from 'react'
import SocialIcons from '../SocialIcons/SocialIcons';
import './Footer.css'

const Footer = () => {
  return (
    <footer id="footer" className='r'>
        <hr className="line" style={{ width: '100%' }} />
        <div className="footer d-flex flex-wrap justify-content-between align-items-center">
          <a href="#home" className="logo">Zack web <span>.</span></a>
          <p className="copyrights">All Rights Reserved &copy;2023-2024 | by <span>Boughaba Zakaria</span></p>
          <SocialIcons />
        </div>
    </footer>
  );
}

export default Footer