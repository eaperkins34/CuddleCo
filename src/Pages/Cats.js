import React from 'react';
import '../home/Navbar';
import CatTable from '../tables/CatTable';

class Cats extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            animals: []
        };
    }

    fetchCats = () => {
        fetch("http://localhost:3000/animal/cats", {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((catData) => {
            return this.setState({ animals: catData })
            })
        }

    componentWillMount() {
        this.fetchCats()
    } 
    
    render() {
        
        return(
            <div className="mainDiv">
                <h1>Our Cats</h1>
                <CatTable animals={this.state.animals} />
                <p>If you are interested in scheduling an appointment, we are open Monday-Friday 3pm-8pm. Please call us at 555-555-5555 to schedule.</p>
            </div>
        )
    }
}

export default Cats;