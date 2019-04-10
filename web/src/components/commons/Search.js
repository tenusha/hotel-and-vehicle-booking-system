import React, { Component } from 'react'
import { Row } from 'react-bootstrap'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
                <div>
                    <img src={require("../../images/primary.png")} width='100%' />
                </div>
                <form class="row" style={{ width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', position: 'absolute', bottom: 200 }}>
                    <input id="search" class="form-control" style={{ width: '70%', marginRight: 5, opacity:0.8 }} type="search" placeholder="Search for anything" aria-label="Search" />
                    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </Row>
        )
    }
}

export default Search