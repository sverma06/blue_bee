import React from 'react';
import MainPage from '../Header/Header';
import './Search.css';

const Search = () => {
    return (
        <div className='searchContainer'>
            <input className='search' type='text' placeholder='Search' />
            <MainPage />
        </div>
       
    )
}

export default Search;