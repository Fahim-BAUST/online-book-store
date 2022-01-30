import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

const Review = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://morning-peak-49686.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, []);
    return (
        <div>
            <h1 className="text-center p-3">User Reviews</h1>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner ">
                    <div class="carousel-item active" style={{ height: '350px' }} >
                        <div class="card mx-auto shadow" style={{ width: '30rem', height: '200px', marginTop: '80px' }}>
                            <div class="card-body text-center">
                                <h5 class="card-title">XXXXXX</h5>
                                <p style={{ textAlign: "center", color: "rgba(255, 127, 80, 0.89)" }}>
                                    <small ><Rating
                                        initialRating={'5'}
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                        readonly></Rating></small>
                                </p>
                                <p class="card-text">Not Bad </p>
                            </div>
                        </div>

                    </div>
                    {
                        users?.map(user => <div class="carousel-item " style={{ height: '350px' }}>
                            <div class="card mx-auto shadow" style={{ width: '30rem', height: '200px', marginTop: '80px' }}>
                                <div class="card-body text-center">
                                    <h5 class="card-title">{user?.name}</h5>
                                    <p style={{ textAlign: "center", color: "rgba(255, 127, 80, 0.89)" }}>
                                        <small ><Rating
                                            initialRating={user?.rating}
                                            emptySymbol="far fa-star"
                                            fullSymbol="fas fa-star"
                                            readonly></Rating></small>
                                    </p>
                                    <p class="card-text">{user?.review}</p>
                                </div>
                            </div>
                        </div>)
                    }


                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Review;