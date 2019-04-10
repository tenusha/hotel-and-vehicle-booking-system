import React, {Component} from 'react';
import Places from './Places';
import Hotels from './Hotels';
import Budget from './Budget';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 'places'
        };
    }

    placeClick = (name) => {
        this.setState({name:name,selected:''})
    }

    hotelClick = (name) => {
        this.setState({name:name,selected:''})
    }

    componentClick = (type) => {

    }

    render() {
        return (
            <div>
                <Budget/>
                {this.state.selected === 'places' &&
                <Places
                    placeClick={(name) => this.placeClick(name)}
                />
                }
                {this.state.selected === 'hotels' &&
                <Hotels
                    hotelClick={(name) => this.hotelClick(name)}
                />
                }
                {this.state.selected === 'hotels' &&
                <Budget
                    componentClick={(type) => this.componentClick(type)}
                />
                }
            </div>
        );
    }
}

export default About;