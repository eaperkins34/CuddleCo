import React from 'react';
import '../home/Navbar';
import DogTable from '../tables/DogTable';
import "./animal.css"
import APIURL from '../helpers/environment';

class Cats extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            animals: []
        };
    }

    fetchDogs = () => {
        fetch(`${APIURL}/animal/dogs`, {
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
                <p>Doggo ipsum you are doing me the shock long water shoob. Bork floofs you are doing me the shock corgo boof, big ol pupper 
                   dat tungg tho you are doin me a concern, ur givin me a spook borkdrive he made many woofs. Ur givin me a spook boof maximum 
                   borkdrive puggorino smol borking doggo with a long snoot for pats boof very good spot, lotsa pats long doggo such treat the 
                   neighborhood pupper maximum borkdrive. Blep floofs pupper pats he made many woofs puggo, floofs shooberino sub woofer. </p>
                If you are interested in scheduling an appointment, we are open Monday-Friday 3pm-8pm. Please call us at 867-5309 to schedule.
                <DogTable animals={this.state.animals} />
            </div>
        )
    }
}

export default Cats;