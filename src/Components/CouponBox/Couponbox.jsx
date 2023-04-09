import React from 'react'
import './Couponbox.css';

const Couponbox = () => {
  return (
    <div className='main-couponbox'>
        <div className="main-couponbox-1">
        <div className="main-couponbox-1-img">
            <img src="https://st.redbus.in/Images/RHSS/2022/hero/100x100.png" alt="promo-logo" />
        </div>
        <div className="main-couponbox-1-text">
            <h3>SAVE UPTO RS 250* ON YOUR BUS TICKETS.</h3>
            <p>Book your favourite seat now.</p>
        </div>

        </div>
        <div className="main-couponbox-2">
            <div className="main-couponbox-2-container-1">
                <p>Save upto ₹300 on AP and TS routes</p>
                <img src="https://st.redbus.in/images/offers/superhit_rav/1_1.png" alt="offer-1" />
                <p>Use code SUPERHIT</p>
            </div>
            <div className="main-couponbox-2-container-2"><p>Save upto ₹200 on Delhi and North routes</p>
                <img src="https://st.redbus.in/Images/INDOFFER/RB200/274x148.png" alt="offer-2" />
                <p>Use code RB200</p></div>
        </div>
    </div>
  )
}

export default Couponbox
