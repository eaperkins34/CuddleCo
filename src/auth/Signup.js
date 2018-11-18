import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import APIURL from '../helpers/environment';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: '',
            password: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        console.log(this.props);
        fetch(`${APIURL}/signup`, {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
            localStorage.setItem('username', data.user.username);
            console.log('token');
        })
        .then((confirm) => {
            return(
                <Alert color="success">New User Created!</Alert>
            )
        })
    }

    render() {
        return(
            <div className="mainDiv">
                <h1>Create a new user</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username </Label><br />
                        <Input id="username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                    </FormGroup><br />
                    <FormGroup>
                        <Label for="firstName">First Name </Label><br />
                        <Input id="firstName" type="text" name="firstName" placeholder="enter first name" onChange={this.handleChange} />
                    </FormGroup><br />
                    <FormGroup>
                        <Label for="lastName">Last Name </Label><br />
                        <Input id="lastName" type="text" name="lastName" placeholder="enter last name" onChange={this.handleChange} />
                    </FormGroup><br />
                    <FormGroup>
                        <Label for="phoneNumber">Phone Number </Label><br />
                        <Input id="phoneNumber" type="text" name="phoneNumber" placeholder="enter phone number" onChange={this.handleChange} />
                    </FormGroup><br />
                    <FormGroup>
                        <Label for="email">Email </Label><br />
                        <Input id="email" type="email" name="email" placeholder="email" onChange={this.handleChange} />
                    </FormGroup><br />
                    <FormGroup>
                        <Label for="password">Password </Label><br />
                        <Input id="password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup><br />
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default Signup;