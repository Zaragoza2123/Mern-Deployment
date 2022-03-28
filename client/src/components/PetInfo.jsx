import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useHistory, Link } from 'react-router-dom';


const PetInfo = () => {

    const { _id } = useParams();
    const history = useHistory();
    let [pet, setPet] = useState([]);
    let [count, setCount] = useState(0);
    let [ifClicked, setIfClicked] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${_id}`)
            .then(res => {
                console.log(res)
                setPet(res.data.results)
            })
            .catch(err => {
                console.log('error is ->', err)
            })

    }, [])
    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/pet/${_id}`)
            .then(res => {
                console.log(res)
                history.push('/')
            })
            .catch(err => {
                console.log("error is", err)
            });
    }

    const clickButton=(e)=>{
        console.log(count);
        if(ifClicked == true){
            setIfClicked( ifClicked = false)
            setCount(count+1);
            console.log(ifClicked)
        }
    }

    return (
        <div>
            <div>
                <Link to={'/'}>Back to home</Link>
                <h3>Details about:{pet.name}</h3>  <button style={{background: "red"}} onClick={deleteHandler}>Adopt {pet.name} </button>
                <div>
                    <p>Pet Type: {pet.type}</p>
                    <p>Descprition: {pet.description}</p>
                    <p>Skills:<br></br>{pet.skill1}<br></br>{pet.skill2}<br></br>{pet.skill3}</p>
                    <button onClick={clickButton}>Like</button> <p>{count} like(s)</p>
                </div>
            </div>
        </div>
    )
}

export default PetInfo;