import React, { Component } from 'react';
//import AddAnimal from './Add';
import UpdateAnimal from './Edit';
import AllAnimals from './All';
import { Container, Row, Col } from 'reactstrap';
import APIURL from '../helpers/environment'

class AnimalIndex extends Component {
    constructor(props) {
        super(props)
        this.state ={
            animals: [],
            updatePressed: false,
            animalToUpdate: {}
        }
    }

    fetchAnimals = () => {
        fetch(`${APIURL}/animal/all`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((animalData) => {
            return this.setState({ animals: animalData})
        })
    }

    animalUpdate = (event, animal) => {
        console.log(animal);
        fetch(`${APIURL}/animal/update/${animal.id}`, {
           
        method: 'PUT',
            body: JSON.stringify({ table: animal }),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => {
            this.setState({ updatePressed: false })
            this.fetchAnimals();
        })
    }

    animalDelete = (event) => {
        fetch(`${APIURL}/animal/delete/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ animal: event.target.id }),
            headers: new Headers({
                'Content-type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => this.fetchAnimals())
    }

    setUpdatedAnimal = (event, animal) => {
        this.setState({
            animalToUpdate: animal,
            updatePressed: true
        })
    }

    componentWillMount() {
        this.fetchAnimals();
    }

    render() {
        const animals = this.state.animals.length >= 1 ?
        <AllAnimals animals={this.state.animals}
        delete={this.animalDelete} update={this.setUpdatedAnimal} /> : 
        <div></div>
        return(
            <Container>
                <Row>
                    {/* <Col md="3">
                        <AddAnimal token={this.props.token} updateAnimals={this.fetchAnimals} />
                    </Col>  */}

                    <Col md="9">
                        {animals}
                    </Col>
                </Row>
                    <Col md="12">
                        {
                            this.state.updatePressed ? <UpdateAnimal t={this.state.updatePressed} 
                            update={this.animalUpdate} animal={this.state.animalToUpdate} />
                            : <div></div>
                        }
                    </Col>
            </Container>
        )
    }
}

export default AnimalIndex;