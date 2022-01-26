import React from 'react';
import './Features.css';
import img1 from './img/asdade.PNG'
import img2 from './img/100e.PNG'
import img3 from './img/upcomming.PNG'
import img4 from './img/books.PNG'
import img5 from './img/author.PNG'
const Features = () => {
    return (
        <div className='pt-5' >
            <h3 className='text-center'>Features</h3>
            <div className='container-fluid shadow '>
            <div className="row ">
                <div className="col text-center">
                <img className='pt-3' src={img1} alt="" />
                <p>Customer Reviews</p>
                </div>
                <div className="col text-center">
                <img className='pt-4' src={img2} alt="" />
                <p>100 Must Reads</p>
                </div>
                <div className="col text-center">
                <img className='pt-3' src={img3} alt="" />
                <p>Upcoming Releases</p>
                </div>
                <div className="col text-center">
                <img className='pt-4' src={img4} alt="" />
                <p>Textbooks</p>
                </div>
                <div className="col text-center">
                <img className='pt-3' src={img5} alt="" />
                <p>Author Recommended</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Features;