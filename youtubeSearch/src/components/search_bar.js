import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    // initialize the state

    render() {
        return (
            <div>
                <input
                value={this.state.term}
                onCHange={
                    event => this.setState(
                        { term: event.target.value }
                    )
                }
                />
            </div>
        );
    }
}

export default SearchBar;