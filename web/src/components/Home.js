import React, { Component } from 'react'
import Category from './Category'
import { Row, Col, Container } from 'react-bootstrap'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <br />
                <Row>
                    <Col xs={12} md={3}>
                        <Category
                            src={require("../images/wildlife.png")}
                            title="WildLife"
                        />
                    </Col>
                    <Col xs={12} md={3}>
                        <Category
                            src={require("../images/festival.png")}
                            title="Festivals"
                        />
                    </Col>
                    <Col xs={12} md={3}>
                        <Category
                            src={require("../images/heritage.png")}
                            title="Heritage"
                        />
                    </Col>
                    <Col xs={12} md={3}>
                        <Category
                            src={require("../images/adventure.png")}
                            title="Adventure"
                        />
                    </Col>
                </Row>
                <br />
                <br />
            </Container>
        );
    }
}

export default Home;