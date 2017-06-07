import React from 'react';
import ReactDOM from 'react-dom';

// Create a new comp.
const App = function () {
    return <div>Hi!</div>
};


// Take upper comp is generated HTML and put it on page
ReactDOM.render(
    <App/>,
    document.querySelector('.container')
);