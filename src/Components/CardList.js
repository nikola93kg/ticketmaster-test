import React from 'react';
import Card from './Card';
import TrySomethingElse from './TrySomethingElse';
import '../Styles/CardList.css';


function CardList({ filteredTicketData }) {

    const listViewUrl = window.location.pathname;

    if (filteredTicketData.length < 1) {
        return <TrySomethingElse />
    }

    return (
        <div className="list-container">
            {filteredTicketData.map((data) => {
                return (
                    <Card {...data} listViewUrl={listViewUrl} key={data.id} />
                )
            })}
        </div>
    )
}

export default CardList