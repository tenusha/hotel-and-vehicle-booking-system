import React, { Component } from 'react'
import ElementDisplay from './ElementDisplay'
import { Container, Row, Col } from 'react-bootstrap'
import Place from './Place'

class Hotels extends Component {

    constructor(props) {
        super(props);
        this.state = {
            linkClicked: false
        };
    }

    obj = {
        src: [require("../images/shan2.jpg"), require("../images/shan1.jpg"), require("../images/shan3.jpg")],
        rating: 2.5,
        title: 'Shangri-la',
        text: 'Enjoy much more beyond Golden Circle exclusive offers. Every time you stay with us, you will enjoy exclusive privileges and benefits across many different aspects of our hotel and resort offerings.',
        links: [
            { name: 'accomodation', link: 'https://www.shangri-la.com' }
        ]
    }

    setLinkClicked = () => {
        this.setState({ linkClicked: true })
    }

    componentDidMount() {
        this.setState({ linkClicked: false })
    }

    render() {

        return (
            <div>
                <br />
                {!this.state.linkClicked && <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <ElementDisplay url={require('../images/shangrila.jpg')} title='SHANGRILA' onClick={() => this.setLinkClicked()} />
                        </Col>
                        <Col xs={6} md={4}>
                            <ElementDisplay url={require('../images/peacock.jpg')} title='PEACOCK' onClick={() => this.setLinkClicked()} />
                        </Col>
                        <Col xs={6} md={4}>
                            <ElementDisplay url={require('../images/hilton.jpg')} title='HILTON' onClick={() => this.setLinkClicked()} />
                        </Col>

                    </Row>

                    <br />

                    <Row>

                        <Col xs={6} md={4}>
                            <ElementDisplay url={require('../images/Frozenvilla.jpg')} title='FROZEN VILLA' onClick={() => this.setLinkClicked()} />
                        </Col>

                        <Col xs={6} md={4}>
                            <ElementDisplay url={require('../images/cinnamon.jpg')} title='CINNAMON RESORT' onClick={() => this.setLinkClicked()} />
                        </Col>

                        <Col xs={6} md={4}>
                            <ElementDisplay url={require('../images/chayaa.jpg')} title='CHAYAA RESORT' onClick={() => this.setLinkClicked()} />
                        </Col>


                    </Row>
                </Container>
                }
                {this.state.linkClicked && <Place {...this.obj} />}

            </div>
        );
    }
}

export default Hotels;