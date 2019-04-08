import React, { Component } from 'react'

import { Modal, Button, Form, Image, Row } from 'react-bootstrap'
import { login } from '../Services'

class Login extends Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
            validated: false
        }
    }

    handleSubmit = event => {
        const form = event.currentTarget

        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            login('/login', { username: "this.username1", password: "this.password" })
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
        this.setState({ validated: true })
    }

    render() {
        const { validated } = this.state
        return (
            <Modal show={this.props.showLogin} onHide={this.props.handleClose}>
                <Form noValidate validated={validated} onSubmit={e => this.handleSubmit(e)}>
                    <Modal.Header closeButton>
                        {/* <Modal.Title>Sign in or <a href="">create an account</a></Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>
                        <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image src={require("../images/login.png")} width='40%' />
                        </Row>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control required type="username" placeholder="Enter username" onChange={(ref) => { this.username = ref }} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Enter Password" onChange={(ref) => { this.password = ref }} />
                        </Form.Group>
                        <Button variant="primary" type="submit" block>
                            Sign in
                        </Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light" block>
                            Join Now
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }
}

export default Login;