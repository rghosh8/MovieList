// We need to import React to get access to React.creatElement method
import React from 'react';
const MovieListItem = (props) => {
    return (
        <li className = "item">{props.movieName}</li>
    )
}
export default MovieListItem;







/* somehow I'd need to bring data
NOoooooooooo
we don't have to because somebody will bring data to the app 
by invoking from a scope where the data is available.
SO,
our job will be just to define a template aka component as if 
it's a function with props as dubbing as the params. 

*/