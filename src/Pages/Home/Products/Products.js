import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './products.css';
const Products = () => {
    // fetching(getting) books from json file 
    // aiekhane json file theke book gulo k fetch kore nie asha hoice and 'products' a set kora hoice .
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/book.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);
    return (
        <div className="text-center">
        <h1 className='pt-5'>Our Products</h1>
        {/* <h4 style={{ textAlign: "start", padding: "10px" }}></h4> */}
        {/* card gulo row r column use kore dekhano hocce(small device,medium device and learge device)  */}
        <div className=' row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 m-0 container-fluid'>
            {/* prottekta card k alada kore dekhano hocce */}
            {
                products?.slice(0, 5).map(product => <div
                    key={product?.key}
                    className='customcard shadow'
                >    <img style={{ height: "200px" }} className='w-50%' src={product?.image} alt="" />
                    <h5 style={{ textAlign: "start" }}>{product?.bookName.slice(0, 20)}...</h5>
                    <p style={{ textAlign: "start" }}>{product?.details.slice(0, 30)}...</p>
                    <p style={{ textAlign: "start",color:"rgba(255, 127, 80, 0.89)" }}>
                        <small ><Rating
                            initialRating={product?.rating}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly></Rating></small>
                    </p>
                    <p style={{ textAlign: "start" }}>৳ {product?.cost}</p>
                    <Link to={`/placeOrder/${product?.id}`}>
                        <button>Buy Now</button>
                    </Link>
                </div>)
            }
        </div>
        <div className=' row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 m-0 container-fluid'>

        {
                products?.slice(5, 10).map(product => <div
                    key={product?.key}
                    className='customcard shadow'
                >    <img style={{ height: "200px" }} className='w-50%' src={product?.image} alt="" />
                    <h5 style={{ textAlign: "start" }}>{product?.bookName.slice(0, 20)}...</h5>
                    <p style={{ textAlign: "start" }}>{product?.details.slice(0, 30)}...</p>
                    <p style={{ textAlign: "start",color:"rgba(255, 127, 80, 0.89)" }}>
                        <small ><Rating
                            initialRating={product?.rating}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly></Rating></small>
                    </p>
                    <p style={{ textAlign: "start" }}>৳ {product?.cost}</p>
                    <Link to={`/placeOrder/${product?.id}`}>
                        <button>Buy Now</button>
                    </Link>
                </div>)
            }
        </div>
    </div>
    );
};

export default Products;