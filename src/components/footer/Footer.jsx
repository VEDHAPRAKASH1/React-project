import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-contact">
        <p>Phone no. : 1234567890</p>
        <p>Email : bookabook@gmail.com</p>
      </div>
      <div className="footer-content">
        <h3>Book a Book</h3>
        <p>Vedhaprakash Guptha © 2023</p>
      </div>
      <div className="footer-icons">
        <Link><InstagramIcon className='footer-button'/></Link>
        <Link><YouTubeIcon className='footer-button'/></Link>        
        <Link><TwitterIcon className='footer-button'/></Link>        
        <Link><FacebookIcon className='footer-button'/></Link>
      </div>
    </div>
  )
}

export default Footer