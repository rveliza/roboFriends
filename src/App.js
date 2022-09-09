import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import Searchbox from './SearchBox.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    render() {
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <Searchbox />
                <CardList robots={ this.state.robots }/>
            </div>
        )
    }
}

export default App;