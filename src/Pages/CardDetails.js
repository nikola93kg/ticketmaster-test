import React from 'react';
import { useParams } from 'react-router-dom'
import '../Styles/CardDetails.css'

function CardDetails({ ticketData }) {

    const { id } = useParams()

    console.log(id)
    // ovde je id mnogo veliki i zato mi ne daje ono sto mi treba iz array-a, trebalo bi da ide 0, 1, 2, 3, 4, ...
    // probaj da gadjas njihov index 
    const { author, width, height, download_url, url } = ticketData[id];

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
                <a href={url} target='_blank' rel="noopener noreferrer">
                    <button>More info</button>
                </a>
            </div>
        </div>
    )
}

export default CardDetails