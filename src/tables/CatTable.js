import React from 'react';
import { Table,  } from 'reactstrap';
import './animal.css';

const CatTable = (props) => {
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
                               
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default CatTable;