import React from 'react';
import { Table, } from 'reactstrap';
import './animal.css';

const DogTable = (props) => {
    return (
        <div>
            <br />
            <Table striped>
                <thead>
                    <tr>
                        <th id="image">Image</th>
                        <th id="name">Name</th>
                        <th id="age">Age</th>
                        <th id="personality">Personality</th>
                    </tr>
                </thead>
                <tbody>
                    {props.animals.map((animal, id) => {
                        return(
                            <tr key={id}>
                                <th scope="row"><img src={animal.image} id="pic" alt="cat"></img></th>
                                <td id="tdname">{animal.name}</td>
                                <td id="tdage">{animal.age}</td>
                                <td id="tdperson">{animal.personality}</td>
                               
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default DogTable;