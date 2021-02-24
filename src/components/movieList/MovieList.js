import React from 'react';
import './MovieList.css';

const MovieList = (props) => {
    return (

    <>
    {props.movies.map((movie, index) => (
    <div>
        <div>
        <img className ="imag" src = {movie.poster} alt = "movie"></img><br/>
        </div>
        <h3>{movie.title}</h3>
        <br/>
    </div>
    ))}
    </>
    );
};
export default MovieList;