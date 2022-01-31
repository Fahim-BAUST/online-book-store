import { Rating } from '@mui/material';
import React from 'react';

const Reviews = (props) => {
    const { name, message, rating } = props.review;
    return (
        <div className="card rounded-circle" style={{ width: "18rem", boxShadow: "10px 5px 5px gray" }}>
            <div class="card-body text-center ">
                <h5 class="card-title">{name}</h5>

                <p class="card-text">{message?.slice(0, 150)}..</p>
                <Rating className="rating" name="half-rating-read rating" value={rating} precision={0.5} readOnly />

            </div>
        </div>

    );
};

export default Reviews;