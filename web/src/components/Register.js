import React, { Component } from 'react'

import { Modal, Button, Form, Col } from 'react-bootstrap'
import { register } from '../Services'
import { toast } from 'react-toastify';

class Register extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            // validated: false,
        }
        this.baseState = this.state
    }

    componentWillUnmount() {
        this.setState(this.baseState)
    }

    handleChange = type => event => {
        let value = event
        if (event.target) {
            value = event.target.value
        }
        this.setState({ [type]: value })
    }

    handleSubmit = event => {
        const form = event.currentTarget

        if (form.checkValidity() === true) {
            register(this.state)
                .then(res => {
                    this.props.handleChange(res)
                    toast.success("Account created")
                    this.props.handleClose()
                })
                .catch(err => {
                    console.log(err)
                    toast.error("Unable to register the new user")
                })     
        }
        // this.setState({ validated: true }) 
        event.preventDefault()
        event.stopPropagation()
    }

    loginClick=()=>{
        this.props.handleClose()
        this.props.handleLoginShow()
    }

    render() {
        
        return (
            <Modal show={this.props.showRegister} onHide={this.props.handleClose}>
                <Form onSubmit={e => this.handleSubmit(e)}>
                    <Modal.Header closeButton>
                        {/* <Modal.Title>Sign in or <a href="">create an account</a></Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFName">
                                <Form.Label>First name</Form.Label>
                                <Form.Control required type="username" placeholder="Enter first name" onChange={this.handleChange('fname')} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLName">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control required type="username" placeholder="Enter last name" onChange={this.handleChange('lname')} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" placeholder="Enter email" onChange={this.handleChange('email')} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Enter Password" onChange={this.handleChange('password')} />
                        </Form.Group>
                        <Button variant="primary" type="submit" block>
                            Create account
                        </Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light" block onClick={this.loginClick}>
                            Sign in
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal >
        )
    }
}

export default Register;