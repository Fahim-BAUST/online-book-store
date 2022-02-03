import React from 'react';
import './Features.css';
import img1 from './img/awdwad.PNG'
import img2 from './img/awdad.PNG'
import img3 from './img/ertrgv.PNG'
import img4 from './img/dawdawd.PNG'

const Features = () => {
    return (
        <div className='pt-5' >
            
            <div className='container-fluid shadow '>
            <div className="row ">
                <div className="col text-center">
                <img className='pt-3' src={img1} alt="" />
                <p>Free Delivery</p>
                </div>
                <div className="col text-center">
                <img className='pt-4' src={img2} alt="" />
                <p>5 Days Return</p>
                </div>
                <div className="col text-center">
                <img className='pt-3' src={img3} alt="" />
                <p>Secure Payment</p>
                </div>
                <div className="col text-center">
                <img className='pt-4' src={img4} alt="" />
                <p>24/7 Support</p>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Features;