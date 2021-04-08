import React from 'react';
import './MovieList.css';
import {Link} from 'react-router-dom';

function MovieList() {

//const MovieList = (props) => {
    return (
        <div>
            <Link  to ="/MovieCard"> 
        <img className='imag' src="https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_1954-570407_1024x1024@2x.jpg?v=1611688002"/>
        <h3>Harry Potter and the sorcerer's stone</h3>
        </Link>
        <br/>
        <Link  to ="/MovieCard2">
        <img className='imag' src="https://m.media-amazon.com/images/M/MV5BOTRjYWVhNjAtMjIwOC00NjU3LTliZTAtMjczMmEwMzQ5Y2Y3XkEyXkFqcGdeQXVyMjQwNTU1NTc@._V1_.jpg"/>
        <h3>Chucky 3</h3>
        </Link>
        <br/>
        <Link  to ="/MovieCard3">
        <img className='imag' src="https://i.pinimg.com/originals/cb/12/28/cb122893640d8f0bf8077bbf2b52f41e.jpg"/>
        <h3>30 Days of night</h3>
        </Link>
        <br/>
        <Link  to ="/MovieCard4">
        <img className='imag' src="https://images-na.ssl-images-amazon.com/images/I/5118044g5CL._AC_.jpg"/>
        <h3>Narnia</h3>
        </Link>
        <br/>
        <Link  to ="/MovieCard5">
        <img className='imag' src="https://cinema.online.lu/loi/MovieImg/2018/2/20180226110912_11961.jpg"/>
        <h3>The Lord of the Rings: The Fellowship of the Ring</h3>
        </Link>
        <br/>
        <Link  to ="/MovieCard6">
        <img className='imag' src="https://upload.wikimedia.org/wikipedia/en/d/d0/Lord_of_the_Rings_-_The_Two_Towers_%282002%29.jpg"/>
        <h3>The Lord of the Rings: The Two Towers</h3>
        </Link>
        <br/>
        <Link  to ="/MovieCard7">
        <img className='imag' src="https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg"/>
        <h3>The Lord of the Rings: The Return of the King</h3>
        </Link>
        </div>
/*
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
};*/
    )
}
export default MovieList;