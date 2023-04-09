import React from 'react'
import './Features.css';

const Features = () => {
    return (
        <div className='features-main-container'>
            <div className="features-main-container-1">
                <h2 className='features-main-container-1-h2'>CONVENIENCE ON-THE-GO.</h2><br /><br />
                <p>
                    Enjoy the following exclusive features on the redBus app <br /><br />
                    Last Minute Booking - In a hurry to book a bus at the last minute? Choose the bus passing from your nearest boarding point and book in a few easy steps.<br /><br />
                    Boarding Point Navigation - Never lose your way while travelling to your boarding point!<br /><br />
                    Comprehensive Ticket Details- Everything that you need to make the travel hassle free - rest stop details, boarding point images, chat with co-passengers, wake-up alarm and much more!<br /><br />
                    Enter your mobile number below to download the redBus mobile app.   <br /><br />
                </p>
                <select className='input-number' name="phone no." id="phone-no.">
                    <option>91</option>
                    <option>1</option>
                    <option>2</option>
                    <option>33</option>
                    <option>55</option>
                </select>
                <input type="text" className='input-number' placeholder='Enter your mobile no.'/><br />
                <button className='send-me-link-btn'>SEND ME THE LINK</button><br />
                <i class="fa-brands fa-google-play download-store-logo"></i>
                <i class="fa-brands fa-apple download-store-logo"></i>
            </div>
            <div className="features-main-container-2">
                <img className='features-main-container-2-img' src="https://s1.rdbuz.com/web/images/home/IOS_Android_device.png" alt="mobile-logo" />
            </div>
        </div>
    )
}

export default Features
