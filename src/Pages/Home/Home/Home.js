import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Banner from '../Banner/Banner';
import './Home.css'
import Font from 'react-font';
import Products from '../Products/Products';
import Features from '../Features/Features';
import SecondBanner from '../SecondBanner/SecondBanner';
import CardSlider from '../CardSlider/CardSlider';


const Home = () => {

    return (
        <div style={{ backgroundColor: "#f1f2f4", marginBottom: "15px", paddingBottom: 20 }}>
            <Banner></Banner>
            <Products></Products>
            <Features></Features>
            <SecondBanner></SecondBanner>
            <CardSlider></CardSlider>
        </div>
    );
};

export default Home;