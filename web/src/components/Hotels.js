import React, { Component } from 'react'
import  ElementDisplay from './ElementDisplay'
import { Container, Row, Col} from 'react-bootstrap'

class Hotels extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div>
            <br/>
            <Container>
            <Row>
            <Col xs={6} md={4}>
            <ElementDisplay url={require('../images/shangrila.jpg')} title='SHANGRILA'/>
            </Col>
            <Col xs={6} md={4}>
            <ElementDisplay url={require('../images/peacock.jpg')} title='PEACOCK'/>
            </Col>
            <Col xs={6} md={4}>
            <ElementDisplay url={require('../images/hilton.jpg')} title='HILTON'/>
            </Col>

            </Row>

            <br/>

            <Row>

            <Col xs={6} md={4}>
            <ElementDisplay url={require('../images/Frozenvilla.jpg')} title='FROZEN VILLA'/>
            </Col>

            <Col xs={6} md={4}>
            <ElementDisplay url={require('../images/cinnamon.jpg')} title='CINNAMON RESORT' />
            </Col>

            <Col xs={6} md={4}>
            <ElementDisplay url={require('../images/chayaa.jpg')} title='CHAYAA RESORT'/>
            </Col>


            </Row>
            </Container>


            </div>
    );
    }
}

export  default Hotels;