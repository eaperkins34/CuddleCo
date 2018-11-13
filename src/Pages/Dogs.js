import React from 'react';
import '../home/Navbar';
import DogTable from '../tables/DogTable';
import "./animal.css"

class Cats extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            animals: []
        };
    }

    fetchDogs = () => {
        fetch("http://localhost:3000/animal/dogs", {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((dogData) => {
            return this.setState({ animals: dogData })
            })
        }

    componentWillMount() {
        this.fetchDogs()
    } 
    
    render() {
        
        return(
            <div className="mainDiv">
                <h1>Our Dogs</h1>
                If you are interested in scheduling an appointment, we are open Monday-Friday 3pm-8pm. Please call us at 867-5309 to schedule.
                <DogTable animals={this.state.animals} />
            </div>
        )
    }
}

export default Cats;