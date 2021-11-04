import React from 'react';
import 'animate.css';

const Banner = () => {
    return (
        <div>
            <h1 className="mt-2  fw-bold text-center site-name" style={{
                color: "#03e12", fontSize: "60px", fontFamily: "cursive"
            }}>BookStore 103</h1>
            <div id="carouselExampleCaptions" className="carousel slide carousel-dark" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active  " data-bs-interval="2000">
                        <img src="https://i.ibb.co/n3zbMLC/img1.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item " data-bs-interval="2000">
                        <img src="https://i.ibb.co/svXXZps/img2.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item " data-bs-interval="2000">
                        <img src="https://i.ibb.co/3dtPngj/img3.png " className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item " data-bs-interval="2000">
                        <img src="https://i.ibb.co/8dCxrnG/img4.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
};

export default Banner;