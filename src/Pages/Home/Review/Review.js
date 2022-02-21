import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Slider from 'react-slick';
import Reviews from './Reviews';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message === "Failed to fetch" ? "No network connection" : error.message}`,
                })
            })

    }, []);


    const set = { rtl: true };
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 15000,
        autoplaySpeed: 15000,
        cssEase: "linear",
        initialSlide: 0,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    return (
        <div>
            <h1 className="text-center p-3">User Reviews</h1>
            <div>
                <Slider {...settings}{...set}>
                    {
                        users.map(review => <Reviews
                            review={review} key={review?._id}
                        ></Reviews>

                        )

                    }
                </Slider >

            </div>


        </div>
    );
};

export default Review;