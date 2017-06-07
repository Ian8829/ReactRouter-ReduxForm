import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD5csg_18zq0N-PUuQk_YwrIhIzpzifNAk';

// Create a new comp.
const App = function () {
    return (
        <div>
            <SearchBar/>
        </div>
    );
};


// Take upper comp is generated HTML and put it on page
ReactDOM.render(
    <App/>,
    document.querySelector('.container')
);