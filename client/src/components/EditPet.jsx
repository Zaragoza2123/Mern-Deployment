import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useHistory, Link } from 'react-router-dom';
import PetForm from './PetForm';

const EditPet = () =>{

    const { _id } = useParams();
    const history = useHistory();
    let [pets, setPets] = useState({});
    let[formErrors, setFormErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${_id}`)
            .then(res => {
                console.log(res)
                setPets(res.data.results)
            })
            .catch(err => {
                console.log('error is ->', err)
            })

    }, [])
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/${_id}`,pets)
        .then(res=>{
            console.log('response:', res)
            if(res.data.error) {
                setFormErrors(res.data.error.errors);
            }else{
                history.push('/')
                
            }
        })
        .catch(err=>{
            console.log('error is ->', err)
        })
        
    }

    const changeHandler = (e)=>{
        setPets({
            ...pets, //spread operator to make a copy of the rest
            [e.target.name]: e.target.value
        })
    }

    return(
        <div>
            <h3>Edit {pets.name}</h3>
            <Link to={'/'}>Back to home</Link>
            <PetForm changeHandler={changeHandler} onSubmitHandler= {onSubmitHandler} formErrors = {formErrors} pets = {pets} ></PetForm>
        </div>
    )
}
export default EditPet;