
import MovieList from './components/movieList/MovieList';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import MovieCard1 from './components/movieCard/MovieCard1';
import MovieCard2 from './components/movieCard/MovieCard2';
import MovieCard3 from './components/movieCard/MovieCard3';
import MovieCard4 from './components/movieCard/MovieCard4';
import MovieCard5 from './components/movieCard/MovieCard5';
import MovieCard6 from './components/movieCard/MovieCard6';
import MovieCard7 from './components/movieCard/MovieCard7';

import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  const [movies,setMovie] = useState ( [
    {
    title:"Harry Potter and the sorcerer's stone ",
    description:"This is the tale of Harry Potter (Daniel Radcliffe), an ordinary eleven-year-old boy serving as a sort of slave for his aunt and uncle who learns that he is actually a wizard and has been invited to attend the Hogwarts School for Witchcraft and Wizardry.",
    poster:"https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_1954-570407_1024x1024@2x.jpg?v=1611688002",
    rate:"4",
  
  },
  {
    title:"Chucky 3 ",
    description:"Summaries. Chucky returns for revenge against Andy, the young boy who defeated him, and now a teenager living in a military academy. It's been eight years since the events in the second film, we now see that Andy is a teenager who has been enrolled in a military school.",
    poster:"https://m.media-amazon.com/images/M/MV5BOTRjYWVhNjAtMjIwOC00NjU3LTliZTAtMjczMmEwMzQ5Y2Y3XkEyXkFqcGdeQXVyMjQwNTU1NTc@._V1_.jpg",
    rate:"2",
  
  },
  {
    title:"30 Days of night ",
    description:"30 Days of Night is a 2007 American horror film based on the comic book miniseries of the same name. The film is directed by David Slade and stars Josh Hartnett and Melissa George. The story focuses on an Alaskan town beset by vampires as it enters into a thirty-day long polar night.",
    poster:"https://i.pinimg.com/originals/cb/12/28/cb122893640d8f0bf8077bbf2b52f41e.jpg",
    rate:"3",
  
  },
  {
    title:"Narnia ",
    description:"During the World War II bombings of London, four English siblings are sent to a country house where they will be safe. One day Lucy finds a wardrobe that transports her to a magical world called Narnia. After coming back, she soon returns to Narnia with her brothers, Peter and Edmund, and her sister, Susan.",
    poster:"https://images-na.ssl-images-amazon.com/images/I/5118044g5CL._AC_.jpg",
    rate:"3",
  
  },
  {
    title:"The Lord of the Rings: The Fellowship of the Ring",
    description:"The Lord of the Rings: The Fellowship of the Ring is a fantasy adventure film, directed by Peter Jackson. ... The film tells the story of young hobbit Frodo Baggins who, accompanied by eight companions, embarks on a journey to destroy the One Ring in the fires of Mount Doom.",
    poster:"https://cinema.online.lu/loi/MovieImg/2018/2/20180226110912_11961.jpg",
    rate:"4",
  
  },
  {
    title:"The Lord of the Rings: The Two Towers",
    description:"The surviving members of the Fellowship have split into three groups. Frodo and Sam face many perils on their continuing quest to save Middle-earth by destroying the One Ring in the fires of Mount Doom. Merry and Pippin escape from the Orcs and must convince the Ents to join the battle against evil.",
    poster:"https://upload.wikimedia.org/wikipedia/en/d/d0/Lord_of_the_Rings_-_The_Two_Towers_%282002%29.jpg",
    rate:"5",
  
  },
  {
    title:"The Lord of the Rings: The Return of the King",
    description:" Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring. The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth.",
    poster:"https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg",
    rate:"5",
  
  },
 

  ])
  return (
    <Router>
    <div className="App">
      <Nav />
      <br/>
      <Switch>
      <Route exact  path ="/" >
         <Home movies = {movies} />
      </Route>
      <Route  exact path ="/MovieList"><MovieList  /*movies ={movies}*/ /></Route>
      <Route exact path ="/MovieCard"><MovieCard1/></Route>
      <Route exact path ="/MovieCard2"><MovieCard2/></Route>
      <Route exact path ="/MovieCard3"><MovieCard3/></Route>
      <Route exact path ="/MovieCard4"><MovieCard4/></Route>
      <Route exact path ="/MovieCard5"><MovieCard5/></Route>
      <Route exact path ="/MovieCard6"><MovieCard6/></Route>
      <Route exact path ="/MovieCard7"><MovieCard7/></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
