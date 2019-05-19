import React, { Component } from 'react'
import {Form, Button, Container} from 'react-bootstrap'

class Budget extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }




    render() {

        return (
            <div>
                <br/>
                <br/>
                <Container>
                <Form >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><h1>Enter Your Budget</h1></Form.Label>
                        <Form.Control type="text" placeholder="Enter Budget" />
                        <Form.Text className="text-muted">
                            !!! We'll give you options for your Budget !!!
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
                </Container>
            </div>
        );
    }
}

export default  Budget;