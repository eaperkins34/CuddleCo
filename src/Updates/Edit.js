import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import "./update.css";

class AnimalUpdate extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            id: '',
            name: '',
            age: '',
            cat: '',
            personality:'',
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
        this.props.update(event, this.state)
    }



    componentWillMount() {
        this.setState({
            id: this.props.animal.id,
            name: this.props.animal.name,
            age: this.props.animal.age,
            cat: this.props.animal.cat,
            personality: this.props.animal.personality,
            image: this.props.animal.image
        })
    }

    render() {
        return(
            <div className="main">
                <Modal className="modal" isOpen={true}>
                    <ModalHeader >
                        <ModalBody>
                            <h1>Update</h1>
                            <Form onSubmit={this.handleSubmit} >
                                <FormGroup>
                                <Label for ="name">Name </Label><br />
                                    <Input id="name" type="text" name="name" value={this.state.name} placeholder="enter name" onChange={this.handleChange} />
                            </FormGroup><br />
                            <FormGroup>
                                <Label for="age">Age </Label><br />
                                <Input id="age" type="text" name="age" value={this.state.age} placeholder="enter age" onChange={this.handleChange} />
                            </FormGroup><br />
                            <FormGroup>
                                <Label for="cat">Cat? </Label> <br />
                                <Input id="cat" type="select" name="cat" value={this.state.cat} placeholder="Cat?" onChange={this.handleChange}>
                                <option></option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                                </Input>
                            </FormGroup><br />
                            <FormGroup>
                                <Label for="personality">Personality Traits</Label><br />
                                <Input id="personality" type="text" name="personality" value={this.state.personality} placeholder="personality traits" onChange={this.handleChange} />
                            </FormGroup><br />
                            <FormGroup>
                                <Label for="image">Image</Label><br />
                                <Input id="image" type="url" name="image" value={this.state.image} placeholder="image url" onChange={this.handleChange} />
                            </FormGroup><br />
                            <Button type="submit"> Submit </Button>
                            </Form>
                        </ModalBody>
                    </ModalHeader>
                </Modal>
            </div>
        )
    }
}

export default AnimalUpdate;