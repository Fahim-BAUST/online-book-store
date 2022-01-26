import React from 'react';

const CardSlider = () => {
    return (
        <div>
         
            <section class="tips__style">
                <div class="container-fluid">
                    <h1 class="text-center py-5">Favorite Books collection</h1>
                    <div id="carouselExampleCaptions1" class="carousel slide my-3 tips__slider-lg" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active tips__card-container">
                                <div class="row container-fluid mx-auto tips__card-grid">
                                    <div class="col">
                                        <div class=" tips__card shadow text-center">
                                            <img src="https://i.ibb.co/bPFqDzm/Capture4.png" class="card-img-top w-75 " alt="..."/>
                                                <div class=" tips__card-body shadow p-3">
                                                    <h5>ইসলামি অঞ্চল, শাসনব্যবস্থা ও রাজনীতি</h5>
                                                    <p class="text-muted"><small>20 jan 2020</small></p>
                                                </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class=" tips__card shadow text-center">
                                            <img src="https://i.ibb.co/SKNF933/Capture3.png" class="card-img-top w-75 " alt="..."/>
                                                <div class=" tips__card-body shadow p-3">
                                                    <h5>দি রয়েল সায়েন্টিফিক পাবলিকেশন্স (সম্পাদক)</h5>
                                                    <p class="text-muted"><small>20 jan 2020</small></p>
                                                </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="tips__card shadow text-center">
                                            <img src="https://i.ibb.co/5YGD9Xd/Capture2.png" class="card-img-top w-75 " alt="..."/>
                                                <div class=" tips__card-body shadow p-3">
                                                    <h5>প্রোডাক্টিভ মুসলিম</h5>
                                                    <p class="text-muted"><small>20 jan 2020</small></p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           <div class="carousel-item tips__card-container">
                                <div class="row container-fluid mx-auto tips__card-grid">
                                    <div class="col">
                                        <div class=" tips__card shadow text-center">
                                            <img src="https://i.ibb.co/jG9HV9q/Capture.png" class="card-img-top w-75 " alt="..."/>
                                                <div class=" tips__card-body shadow p-3">
                                                    <h5>ইসলামি আদর্শ  ও মতবাদ</h5>
                                                    <p class="text-muted"><small>20 jan 2020</small></p>
                                                </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class=" tips__card shadow text-center">
                                            <img src="https://i.ibb.co/XsTtQxS/image.png" class="card-img-top w-75 " alt="..."/>
                                                <div class=" tips__card-body shadow p-3">
                                                    <h5>বাংলা ব্যাকরণ (স্পেশাল সাপ্লিমেন্ট) (একাদশ-দ্বাদশ শ্রেণি ও এইচএসসি ২০২২)</h5>
                                                    <p class="text-muted"><small>20 jan 2020</small></p>
                                                </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="tips__card shadow text-center">
                                            <img src="https://i.ibb.co/XpJH00y/image.png" class="card-img-top w-75 " alt="..."/>
                                                <div class=" tips__card-body shadow p-3">
                                                    <h5>সমকালীন উপন্যাস</h5>
                                                    <p class="text-muted"><small>20 jan 2020</small></p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item tips__card-container">
                                <div class="row container-fluid mx-auto tips__card-grid">
                                    <div class="col">
                                        <div class=" tips__card shadow text-center">
                                            <img src="https://i.ibb.co/gRZWn7q/image.png" class="card-img-top w-75 " alt="..."/>
                                                <div class=" tips__card-body shadow p-3">
                                                    <h5>নারীরণ্য</h5>
                                                    <p class="text-muted"><small>20 jan 2020</small></p>
                                                </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class=" tips__card shadow text-center">
                                            <img src="https://i.ibb.co/vLXw0QL/image.png" class="card-img-top w-75 " alt="..."/>
                                                <div class=" tips__card-body shadow p-3">
                                                    <h5>সীরাতে রাসুল ﷺ</h5>
                                                    <p class="text-muted"><small>20 jan 2020</small></p>
                                                </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="tips__card shadow text-center">
                                            <img src="https://i.ibb.co/GkhnFXv/image.png" class="card-img-top w-75 " alt="..."/>
                                                <div class=" tips__card-body shadow p-3">
                                                    <h5>ট্যাক্স রিটার্ন প্রিপারেশন কমপ্লিট গাইড ২০২১</h5>
                                                    <p class="text-muted"><small>20 jan 2020</small></p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev carousel__next-btn " type="button"
                            data-bs-target="#carouselExampleCaptions1" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon carousel__next-btn-icon" aria-hidden="true"><svg width="9"
                                height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.99992 1L0.999924 8L7.99992 15" stroke="#E89F71" stroke-width="1.8"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next carousel__next-btn " type="button"
                            data-bs-target="#carouselExampleCaptions1" data-bs-slide="next">
                            <span class="carousel-control-next-icon carousel__next-btn-icon" aria-hidden="true"><svg width="9"
                                height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.00012 1L8.00012 8L1.00012 15" stroke="#E89F71" stroke-width="1.8"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                
                    <div class=" tips__slider-btn container container-fluid mx-auto text-center">
                        <span class="slider__btn-hover"><button type="button" data-bs-target="#carouselExampleCaptions1"
                            data-bs-slide-to="0" class="active slider__btn-style" aria-current="true"
                            aria-label="Slide 1"></button></span>
                        <span class="slider__btn-hover"><button type="button" data-bs-target="#carouselExampleCaptions1"
                            data-bs-slide-to="1" aria-label="Slide 2" class=" slider__btn-style"></button></span>
                        <span class="slider__btn-hover"> <button type="button" data-bs-target="#carouselExampleCaptions1"
                            data-bs-slide-to="2" aria-label="Slide 3" class=" slider__btn-style"></button></span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CardSlider;