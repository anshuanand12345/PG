import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className='footer'>

                <div className='details'>
                    <Link style={{ textDecoration: 'none' }} to="/about">
                    <div className='about'>
                        <h1> About Us </h1>
                        <h2> How it works </h2>
                        <h2> Testimonials </h2>
                        <h2> Sales </h2>
                        <h2> Terms and Condition </h2>
                    </div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/contact">
                    <div className='about'>
                        <h1> Contact Us </h1>
                        <h2> Contact </h2>
                        <h2> Support </h2>
                        <h2> Destination </h2>
                        <h2> Sponsorship </h2>
                    </div>
                    </Link>
                    <div className='about'>
                        <h1> Our Videoes </h1>
                        <h2> Submit video </h2>
                        <h2> Ambassdor</h2>
                        <h2> Agency </h2>
                        <h2> Influencer </h2>
                    </div>
                    <div className='about'>
                        <h1> Socialmedia </h1>
                        <h2> Instagram </h2>
                        <h2> Facebook</h2>
                        <h2> Youtube </h2>
                        <h2> Twitter </h2>
                    </div>
                </div>
                <div className='down'>
                    <FacebookIcon className='one' id='base' />
                    <InstagramIcon className='two' id='base' />
                    <WhatsAppIcon className='three' id='base' />
                    <YouTubeIcon className='four' id='base' />

                </div>
            </div>
        </>
    );
};

export default Footer;