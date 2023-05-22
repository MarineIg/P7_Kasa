import React from 'react';
import Banner from '../components/Banner';
import bannerImg from "../assets/about_banner_min.png";

const About = () => {
    return (
        <div>
            <Banner src={bannerImg} className="banner"/>
            <h1>Page a propos</h1>
        </div>
    );
};

export default About;