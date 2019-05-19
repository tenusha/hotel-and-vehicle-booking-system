import React, { Component } from 'react'
import Rating from 'react-rating'
import { Button, Carousel, Card, Container, Row, Col } from 'react-bootstrap'

class Place extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const links = this.props.links.map((linkObj, i) =>
			<Button href={linkObj.link} variant="primary" style={{ marginRight: '3px' }} key={linkObj.name}>{linkObj.name}</Button>
		);

		const carouselItems = this.props.src.map((i, n) =>
			<Carousel.Item key={n}>
				<img className="d-block w-100" src={i} alt={i} />
			</Carousel.Item>
		);

		return (
			<Container>
				<Carousel>{carouselItems}</Carousel>
				<Row>
					<Col></Col>
					<Col>
						<Card style={{ width: '69.5rem' }}>
							<Card.Body>
								<Card.Title>{this.props.title}</Card.Title>
								<Rating placeholderRating={this.props.rating} />
								<Card.Text>{this.props.text}</Card.Text>
								<p>{links}</p>
							</Card.Body>
						</Card>
					</Col>
					<Col></Col>
				</Row>
			</Container>
		);
	}
}

export default Place;