import React from 'react';
import './MovieCard.css';

function MovieCard7() {
 
    return (
        <div>
        <h3>The Lord of the Rings: The Return of the King</h3>
        <img className='imag' src= "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg"/>
        <br/><p className ="para">Description:</p><br/>
        <p>Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring. The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/r5X-hFf6Bwo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default MovieCard7