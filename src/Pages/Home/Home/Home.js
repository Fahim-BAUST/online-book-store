import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Banner from '../Banner/Banner';
import './Home.css'
import Font from 'react-font';


const Home = () => {
    const [novels, setNovels] = useState([]);
    const [educations, setEducations] = useState([]);
    const [islamic, setIslamic] = useState([]);
    const url = './book.json';

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


        </div>
    );
};

export default Home;