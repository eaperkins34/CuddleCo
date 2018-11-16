import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../helpers/environment'

class NewAnimal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            cat: '',
            personality: '',
            image: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/animal/create`, {
            method: 'POST',
            body: JSON.stringify({ animal: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => { return res.json() })
            .then(animalData => {
                this.setState({
                    name: '',
                    age: '',
                    cat: '',
                    personality: '',
                    image: ''
                })
                // return "test"
            })
            return(
                <h1>New Animal Added</h1>
            )   
    }

    render() {
        return (
            <div className="mainDiv">
                <h1>Add a new animal</h1>
                <br />
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="name">Name </Label><br />
                        <Input id="nameinput" type="text" name="name" value={this.state.name} placeholder="enter name" onChange={this.handleChange} />
                    </FormGroup><br />
                    <FormGroup>
                        <Label for="age">Age </Label><br />
                        <Input id="ageinput" type="text" name="age" value={this.state.age} placeholder="enter age" onChange={this.handleChange} />
                    </FormGroup><br />
                    <FormGroup>
                        <Label for="cat">Cat? </Label> <br />
                        <Input id="catinput" type="select" name="cat" value={this.state.cat} placeholder="Cat?" onChange={this.handleChange}>
                            <option></option>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </Input>
                    </FormGroup><br />
                    <FormGroup>
                        <Label for="personality">Personality Traits</Label><br />
                        <Input id="personalityinput" type="text" name="personality" value={this.state.personality} placeholder="personality traits" onChange={this.handleChange} />
                    </FormGroup><br />
                    <FormGroup>
                        <Label for="image">Image</Label><br />
                        <Input id="imageinput" type="url" name="image" value={this.state.image} placeholder="image url" onChange={this.handleChange} />
                    </FormGroup><br />
                    <Button type="submit" color="primary" > Submit </Button>
                </Form>
            </div>
        )
    }
}

export default NewAnimal;