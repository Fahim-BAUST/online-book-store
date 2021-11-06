import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css'



const Home = () => {


    return (
        <div style={{ backgroundColor: "#f1f2f4", marginBottom: "15px", paddingBottom: 20 }}>

            {/* ekhane banner.js ke call kore dekhano hoise */}
            <Banner></Banner>

        </div>
    );
};

export default Home;