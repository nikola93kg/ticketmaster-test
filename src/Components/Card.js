import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Card.css';
import { GoBriefcase, GoBrowser } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";


function Card({ id, author, width, height, download_url, listViewUrl }) {


    if (listViewUrl === '/list-view') {
        return (
            <div className="list-item">
                <div className='item'>
                    <img src={download_url} style={{ backgroundImage: 'linear-gradient(180deg, #0001, #0009)' }} alt="ticket picture" />
                    <div className="date-info">
                        <p>JAN</p>
                        <p>16</p>
                        <p>2022</p>
                    </div>
                    <div className="item-info">
                        <h4>{author}</h4>
                        <p>Height: {height}</p>
                        <p>Width: {width}</p>
                    </div>
                </div>
                <div className="button-container">
                    <Link to={`/card-details/${id}`} target='_blank' rel="noopener noreferrer">
                        <button>Buy tickets <FaChevronRight /> </button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <Link to={`/card-details/${id}`} target='_blank' rel="noopener noreferrer" >
            <div className="grid-item">
                <div className='item'>
                    <img src={download_url} style={{ backgroundImage: 'linear-gradient(180deg, #0001, #0009)' }} alt="ticket picture" />
                    <h3>{author}</h3>
                    <div className="item-info">
                        <p> <span> <GoBriefcase /> </span> Height: {height + 'px'}</p>
                        <p> <span> <GoBrowser /> </span>Width:  {width + 'px'}</p>
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default Card;