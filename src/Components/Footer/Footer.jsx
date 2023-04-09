import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-main-container'>
      <div className="footer-main-container-1">
        <h4 className="footer-main-container-1-h4">About redBus</h4>
        <li className="footer-main-container-1-li">About Us</li>
        <li className="footer-main-container-1-li">Contact Us</li>
        <li className="footer-main-container-1-li">Mobile Version</li>
        <li className="footer-main-container-1-li">redBus on Mobile</li>
        <li className="footer-main-container-1-li">Sitemap</li>
        <li className="footer-main-container-1-li">Offers</li>
        <li className="footer-main-container-1-li">Careers</li>
        <li className="footer-main-container-1-li">Values</li>
      </div>
      <div className="footer-main-container-1">
        <h4 className="footer-main-container-1-h4">Info</h4>
        <li className="footer-main-container-1-li">T & C</li>
        <li className="footer-main-container-1-li">Privacy Policy</li>
        <li className="footer-main-container-1-li">FAQ</li>
        <li className="footer-main-container-1-li">Blog</li>
        <li className="footer-main-container-1-li">Bus Operator Registration</li>
        <li className="footer-main-container-1-li">Agent Registeration</li>
        <li className="footer-main-container-1-li">Insurence Partner</li>
        <li className="footer-main-container-1-li">User Agreement</li>
      </div>
      <div className="footer-main-container-1">
        <h4 className="footer-main-container-1-h4">Global Sites</h4>
        <li className="footer-main-container-1-li">India</li>
        <li className="footer-main-container-1-li">Singapore</li>
        <li className="footer-main-container-1-li">Malaysia</li>
        <li className="footer-main-container-1-li">Indonesia</li>
        <li className="footer-main-container-1-li">Peru</li>
        <li className="footer-main-container-1-li">Colombia</li>
      </div>
      <div className="footer-main-container-1">
        <h4 className="footer-main-container-1-h4">Our Partners</h4>
        <li className="footer-main-container-1-li">Goibibo</li>
        <li className="footer-main-container-1-li">MakeMyTrip</li>
        <h4 className="footer-main-container-1-h4">Other Services</h4>
        <li className="footer-main-container-1-li">Train Ticket</li>
        <li className="footer-main-container-1-li">Bus Hire</li>
        <li className="footer-main-container-1-li">Cab Booking</li>
        <li className="footer-main-container-1-li">Tempo Traveller</li>
      </div>
      <div className="footer-main-container-2">
        <img className='footer-main-container-2-img' src="https://static.startuptalky.com/2020/03/redbus-logo.png" alt="logo" height={80}/>
        <p>redBus is the world's largest <b>online bus ticket booking</b> service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website,iOS and Android mobile apps for all major routes.</p>
        <i class="fa-brands fa-facebook footer-main-container-2-logo"></i><i class="fa-brands fa-twitter footer-main-container-2-logo"></i>
        <p>Ⓒ 2023 ibibogroup All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
