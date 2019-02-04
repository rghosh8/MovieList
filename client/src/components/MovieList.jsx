// We need to import React to get access to React.creatElement method
import React from 'react'; 
import MovieListItem from './MovieListItem.jsx';
const MovieList = (props) => { 
    return (
        <ul>
            {props.allMovies.default.map((movie) => {
                return (<MovieListItem key = {movie.title.toString()} movieName = {movie.title}/>)
                }
            )}
        </ul>
    )
}
export default MovieList;


/*

here we will build the template for the list. 
It will use movieListItem component ans use feeded data to build the list

Array.prototype.map takes each element of an array and maps it to a new value based on the callback function.

*/

