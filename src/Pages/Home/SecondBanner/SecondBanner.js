import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SecondBanner.css';
const SecondBanner = () => {
    const navigate = useNavigate()
    return (
        <div>
            <section>
                <div class="product__slider  pt-3 shadow">
                    <div class="product__slider-flex ">
                        <div class=" container-fluid">
                            <div class="product__slider-left">
                                <h1>50+ Beautiful Books inspiration</h1>
                                <p>Our beautiful books that inspire you.......</p>
                                <button onClick={() => navigate('/books')} class="product__slider-btn">Explore More</button>
                            </div>
                        </div>
                        <div class="container-fluid product__slider-display">
                            <div id="carouselExampleCaption" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="row product__slider-img-container">
                                            <div class="col">
                                                <img src="https://i.ibb.co/kqjYpvH/HSC.png" class="d-block product__slider-primary-img "
                                                    alt="..." />
                                            </div>
                                            <div class="col">
                                                <img src="https://i.ibb.co/mTHzj5J/Learn-English-Very-Easily.png" class="d-block product__slider-secondary-img"
                                                    alt="..." />
                                            </div>
                                            <div class="col">
                                                <img src="https://i.ibb.co/PFFKHj2/image.png" class="d-block product__slider-third-img"
                                                    alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row product__slider-img-container">
                                            <div class="col">
                                                <img src="https://i.ibb.co/gvFykQ5/image.png" class="d-block product__slider-primary-img "
                                                    alt="..." />
                                            </div>
                                            <div class="col">
                                                <img src="https://i.ibb.co/GkhnFXv/image.png" class="d-block product__slider-secondary-img"
                                                    alt="..." />
                                            </div>
                                            <div class="col">
                                                <img src="https://i.ibb.co/vLXw0QL/image.png" class="d-block product__slider-third-img"
                                                    alt="..." />
                                            </div>
                                        </div>

                                    </div>
                                    <div class="carousel-item">
                                        <div class="row product__slider-img-container">
                                            <div class="col">
                                                <img src="https://i.ibb.co/gRZWn7q/image.png" class="d-block product__slider-primary-img "
                                                    alt="..." />
                                            </div>
                                            <div class="col">
                                                <img src="https://i.ibb.co/XpJH00y/image.png" class="d-block product__slider-secondary-img"
                                                    alt="..." />
                                            </div>
                                            <div class="col">
                                                <img src="https://i.ibb.co/XsTtQxS/image.png" class="d-block product__slider-third-img"
                                                    alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-next carousel__next-btn " type="button"
                                    data-bs-target="#carouselExampleCaption" data-bs-slide="next">
                                    <span class="carousel-control-next-icon carousel__next-btn-icon" aria-hidden="true"><svg
                                        width="9" height="16" viewBox="0 0 9 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.00012 1L8.00012 8L1.00012 15" stroke="#E89F71" stroke-width="1.8"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    </span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>

                            <div class=" product__slider-secondary-btn  text-center">
                                <span class="slider__btn-hover"><button type="button" data-bs-target="#carouselExampleCaption"
                                    data-bs-slide-to="0" class="active slider__btn-style" aria-current="true"
                                    aria-label="Slide 1"></button></span>
                                <span class="slider__btn-hover"><button type="button" data-bs-target="#carouselExampleCaption"
                                    data-bs-slide-to="1" aria-label="Slide 2" class=" slider__btn-style"></button></span>
                                <span class="slider__btn-hover"> <button type="button" data-bs-target="#carouselExampleCaption"
                                    data-bs-slide-to="2" aria-label="Slide 3" class=" slider__btn-style"></button></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SecondBanner;