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
                <Image src={this.props.src} height="400vp" responsive />
                <h2 className="cat-title" style={{ position: 'absolute', color: 'white', bottom: 5, right: 20 }}>{this.props.title}</h2>
            </Card>
        )
    }
}

export default Category;