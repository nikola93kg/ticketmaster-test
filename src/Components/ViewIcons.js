import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { IoAppsSharp } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import '../Styles/ViewIcons.css';

function ViewIcons({ ticketData }) {

    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
      };

    let navigate = useNavigate();

    if (ticketData.length <= 0) {
        return <div className='divider'></div>
    } else {
        return (
            <div className="grid-list-icons">
                <button className={`btn grid-layout ${!isActive ? 'active' : ''}`} onClick={() => { navigate('/'); toggleClass() }}>
                    <IoAppsSharp />
                </button>

                <button className={`btn list-layout ${!isActive ? '' : 'active'}`} onClick={() => { navigate('/list-view'); toggleClass() }}>
                    <FaList />
                </button>
            </div>
        )
    }

}

export default ViewIcons;