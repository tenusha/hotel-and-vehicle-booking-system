import React, { Component } from 'react'
import { Form, Col, Button, Container } from 'react-bootstrap'
import ImageUploader from 'react-images-upload';

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

class AddPlace extends Component {
	constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
	  pictures : []
    };
    this.handleChange = this.handleChange.bind(this);
	this.onDrop = this.onDrop.bind(this)
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
	render() {
		return(
		<Container>
			<br/>
			<center><h1>Register Budget Rooms and Vehicles</h1><br/></center>
			<Form>
			  <Form.Row>
				<Form.Group as={Col} controlId="formGridName">
				  <Form.Label>Name</Form.Label>
				  <Form.Control type="text" placeholder="Enter Name" />
				</Form.Group>

				<Form.Group as={Col} controlId="formGridMobile">
				  <Form.Label>Mobile</Form.Label>
				  <Form.Control type="text" placeholder="Mobile" />
				</Form.Group>
			  </Form.Row>

			  <Form.Group controlId="formGridAddress1">
				<Form.Label>Address</Form.Label>
				<Form.Control placeholder="1234 Main St" />
			  </Form.Group>

			  <Form.Group controlId="formGridAddress2">
				<Form.Label>Address 2</Form.Label>
				<Form.Control placeholder="Apartment, studio, or floor" />
			  </Form.Group>

			  <Form.Row>
				<Form.Group as={Col} controlId="formGridCity">
				  <Form.Label>City</Form.Label>
				  <Form.Control />
				</Form.Group>

				<Form.Group as={Col} controlId="formGridLocation">
				  <Form.Label>Location</Form.Label>
				  <Form.Control placeholder="15.23456, -30.67890" />
				</Form.Group>
			  </Form.Row>
			  
			  <Form.Row>
			  <Form.Group as={Col} controlId="formGridFrom">
				  <Form.Label>From Date </Form.Label><br/>
				  <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
				</Form.Group>

				<Form.Group as={Col} controlId="formGridTo">
				  <Form.Label>To Date </Form.Label><br/>
				  <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
				</Form.Group>
			  </Form.Row>

			  <Form.Row>
			  <Form.Group as={Col} controlId="formGridState">
				  <Form.Label>Type</Form.Label>
				  <Form.Control as="select">
					<option>Choose...</option>
					<option>Room</option>
					<option>Vehicle</option>
				  </Form.Control>
				</Form.Group>
			  <Form.Group as={Col} controlId="formGridFileUpload">
				  <ImageUploader
                withIcon={true}
                buttonText='Choose atleast 5 images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
				</Form.Group>
			  </Form.Row>
			  
			  <Button variant="primary" type="submit">
				Submit
			  </Button>
			</Form>
			</Container>
		);
	}
}

export default AddPlace;