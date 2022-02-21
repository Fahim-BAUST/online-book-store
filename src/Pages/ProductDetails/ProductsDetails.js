import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link, useParams } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './PlaceOrder.css';
import { Table } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import { Alert, Snackbar } from '@mui/material';
import AddReview from '../AddReview/AddReview';
const ProductDetails = () => {
    const { user } = useAuth()
    // fetching books from json 
    const { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({})
    const [key, setKey] = useState('home');

    const [open, setOpen] = React.useState(false);
    const [wrong, setWrong] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        setWrong(false);
    };


    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])
    useEffect(() => {
        const foundDetails = serviceDetails.find(detail => detail._id == serviceId)
        setSingleService(foundDetails)
    }, [serviceDetails])

    const [quantity, setQuantity] = useState(1)

    const quantityManage = (value) => {

        if (value === true) {
            const values = quantity + 1;
            setQuantity(values);
        }
        else {
            if (quantity > 1) {
                const values = quantity - 1;
                setQuantity(values);
            }
        }


    }


    const handleAddToCart = () => {
        const data = {};
        data.product = singleService._id;
        data.orderName = singleService.bookName;
        data.price = singleService.cost;
        data.image = singleService.image;
        data.email = user?.email;
        data.quantity = quantity;

        fetch('http://localhost:5000/addToCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setOpen(true);
                } else {

                    setWrong(true);
                }
            })

    }

    return (
        <div>
            {open === true && <Snackbar
                open={open}
                autoHideDuration={1500}
                onClose={handleClose}

            >
                <Alert variant="filled" severity="success">Successfully Done</Alert>

            </Snackbar>}
            {
                wrong === true && <Snackbar
                    open={open}
                    autoHideDuration={1500}
                    onClose={handleClose}

                >

                    <Alert variant="filled" severity="warning">Something Wrong!</Alert>
                </Snackbar>}
            <div className='placeOrder container pt-5'>
                <div className='container text-center'>
                    <img className='img-fluid' src={singleService?.image} alt="" />
                </div>
                <div className='container container1'>
                    <h1>{singleService?.bookName}</h1>
                    <p className='text-start'> Author : {singleService?.author}</p>
                    <p className='text-start' >Review : <Rating
                        style={{ color: "rgba(255, 127, 80, 0.89)" }}
                        initialRating={singleService?.rating}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        readonly></Rating>
                    </p>
                    <p className='text-start'> Price : ৳{singleService?.cost}</p>
                    <p className='text-start'> Category : {singleService?.category}</p>
                    <p className='text-start'> Edition : {singleService?.edition}</p>
                    <p className='text-start'>Description :<p style={{ fontSize: "17px" }}>{singleService?.details}</p></p>
                    <div className='d-flex  align-items-center' >
                        <div>
                            {user?.email ?
                                <button onClick={handleAddToCart} className='btn1'>Add To Cart</button>

                                :
                                <Link to={`/login`}>
                                    <button className='btn1'>Login Please</button>
                                </Link>

                            }
                        </div>
                        <div className="input-group-sm mt-3 ms-4 d-flex justify-content-start align-items-center ">
                            <button onClick={() => quantityManage(false)} className="btn btn-default"><i className="fas fa-minus"></i></button>

                            <input className="text-center fw-bold rounded" disabled type="number" style={{ width: "20%", border: "none", paddingLeft: "15px" }} value={quantity} />


                            <button onClick={() => quantityManage(true)} className="btn btn-default"><i className="fas fa-plus"></i></button>
                        </div>


                    </div>

                </div>
            </div>
            <div>
                <div className='container shadow'>
                    <h3 className='py-3'>Product Specification & Summary</h3>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="Specification">
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td>Title</td>
                                        <td><p>{singleService?.bookName}</p></td>
                                    </tr>
                                    <tr>
                                        <td>Author</td>
                                        <td>{singleService?.author}</td>
                                    </tr>
                                    <tr>
                                        <td>Category</td>
                                        <td>{singleService?.category}</td>
                                    </tr>
                                    <tr>
                                        <td>Edition</td>
                                        <td>{singleService?.edition}</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>৳{singleService?.cost}</td>
                                    </tr>
                                    <tr>
                                        <td>Description</td>
                                        <td>{singleService?.details}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="profile" title="Author">
                            <div className='d-flex align-items-center'>
                                <img src="https://i.ibb.co/419K8K0/Captuawdawdre.png" alt="" />
                                <p>{singleService?.author}</p>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>

            <div>
                <h2 className="mb-3 text-center" style={{ color: "#3F000F" }}>Add Review</h2>
                <AddReview></AddReview>
            </div>
        </div>

    );
};

export default ProductDetails;