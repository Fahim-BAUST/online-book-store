import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import Book from './Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {

        fetch('./book.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <Typography className="service-name" sx={{ textAlign: "center", pt: 3, fontWeight: 800, marginTop: 2, marginBottom: 5, color: "#03e12", fontSize: "60px", fontFamily: "cursive" }} variant="h3">All Books</Typography>
            <Box className="container" sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                    {
                        books.map(book => <Grid
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

