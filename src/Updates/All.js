import React from 'react';
import { Table, Button } from 'reactstrap';
import './all.css';


const AllTable = (props) => {
    return (
        <div>
            <br />
            <Table id="allTable" striped>
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
                                <td>
                                    <Button id={animal.id} onClick={props.delete} color="danger">I've been adopted!</Button>
                                    <Button id={animal.id} onClick={e => props.update(e, animal)} color="warning">Update</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default AllTable;