import React, { Component } from 'react'
import { Row, Image, Button } from 'react-bootstrap'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
                <div>
                    <Image src={require("../../images/primary.png")} width='100%' />
                </div>
                <form className="row" style={{ width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', position: 'absolute', top: 330 }}>
                    <input id="search" className="form-control" style={{ width: '70%', marginRight: 5, opacity:0.8 }} type="search" placeholder="Search for anything" aria-label="Search" />
                    <Button href="/hotels" variant="primary">Search</Button>
                </form>
            </Row>
        )
    }
}

export default Search