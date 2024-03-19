"use client";

import React, { useState } from 'react'
import { SearchByMade } from '.';

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
  const handleSearch = () => {

  }
    return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchByMade manufacturer={manufacturer}
            setManufacturer={setManufacturer} />
        </div>

    </form>
    )
}

export default SearchBar