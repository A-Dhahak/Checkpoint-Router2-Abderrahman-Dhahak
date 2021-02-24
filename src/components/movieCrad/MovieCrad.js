import React from 'react';
import React, {useState} from 'react';
import MovieList from '../movieList/MovieList';

function MovieCrad() {
    const [movie,setMovie] = useState(
        {
        title:"Harry Potter and the sorcerer's stone ",
        description:"This is the tale of Harry Potter (Daniel Radcliffe), an ordinary eleven-year-old boy serving as a sort of slave for his aunt and uncle who learns that he is actually a wizard and has been invited to attend the Hogwarts School for Witchcraft and Wizardry.",
        poster:".../Assets/movie1.jpg",
        rate:"4",

    })
    return (
        <div>
            <MovieList movies ={movies} />
            
        </div>
    )
}

export default MovieCrad
