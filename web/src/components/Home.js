import React, { Component } from 'react'
import Categories from './Categories'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Categories />
        );
    }
}

export default Home;