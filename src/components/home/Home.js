import React from 'react'
import FilterName from '../filterName/FilterName';
import './Home.css'
import {Link} from 'react-router-dom';


function Home () {
    
    return (
        
        <div>
            <FilterName />
            <br/>
            <Link  to ="/MovieCard"> 
            <img className='imag'  src="https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_1954-570407_1024x1024@2x.jpg?v=1611688002" />
            </Link>

            <Link  to ="/MovieCard4"> 
            <img className='imag2'  src="https://images-na.ssl-images-amazon.com/images/I/5118044g5CL._AC_.jpg"/>
            </Link>

            <Link  to ="/MovieCard7"> 
            <img className='imag'  src="https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg"/>
            </Link>

        </div>
    )
}

export default Home;
