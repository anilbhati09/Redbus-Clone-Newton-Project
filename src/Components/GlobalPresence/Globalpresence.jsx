import React from 'react';
import './Globalpresence.css';

const Globalpresence = () => {
  return (

    <div className='globalpresence-main-container'>
      <div className="globalpresence-main-container-1">
        <h2>OUR GLOBAL PRESENCE</h2>
      </div>
      <div className="globalpresence-main-container-flex">
        <div className="globalpresence-main-container-2">
          <div className="colombia-country">
            <img src="https://flagpedia.net/data/flags/w580/co.webp" alt="colombia" height={80} />
            <h4>COLOMBIA</h4>
          </div>
          <div className="colombia-country">
            <img src="https://flagpedia.net/data/flags/w580/id.png" alt="INDONESIA" height={80} />
            <h4>INDONESIA</h4>
          </div>
        </div>
        <div className="globalpresence-main-container-3">
        <div className="colombia-country">
            <img src="https://flagpedia.net/data/flags/w580/in.webp" alt="india" height={80} />
            <h4>India</h4>
          </div>
          
          <div className="colombia-country">
            <img src="https://flagpedia.net/data/flags/w580/my.webp" alt="malaysia" height={80} />
            <h4>MALAYSIA</h4>
          </div>
        </div>
        <div className="globalpresence-main-container-4">
          <div className="colombia-country">
            <img src="https://flagpedia.net/data/flags/w580/pe.png" alt="peru" height={80} />
            <h4>PERU</h4>
          </div>
          <div className="colombia-country">
            <img src="https://flagpedia.net/data/flags/w580/sg.webp" alt="singapore" height={80} />
            <h4>SINGAPORE</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Globalpresence
