import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
function Nav() {
    const navStyle = 
    {
        color: "white"
        
    };
    return (
        <nav>
            
            <ul className="nav-link">
             <Link style = {navStyle} to ="/">   
            <li><h2>Movie App</h2></li>
            </Link>

              <Link style = {navStyle} to ="MovieList">
                <li>Movies List</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
