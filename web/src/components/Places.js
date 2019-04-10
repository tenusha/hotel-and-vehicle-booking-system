import React, { Component } from 'react'
import  ElementDisplay from './ElementDisplay'
import { Container, Row, Col} from 'react-bootstrap'

class Places extends Component {

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
                           <ElementDisplay url={require('../images/Yala.jpg')} title='YALA'/>
                        </Col>
                        <Col xs={6} md={4}>
                            <ElementDisplay url={require('../images/nilaweli.jpg')} title='NILAWELI'/>
                        </Col>
                        <Col xs={6} md={4}>
                            <ElementDisplay url={require('../images/wilpaththu.jpg')} title='WILPATHTHU'/>
                        </Col>

                    </Row>

                    <br/>

                    <Row>

                    <Col xs={6} md={4}>
                        <ElementDisplay url={require('../images/heritage.jpeg')} title='SIGIRIYA'/>
                    </Col>

                        <Col xs={6} md={4}>
                            <ElementDisplay url={require('../images/religious.jpg')} title='GANGARAMA' />
                        </Col>

                        <Col xs={6} md={4}>
                            <ElementDisplay url={require('../images/teastate.jpg')} title='BOGAWANTHALAWA'/>
                        </Col>


                    </Row>
                </Container>


            </div>
        );
    }
}

export  default Places;