import React from 'react'
import footerlogo from '../Assets/asset 23.png'
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <section className='footer-section pt-4'>
      <div className="footerAll p-5">
        <div className="footer-first">
          <img src={footerlogo} alt="" />
        </div>
        <div className="footer-second">
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-third">
        <ul>
            <li title='Android App Development'>Android App Development</li>
            <li title='iOS App Development'>iOS App Development</li>
            <li title='Website Development'>Website Development</li>
            <li title='React Native Application'>React Native Application</li>
            <li title='UI/UX Design'>UI/UX Design</li>
            <li title='Digital Marketing'>Digital Marketing</li>
            <li title='Dedicated Developers'>Dedicated Developers</li>
            <li title='ECommerce Development'>ECommerce Development</li>
          </ul>
        </div>
        <div className="footer-forth">
          <div className="social-handler">
            <a href="facebbok"><i className="fa-brands fa-facebook"></i></a>
            <a href="facebbok"><i className="fa-brands fa-square-instagram"></i></a>
            <a href="facebbok"><i className="fa-brands fa-linkedin"></i></a>
          </div>
          <p>Copyright © 2023 Digitlay
            All Rights Reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
