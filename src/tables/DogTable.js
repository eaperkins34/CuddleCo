import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, } from 'reactstrap';
import './animal.css';

const DogTable = (props) => {
    return (
        <div>
            <Card>
            {props.animals.map((animal, id) => {
                return(
                    <div className="mainDiv">
                    <CardBody key={id}>
                    <CardImg id="pic" top width="100%" src={animal.image} alt="cat" />
                        <CardTitle id="name">{animal.name}</CardTitle>
                        <CardSubtitle id="age">{animal.age}</CardSubtitle>
                        <CardText id="personality">{animal.personality}</CardText>
                    </CardBody>
                    </div>
                )
            })}
            </Card>
        </div>
    )
}

export default DogTable;