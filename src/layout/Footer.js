import React from 'react';
import Logo from '../components/Logo';
import logoFooter from "../assets/logoFooter.svg"

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className='footer__container'>
                <Logo src={logoFooter} />
                <p>&copy; {currentYear} Kasa. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;