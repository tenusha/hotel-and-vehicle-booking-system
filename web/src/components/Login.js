import React, { Component } from 'react'

import { Modal, Button, Form, Image, Row } from 'react-bootstrap'
import { login } from '../Services'

class Login extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            // validated: false,
            modalShowErr: false,
            modalErrMsg: "Incorrect username or password",
            username: "",
            password: ""
        }
        this.baseState = this.state
    }

    componentWillUnmount() {
        this.setState(this.baseState)
    }

    handleChange = type => event => {
        let value = event;
        if (event.target) {
            value = event.target.value;
        }
        this.setState({ [type]: value })
    }

    handleSubmit = event => {
        this.setState({ modalShowErr: false })
        const form = event.currentTarget

        this.props.handleChange({ username: 'Tenusha' })
        this.props.handleClose()
        // if (form.checkValidity() === true) {
        //     login({ username: this.state.username, password: this.state.password })
        //         .then(res => {
        //             this.props.handleChange(res)
        //             this.props.handleClose()
        //         })
        //         .catch(err => {
        //             console.log(err)
        //             this.setState({ modalShowErr: true })
        //         })
        // }
        //this.setState({ validated: true }) form tag -> noValidate validated={validated}
        event.preventDefault()
        event.stopPropagation()
    }

    joinClick = () => {
        this.props.handleClose()
        this.props.handleRegisterShow()
    }

    render() {
        // const { validated } = this.state
        return (
            <Modal show={this.props.showLogin} onHide={this.props.handleClose}>
                <Form onSubmit={e => this.handleSubmit(e)}>
                    <Modal.Header closeButton>
                        {/* <Modal.Title>Sign in or <a href="">create an account</a></Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>
                        <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image src={require("../images/login.png")} width='30%' />
                        </Row>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control required type="username" placeholder="Enter email" onChange={this.handleChange('username')} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Enter Password" onChange={this.handleChange('password')} />
                        </Form.Group>
                        {this.state.modalShowErr && <p style={{ color: 'red' }}>{this.state.modalErrMsg}</p>}
                        <Button variant="primary" type="submit" block>
                            Sign in
                        </Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light" block onClick={this.joinClick}>
                            Join Now
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }
}

export default Login;