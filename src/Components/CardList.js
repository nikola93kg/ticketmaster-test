import React from 'react';
import Card from './Card';
import TrySomethingElse from './TrySomethingElse';
import '../Styles/CardList.css';


function CardList({ filteredTicketData }) {

    const listViewUrl = window.location.pathname;

    if (filteredTicketData >= filteredTicketData.length) {
        return <TrySomethingElse />
    }
    if (filteredTicketData === undefined) return;


    return (
        <div className="list-container">
            {filteredTicketData.map((data) => {
                return (
                    <Card {...data} listViewUrl={listViewUrl} />
                )
            })}
        </div>
    )
}

export default CardList