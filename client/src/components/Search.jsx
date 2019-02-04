import React from 'react';
import ReactDom, {render} from 'react-dom'; 


class Search extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
        <span>
            <input type="text" />
            <button> Go </button>
        </span>
        );
    }

}

export default Search;

/* 

This will be a stateful component 
because
it will accept user query. 

*/

/*
  Now I'd have to somehow enable the Search bar
  1. Accept user input
  2. On pressing, Go button is should be able to filter the movie list
*/

/**
 
We might want to handle it differnetly

 */