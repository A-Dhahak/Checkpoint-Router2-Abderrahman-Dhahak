import React from 'react';
import './MovieCard.css';

function MovieCrad() {
 
    return (
        <div>
        <h3>Harry Potter and the sorcerer's stone</h3>
        <img className='imag' src= "https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_1954-570407_1024x1024@2x.jpg?v=1611688002"/>
        <br/><p className ="para">Description:</p><br/>
        <p>This is the tale of Harry Potter (Daniel Radcliffe), an ordinary eleven-year-old boy serving as a sort of slave for his aunt and uncle who learns that he is actually a wizard and has been invited to attend the Hogwarts School for Witchcraft and Wizardry.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VyHV0BRtdxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default MovieCrad
