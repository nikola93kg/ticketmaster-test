import React from 'react';
import loader from '../Assets/svg/loader.svg';
import '../Styles/Loading.css';

function Loading() {
    return (
        <div className="loading-container">
            <img src={loader} alt="loading..." />
        </div>
    )
}

export default Loading