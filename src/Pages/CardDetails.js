import React from 'react';
import '../Styles/CardDetails.css'


function CardDetails({ ticketData, cardValue }) {

    const { id, author, width, height, download_url } = ticketData[cardValue];


    return (
        <div className="card-details-container">
            <div className="head">
                <h1>{author}</h1>
            </div>
            <div className="body">
                <img src={download_url} alt="photo" />
                <p>Width: {width}px</p>
                <p>Height: {height}px</p>
            </div>
            <div className="foot">
                <a href={download_url} target='_blank' rel="noopener noreferrer">
                    <button>download img</button>
                </a>
            </div>


        </div>
    )
}

export default CardDetails