import React from 'react';
import './MovieCard.css';

function MovieCard5() {
 
    return (
        <div>
        <h3>The Lord of the Rings: The Fellowship of the Ring</h3>
        <img className='imag' src= "https://cinema.online.lu/loi/MovieImg/2018/2/20180226110912_11961.jpg"/>
        <br/><p className ="para">Description:</p><br/>
        <p>The Lord of the Rings: The Fellowship of the Ring is a fantasy adventure film, directed by Peter Jackson. ... The film tells the story of young hobbit Frodo Baggins who, accompanied by eight companions, embarks on a journey to destroy the One Ring in the fires of Mount Doom.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/V75dMMIW2B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default MovieCard5