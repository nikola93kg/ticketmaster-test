import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import '../Styles/CardGrid.css';
import TrySomethingElse from './TrySomethingElse';


function CardGrid({ filteredTicketData, setValue }) {

    if (filteredTicketData >= filteredTicketData.length) {
        return <TrySomethingElse />
    }
    if (filteredTicketData === undefined) return;

    return (
        <div className="grid-container">
            {filteredTicketData.map((data, index) => {
                console.log(index);
                return (
                    <Link to='/card-details' target='_blank' rel="noopener noreferrer" key={data.id} onClick={() => setValue(index)}>
                        <Card  {...data} />
                    </Link>
                )
            })}
        </div>
    )
}

export default CardGrid