import React from 'react';
import Card from './Card';
import '../Styles/CardGrid.css';
import TrySomethingElse from './TrySomethingElse';


function CardGrid({ filteredTicketData }) {

    if (filteredTicketData.length < 1) {
        return <TrySomethingElse />
    }

    return (
        <div className="grid-container">
            {filteredTicketData.map((data) => {
                return <Card  {...data} key={data.id} />
            })}
        </div>
    )
}

export default CardGrid