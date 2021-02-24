import React from 'react'
import './FilterName.css';


function FilterByName() {
    return (
        <form action="/" method="get">
        <input
            type="text"
            id="header-search"
            placeholder="Search for a movie..."
            name="s" 
            size="50"
        />
        <button className="button" type="submit">Search</button>
    </form>
    )
}

export default FilterByName
