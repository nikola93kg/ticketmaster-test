import React from 'react';
import searchSvg from '../Assets/svg/search.svg';
import '../Styles/TrySomethingElse.css';

function TrySomethingElse() {
    return (
        <div className='try-something-else'>
            <h1>Try something else...</h1>
            <img src={searchSvg} alt="" />
        </div>
    )
}

export default TrySomethingElse