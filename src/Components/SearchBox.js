import React from 'react';
import '../Styles/SearchBox.css';
import { GoSearch } from "react-icons/go";


function SearchBox({ onSearchChange }) {
    return (
        <div className="search-box">
            <input type="search" placeholder="Search by author" onChange={onSearchChange} />
            <GoSearch />
        </div>
    )
}

export default SearchBox;