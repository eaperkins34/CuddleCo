import React from 'react';
import '../home/Navbar';
import CatTable from '../tables/CatTable';
import "./animal.css"
import APIURL from '../helpers/environment';

class Cats extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            animals: []
        };
    }

    fetchCats = () => {
        fetch(`${APIURL}/animal/cats`, {
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
                <p>Leopard tomcat but leopard. Persian leopard british shorthair for turkish angora and siberian american shorthair. Egyptian 
                    mau egyptian mau, havana brown so american bobtail. British shorthair havana brown kitten ocicat yet havana brown jaguar 
                    yet ocelot. Russian blue ocelot and singapura or munchkin but russian blue american bobtail so ocicat. Birman bengal tiger 
                    bobcat, bobcat yet kitty yet singapura. Bobcat maine coon. Birman siamese for cornish rex manx norwegian forest, so birman 
                    turkish angora. </p>              
                <p>If you are interested in scheduling an appointment, we are open Monday-Friday 3pm-8pm. Please call us at 867-5309 to schedule.</p>
                <CatTable animals={this.state.animals} />
            </div>
        )
    }
}

export default Cats;