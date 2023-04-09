import React from 'react';
import './Awards.css';

const Awards = () => {
    return (
        <div className='awards-main-container'>
            <div className="awards-main-container-1">
                <h1>Awards & Recognition</h1>
            </div>
            <div className="awards-main-container-2">
                <div className="business-standard">
                    <img src="https://s2.rdbuz.com/web/images/home/awards/Business_Standard1.png" alt="Buisness Standard" />
                    <p>Most Innovative Company</p>
                </div>
                <div className="business-standard">
                    <img src="https://s1.rdbuz.com/web/images/home/awards/Brand_Trust_Report.png" alt="Brand Trust Report Img" />
                    <p>Most Trusted Brand</p>
                </div>
                <div className="business-standard">
                    <img src="https://s3.rdbuz.com/web/images/home/awards/Eye_for_Travel1.png" alt="Eye For Travel" />
                    <p>Most Innovation Award</p>
                </div>
            </div>

        </div>
    )
}

export default Awards
