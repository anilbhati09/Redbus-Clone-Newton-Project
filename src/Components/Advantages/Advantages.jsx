import React from 'react';
import './Advantages.css';

const Advantages = () => {
  return (
    <div className='advantages-main-container'>
        <div className="advantages-container-1">
      <img src="https://s1.rdbuz.com/web/images/home/promise.png" alt="advantages-img" />
      <h1>WE PROMISE TO DELIVER</h1>
      </div>
      <div className="advantages-container-2">
        <div className="unlimatched-benefits">
            <img src="https://s2.rdbuz.com/web/images/home/benefits.png" alt="unlimatched-benefits" />
            <h4>UNMATCHED BENEFITS</h4>
            <p>We take care of your travel beyond ticketing by providing you with innovative and unique benefits.</p>
        </div>
        <div className="unlimatched-benefits">
            <img src="https://s1.rdbuz.com/web/images/home/customer_care.png" alt="unlimatched-benefits" />
            <h4>SUPERIOR CUSTOMER SERVICE</h4>
            <p>We put our experience and relationships to good use and are available to solve your travel issues.</p>
        </div>
        <div className="unlimatched-benefits">
            <img src="https://s1.rdbuz.com/web/images/home/lowest_Fare.png" alt="unlimatched-benefits" />
            <h4>LOWEST PRICES</h4>
            <p>We always give you the lowest price with the best partner offers.</p>
        </div>
      </div>
    </div>
  )
}

export default Advantages
