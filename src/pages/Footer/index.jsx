import React from 'react'
import './footer.css'

import instagram from '../../assets/Insta.png'
import facebook from '../../assets/Fb.png'
import twitter from '../../assets/twitter.png'
import pinterest from '../../assets/pinterest.png'

function Footer() {
  return (
    <footer className='footer'>
      <h1>Get in Touch with Us</h1>

      <div className='footer-links'>
        <div className="footer-link-col-1">
          <h3>Merchandise</h3>
          <a href="#">T-shirts</a>
          <a href="#">Caps</a>
          <a href="#">Mask</a>
        </div>

        <div className="footer-link-col-2">
          <h3>Franchise</h3>
          <a href="#">Coffee Outlet</a>
          <a href="#">Coffee Vending Machine</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="footer-link-col-3">
          <h3>About Us</h3>
          <a href="#">Promotions</a>
          <a href="#">Customer Care</a>
          <a href="#">Legal Information</a>
          <a href="#">Archievements</a>
          <a href="#">Carrers</a>
        </div>

        <div className="footer-link-col-4">
          <h3>Follow Us</h3>
          <div className='footer-icons'>
            <img src={instagram} alt="Icone instagram" />
            <img src={facebook} alt="Icone do facebook" />
            <img src={twitter} alt="Icone do Twitter" />
            <img src={pinterest} alt="Icone do Pinterest" />

          </div>
        </div>
      </div>

      <div className='footer-2'>
        <h3>
          <span>Filtro</span> All Rights Reserved 
        </h3>
      </div>
    </footer>
  )
}

export default Footer