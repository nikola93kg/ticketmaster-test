import React from 'react';
import logo from '../Assets/img/ticketmaster-white.png';
import '../Styles/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="logo">
                <p>Powered by</p>
                <img src={logo} alt="ticketmaster logo" />
            </div>
            <div className="privacy-info">
                <p>Cookie Policy - Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer