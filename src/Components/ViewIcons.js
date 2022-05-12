import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoAppsSharp } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import '../Styles/ViewIcons.css';

function ViewIcons({ ticketData }) {

    let navigate = useNavigate();

    if (ticketData.length <= 0) {
        return <div className='divider'></div>
    } else {
        return (
            // className={`job-btn ${index === value && 'active-btn'}`}
            <div className="grid-list-icons">
                <button className='btn grid-layout active' onClick={() => { navigate('/') }}>
                    <IoAppsSharp />
                </button>

                <button className='btn list-layout' onClick={() => { navigate('/list-view') }}>
                    <FaList />
                </button>
            </div>
        )
    }

}

export default ViewIcons;