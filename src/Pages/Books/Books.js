import { Divider, Grid, Menu, MenuItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Book from './Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data)
                setDisplayProducts(data)
            })
    }, [])

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = books.filter(product => product.bookName.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }

    const handleCategory = (category) => {
        const matchedProducts = books.filter(product => product?.subCatagory.toLowerCase().includes(category.toLowerCase()));

        setDisplayProducts(matchedProducts);

    }

    return (
        <div>
            <Typography className="service-name" sx={{ textAlign: "center", pt: 3, fontWeight: 800, marginTop: 2, marginBottom: 5, color: "#03e12", fontSize: "60px", fontFamily: "cursive" }} variant="h3">All Books</Typography>

            <div className="input-group mb-4 container search-item ">
                <input type="text" className="form-control shadow-lg text-center" onChange={handleSearch}
                    placeholder="Search Product" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{ border: "1px solid #3F000F" }} />
            </div>
            <center>
                <div className="btn-group">
                    <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Category
                    </button>
                    <ul className="dropdown-menu">
                        <li><button onClick={() => handleCategory('islamic')} className="dropdown-item" >Islamic</button></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><button onClick={() => handleCategory('uponnash')} className="dropdown-item" >Novel</button></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><button onClick={() => handleCategory('education')} className="dropdown-item" >Education</button></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><button onClick={() => handleCategory('Programming')} className="dropdown-item" >Programming</button></li>
                    </ul>
                </div>
            </center>
            <Box className="container" sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                    {
                        displayProducts.map(book => <Grid
                            className="grid-responsive" item xs={12} sm={4} md={4} >
                            <Book book={book}></Book>
                        </Grid>)
                    }

                </Grid>
            </Box>


        </div>
    );
};

export default Books;

