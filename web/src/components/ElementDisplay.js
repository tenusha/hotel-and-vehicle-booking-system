import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

class ElementDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    linkClicked = event => {
        this.props.onClick()
        event.preventDefault()
        event.stopPropagation()
    }

    render() {
        return (
            <div>
                <Image src={this.props.url} width='100%' height='100%' rounded />
                <a href="" onClick={e => this.linkClicked(e)}>
                    <h2 style={{ position: "absolute", color: "white", bottom: 0, left: 20 }}>{this.props.title}</h2>
                </a>
            </div>
        );
    }
}

export default ElementDisplay;