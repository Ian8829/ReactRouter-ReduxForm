import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD5csg_18zq0N-PUuQk_YwrIhIzpzifNAk';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'Sasha'}, videos => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
            </div>
        );
    }
}

// Take upper comp is generated HTML and put it on page
ReactDOM.render(
    <App/>,
    document.querySelector('.container')
);