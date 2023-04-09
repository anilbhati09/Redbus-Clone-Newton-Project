import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='main-container'>
        <div className="first-container">
           <div className="logo-container-navbar first-container-item"><img className='logo-container-navbar-img' src="https://i.pinimg.com/originals/58/91/2b/58912b2e3ad6a279347eebb47751a9c1.png" alt='no-display' height={55}/></div>
            <div className="bus-ticket-navbar first-container-item"><b>Bus Tickets</b></div>
            <div className="ryde-navbar first-container-item">ryde</div>
            <div className="redRail-navbar first-container-item">redRail</div>
        </div>
        <div className="second-container">
            <div className="help-navbar second-container-item">Help</div>
            <div className="manage-booking-navbar second-container-item">Manage Booking <i class="fa-solid fa-angle-down"></i></div>
            <div className="profile-logo-navbar second-container-item"><i class="fa-regular fa-user profile-logo-border"></i> <i class="fa-solid fa-angle-down"></i></div>
        </div>
      
    </div>
  )
}

export default Navbar
