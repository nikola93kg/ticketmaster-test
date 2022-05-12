import React from 'react';
import logo from '../Assets/img/ticketmaster-white.png';
import '../Styles/Navbar.css';

function Navbar() {
    return (
        <>
            <div className="logo">
                <p>Powered by</p>
                <img src={logo} alt="ticketmaster logo" />
            </div>
        </>
    )
}

export default Navbar