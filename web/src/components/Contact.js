import React, { Component } from 'react';
import Place from './Place';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
	
	obj = {
		src: [require("../images/place.jpg"), require("../images/place.jpg"), require("../images/place.jpg")],
		rating : 2.5,
		title: 'demo title',
		text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
		links: [
			{name : 'accomodation', link : '../demo/a'},
			{name : 'something', link : '../demo/s'}
		]
	}
	
    render() {
        return (
			<Place {...this.obj}/>
		);
    }
}

export default Contact;