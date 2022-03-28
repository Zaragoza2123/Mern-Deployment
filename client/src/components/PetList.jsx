import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
const PetList = () =>{

    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet')
            .then(res => {
                console.log(res)
                //sort by name
                const sortedPets = res.data.results.sort(function(a, b) {
                    var A = a.type.toUpperCase(); // ignore upper and lowercase
                    var B = b.type.toUpperCase(); // ignore upper and lowercase
                    if (A < B) {
                      return -1; //A comes first
                    }
                    if (A > B) {
                      return 1; // B comes first
                    }
                    return 0;  // names must be equal
                    
                }
                )
                // setAuthors(res.data.results)
                setPets(sortedPets)
                })
            .catch(err=>{
                console.log('error is ->', err)
            })
            
    }, [])

    return(
        <div> 
            <Link to={'/pets/new'}>add a pet to the shelter</Link>
            <h3>These pets are looking for a good home</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    pets.map((petObj) => {
                        return (
                            <tr key={petObj._id}>
                                <td>{petObj.name}</td>
                                <td>{petObj.type}</td>
                                <td><Link to={`/pets/${petObj._id}`}>Details</Link> | <Link to={`/pets/${petObj._id}/edit`}>Edit</Link></td>
                            </tr>
                            
                        )
                    })
                }
                </tbody>
            </table>


        </div>
    )
}
export default PetList;