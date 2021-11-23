import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';;

const Book = (props) => {
    const { image, bookName, offer, author, category, cost } = props.book
    return (
        <div>
            <Card className="service-card" style={{ borderLeft: "3px solid #c29d59" }}>
                {offer && <Typography style={{ position: "absolute", padding: "2px 30px 2px 0 ", marginTop: 15, color: "white", backgroundColor: "#c29d59" }} gutterBottom variant="h5" component="div">
                    {offer}% OFF
                </Typography>}

                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {bookName.slice(0, 20)}...
                    </Typography>
                    <Typography color="text.secondary" gutterBottom variant="body2" component="div">
                        <span className="fw-bold">Author : </span>
                        {author}
                    </Typography>

                    <Typography color="text.secondary" gutterBottom variant="body2" component="div">
                        <span className="fw-bold">Category : </span>
                        {category}
                    </Typography>


                </CardContent>

                <div className="d-flex justify-content-between container">
                    <Typography
                        style={{ fontFamily: "cursive" }}
                        className="fw-bold " variant="h5" >
                        <span className="fw-bold mt-3">TK {cost} </span>
                    </Typography>
                    <NavLink className="text-decoration-none" to={`/placeOrder/id`}>
                        <Button style={{ color: "white", backgroundColor: "#c29d59" }} sx={{ paddingX: 2, marginLeft: 2, marginBottom: 2, fontWeight: "bold" }} variant="contained" size="small"><i className="fas fa-luggage-cart me-2"></i> add to cart </Button>
                    </NavLink>
                </div>


            </Card>

        </div>
    );
};

export default Book;