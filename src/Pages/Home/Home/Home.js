import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Banner from '../Banner/Banner';
import Whirligig from 'react-whirligig'
import './Home.css'
import Font from 'react-font';
import { Rating } from '@mui/material';


const Home = () => {
    const [novels, setNovels] = useState([]);
    const [educations, setEducations] = useState([]);
    const [islamic, setIslamic] = useState([]);
    const url = 'https://raw.githubusercontent.com/Fahim-BAUST/json-files/main/book.json';

    // let whirligig
    // const next = () => whirligig.next()
    // const prev = () => whirligig.prev()

    // load books data and set data to books
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {

                const novels = data.filter(data => data.subCatagory === 'uponnash')
                setNovels(novels);
                const educations = data.filter(data => data.subCatagory === 'education')
                setEducations(educations);
                const islamic = data.filter(data => data.subCatagory === 'islamic')
                setIslamic(islamic);
            })

    }, [])

    return (
        <div style={{ backgroundColor: "#f1f2f4", marginBottom: "15px", paddingBottom: 20 }}>
            <Banner></Banner>


            <div className="mt-5 container bg-white p-3 shadow" style={{ borderRadius: "20px" }}>

                <Font family="Griffy"><h2 className="mx-3 my-4" style={{ color: "#25383C" }}>NOVELS</h2></Font>

                <Whirligig
                    visibleSlides={3}
                    gutter="1em"

                // ref={(_whirligigInstance) => { whirligig = _whirligigInstance }}
                >
                    {
                        novels.map(book => <div>
                            <div className="card  text-center">
                                <div className="card-body">
                                    <img src={book.image} className="
                                     img-fluid text-center" alt="..." />
                                    <p className="fw-bold mt-2">{book.bookName.slice(0, 30)}...</p>
                                    <Rating name="read-only" value={book.rating} readOnly />

                                    <Font family="Henny Penny">
                                        <p className="card-text fw-bold mt-3">{book.cost} TK</p>
                                    </Font>
                                    <button className="btn-sm btn btn-outline-warning fw-bold">Add to cart</button> <br />
                                    <button type="button" className="mt-2 btn btn-sm btn-danger fw-bold">Details</button>

                                </div>
                            </div>
                        </div>)

                    }
                </Whirligig>
                {/* <div className="d-flex justify-content-between">
                    <button onClick={prev}>Prev</button> <button onClick={next}>Next</button>
                </div> */}

            </div>


            <div className="mt-5 container bg-white p-3 shadow" style={{ borderRadius: "20px" }}>
                <Font family="Griffy"><h2 className="mx-3 my-4" style={{ color: "#25383C" }}>EDUCATIONAL</h2></Font>

                <Whirligig
                    visibleSlides={3}
                    gutter="1em"

                // ref={(_whirligigInstance) => { whirligig = _whirligigInstance }}
                >
                    {
                        educations.map(book => <div>
                            <div className="card  text-center">
                                <div className="card-body">
                                    <img src={book.image} className="
                                     img-fluid text-center" alt="..." />
                                    <p className="fw-bold mt-2">{book.bookName.slice(0, 30)}...</p>
                                    <Rating name="read-only" value={book.rating} readOnly />

                                    <Font family="Henny Penny">
                                        <p className="card-text fw-bold mt-3">{book.cost} TK</p>
                                    </Font>
                                    <button className="btn-sm btn btn-outline-warning fw-bold">Add to cart</button> <br />
                                    <button type="button" className="mt-2 btn btn-sm btn-danger fw-bold">Details</button>

                                </div>
                            </div>
                        </div>)

                    }
                </Whirligig>
                {/* <div className="d-flex justify-content-between">
                    <button onClick={prev}>Prev</button> <button onClick={next}>Next</button>
                </div> */}

            </div>

            <div className="mt-5 container bg-white p-3 mb-4 shadow" style={{ borderRadius: "20px" }}>
                <Font family="Griffy"><h2 className="mx-3 my-4" style={{ color: "#25383C" }}>ISLAMIC</h2></Font>

                <Whirligig
                    visibleSlides={3}
                    gutter="1em"

                // ref={(_whirligigInstance) => { whirligig = _whirligigInstance }}
                >
                    {
                        islamic.map(book => <div>
                            <div className="card  text-center">
                                <div className="card-body">
                                    <img src={book.image} className="
                                     img-fluid text-center" alt="..." />
                                    <p className="fw-bold mt-2">{book.bookName.slice(0, 30)}...</p>
                                    <Rating name="read-only" value={book.rating} readOnly />

                                    <Font family="Henny Penny">
                                        <p className="card-text fw-bold mt-3">{book.cost} TK</p>
                                    </Font>
                                    <button className="btn-sm btn btn-outline-warning fw-bold">Add to cart</button> <br />
                                    <button type="button" className="mt-2 btn btn-sm btn-danger fw-bold">Details</button>

                                </div>
                            </div>
                        </div>)

                    }
                </Whirligig>
                {/* <div className="d-flex justify-content-between">
                    <button onClick={prev}>Prev</button> <button onClick={next}>Next</button>
                </div> */}

            </div>



        </div>
    );
};

export default Home;