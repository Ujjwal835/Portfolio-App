import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'



const Footer = () => {
  return (
    <footer>
      
      <a href="#" className='footer__logo'> JINDAL6769</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">AboutHome</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact" >Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/ujjwal.jindal.509" target='_blank' rel="noreferrer"><FaFacebookF/></a>
        <a href="https://www.instagram.com/ujjwal_jindal_69/" target='_blank' rel="noreferrer"><FiInstagram/></a>
        <a href="https://twitter.com/ujjwal6769" target='_blank' rel="noreferrer"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jindal Learning. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer