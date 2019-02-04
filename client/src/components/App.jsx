//because we need access to React.createElement method
import React from 'react';
//because we would need acess to render method
import ReactDOM, {render} from 'react-dom';
// Import components such as movieList and movieListItem
import MovieList from  './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';
//Import search component
/* import Search from './Search.jsx';
// We will hardcode the movie-names here. */ 
import movies from './../../../dummyData.js';
console.log("Hi, I am the imported movieList from dummyData", movies);

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    submit(){
        alert("I think I have been clicked.");
    }
    handleChange(){
        console.log("I think I have beed changed.");
    }
    render(){
        return(
            <div>
                <h1>Mov!e List</h1>
                {/* Let's put a input box.
                Let's put a Go button. */}
                <span>
                    <input type="text" onChange = {this.handleChange.bind(this)} />
                    <button onClick= {this.submit.bind(this)}>GO</button>
                </span>
                
                <MovieList allMovies = {movies} />
            </div>   
        );
    }
}

export default App;

/*
App is the orchestration unit,
meaning it connect all different components to solve a meaningful problem.
*/

// I am pattern matching assuming that the go button will add a new movie
