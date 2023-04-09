import React from 'react';
import './Numbers.css';

const Numbers = () => {
  return (
    <div className='numbers-main-container'>
      <div className="numbers-main-container-1">
        <h2 className='number-container-h2'>THE NUMBERS ARE GROWING!</h2>
      </div>
      <div className="numbers-main-container-2">
        <div className="numbers-main-container-2-1">
            <p>CUSTOMERS</p>
            <h1 className='number-container-h1'>36 M</h1>
            <p>redBus is trusted by over 36 
                million happy customers globally
            </p>
        </div>
        <div className="numbers-main-container-2-1">
            <p>OPERATORS</p>
            <h1 className='number-container-h1'>3500</h1>
            <p>network of over 3500 bus operators worldwide
            </p>
        </div>
        <div className="numbers-main-container-2-1">
            <p>BUS TICKETS</p>
            <h1 className='number-container-h1'>220+ M</h1>
            <p>Over 220 million trips booked using redBus
            </p>
        </div>
      </div>
    </div>
  )
}

export default Numbers
