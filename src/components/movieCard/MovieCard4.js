import React from 'react';
import './MovieCard.css';

function MovieCard4() {
 
    return (
        <div>
        <h3>Narnia</h3>
        <img className='imag' src= "https://images-na.ssl-images-amazon.com/images/I/5118044g5CL._AC_.jpg"/>
        <br/><p className ="para">Description:</p><br/>
        <p>During the World War II bombings of London, four English siblings are sent to a country house where they will be safe. One day Lucy finds a wardrobe that transports her to a magical world called Narnia. After coming back, she soon returns to Narnia with her brothers, Peter and Edmund, and her sister, Susan.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TeeUm92phIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default MovieCard4