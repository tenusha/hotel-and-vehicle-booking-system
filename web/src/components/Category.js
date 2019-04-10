import React, { Component } from 'react'
import { Card, Image } from 'react-bootstrap'

class Category extends Component {
    constructor(props, context) {
        super(props, context)
        this.baseState = this.state
    }

    render() {
        return (
            <Card>
                <Image src={this.props.src} height="400vp" />
                <a href="/places">
                    <h2 style={{ position: 'absolute', color: 'white', bottom: 5, left: 20, backgroundColor: 'grey', width: '100%', opacity: 0.8, padding: 10 }}>{this.props.title}</h2>
                </a>
            </Card>
        )
    }
}

export default Category;