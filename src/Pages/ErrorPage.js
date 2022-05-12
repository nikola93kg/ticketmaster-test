import React from 'react';
import error404 from '../Assets/svg/404.svg';
import '../Styles/ErrorPage.css'

function ErrorPage() {
    return (
        <div className='error-container'>
            <img src={error404} alt="page not found" />
        </div>
    )
}

export default ErrorPage