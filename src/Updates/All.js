import React from 'react';
import { Table, Button } from 'reactstrap';
import '../tables/animal.css'


const AllTable = (props) => {
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
                                <td>{animal.name}</td>
                                <td>{animal.age}</td>
                                <td>{animal.personality}</td>
                                <td>
                                    <Button id={animal.id} onClick={props.delete} color="danger">Delete</Button>
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