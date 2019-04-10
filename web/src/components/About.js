import React, { Component } from 'react';
import  Places from './Places';


class About extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Places/>
            </div>
        );
    }
}

export default About;