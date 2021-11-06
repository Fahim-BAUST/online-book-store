import React from 'react';
import 'animate.css';
import Font, { Text } from 'react-font'

const Banner = () => {
    return (
        <div>
            <Font family="Dancing Script">


                <h1 className="mt-4 pt-4 mb-5 fw-bold text-center site-name animate__animated animate__backInDown" style={{
                    color: "#25383C", fontSize: "60px"
                }}>BookStore 103</h1></Font>

            {/* ekhane bootsrap er carrousol thekeniye edit kora  */}

            <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active  " data-bs-interval="2000">
                        <img src="https://i.ibb.co/sCf32nx/img1.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item " data-bs-interval="2000">
                        <img src="https://i.ibb.co/n0C0F2Z/img1-1.png" className="d-block w-100" alt="..." />
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