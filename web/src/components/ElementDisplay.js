import React, { Component } from 'react'
import {Image} from 'react-bootstrap'

class ElementDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div>
                <Image src={this.props.url} width='100%' height='100%' rounded/>
                <h2 style={{position:"absolute", color:"white", bottom:0, left:20}}>{this.props.title}</h2>
            </div>
        );
    }
}

export default  ElementDisplay;