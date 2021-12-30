import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Banner from '../Banner/Banner';
import './Home.css'
import Font from 'react-font';
import Products from '../Products/Products';


const Home = () => {

    return (
        <div style={{ backgroundColor: "#f1f2f4", marginBottom: "15px", paddingBottom: 20 }}>
            <Banner></Banner>
            <Products></Products>

        </div>
    );
};

export default Home;