import React from 'react';
import './MovieCard.css';

function MovieCard6() {
 
    return (
        <div>
        <h3>The Lord of the Rings: The Two Towers</h3>
        <img className='imag' src= "https://upload.wikimedia.org/wikipedia/en/d/d0/Lord_of_the_Rings_-_The_Two_Towers_%282002%29.jpg"/>
        <br/><p className ="para">Description:</p><br/>
        <p>The surviving members of the Fellowship have split into three groups. Frodo and Sam face many perils on their continuing quest to save Middle-earth by destroying the One Ring in the fires of Mount Doom. Merry and Pippin escape from the Orcs and must convince the Ents to join the battle against evil.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LbfMDwc4azU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default MovieCard6