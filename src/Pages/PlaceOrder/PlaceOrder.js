import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link, useParams } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './PlaceOrder.css';
import { Table } from 'react-bootstrap';
const PlaceOrder = () => {
    // fetching books from json 
    const { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({})
    const [key, setKey] = useState('home');
    useEffect(() => {
        fetch('/book.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])
    useEffect(() => {
        const foundDetails = serviceDetails.find(detail => detail.id == serviceId)
        setSingleService(foundDetails)
    }, [serviceDetails])

    return (
        <div>
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
                    <Link to={`/shipping/${singleService?.id}`}>
                        <button>Buy Now</button>
                    </Link>
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
                            <Table  striped bordered hover>
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
        </div>

    );
};

export default PlaceOrder;