import React, { Component } from 'react'
import ElementDisplay from './ElementDisplay'
import { Container, Row, Col } from 'react-bootstrap'
import Place from './Place'

class Places extends Component {

    constructor(props) {
        super(props);
        this.state = {
            linkClicked: false
        };
    }

    setLinkClicked = () => {
        this.setState({ linkClicked: true })
    }

    componentDidMount() {
        this.setState({ linkClicked: false })
    }

    obj = {
        src: [require("../images/yala2.jpg"), require("../images/yala3.jpg"), require("../images/place.jpg")],
        rating: 2.5,
        title: 'Yala',
        text: 'Yala National Park is a huge area of forest, grassland and lagoons bordering the Indian Ocean, in southeast Sri Lanka. It’s home to wildlife such as leopards, elephants and crocodiles, as well as hundreds of bird species. Inland, Sithulpawwa is an ancient Buddhist monastery. Nearby caves contain centuries-old rock paintings. Southwest, Magul Maha Viharaya also has ancient Buddhist ruins. Both are pilgrimage sites.',
        links: [
            { name: 'accomodation', link: '/hotels' }
        ]
    }

    render() {
        return (
            <div>
                <br />
                { !this.state.linkClicked && <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <ElementDisplay url={require('../images/Yala.jpg')} title='YALA' onClick={()=>this.setLinkClicked()}/>
                        </Col>
                        <Col xs={6} md={4}>
                            <ElementDisplay url={require('../images/nilaweli.jpg')} title='NILAWELI' onClick={()=>this.setLinkClicked()}/>
                        </Col>
                        <Col xs={6} md={4}>
                            <ElementDisplay url={require('../images/wilpaththu.jpg')} title='WILPATHTHU' onClick={()=>this.setLinkClicked()}/>
                        </Col>

                    </Row>

                    <br />

                    <Row>

                        <Col xs={6} md={4}>
                            <ElementDisplay url={require('../images/heritage.jpeg')} title='SIGIRIYA' onClick={()=>this.setLinkClicked()}/>
                        </Col>

                        <Col xs={6} md={4}>
                            <ElementDisplay url={require('../images/religious.jpg')} title='GANGARAMA' onClick={()=>this.setLinkClicked()}/>
                        </Col>

                        <Col xs={6} md={4}>
                            <ElementDisplay url={require('../images/teastate.jpg')} title='BOGAWANTHALAWA' onClick={()=>this.setLinkClicked()}/>
                        </Col>


                    </Row>
                </Container>
                }
                {this.state.linkClicked && <Place {...this.obj} />}
            </div>
        );
            }
        }
        
export  default Places;