import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import PetForm from './PetForm';

const AddPet = () => {

    const history = useHistory();

    const [pets, setPets]= useState({});
    const [petList, setPetList] = useState({});

    let[formErrors, setFormErrors] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet')
            .then(res => {
                console.log(res)
                setPetList(res.data.results)
                console.log(res.data.results)
                })
            .catch(err=>{
                console.log('error is ->', err)
            })
            
    }, [])

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        for (let i = 0; i > 12; i++){
        console.log("this is" + petList[i])
        if(petList.i.includes(pets.name)){
            return(
                alert(`${pets.name} is already taken`)
                )
            }
        }
        
        axios.post("http://localhost:8000/api/pet", pets)
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
            <Link to={'/'}>Back to home</Link>
            <PetForm changeHandler={changeHandler} onSubmitHandler= {onSubmitHandler} formErrors = {formErrors} ></PetForm>
        </div>
    )
}
export default AddPet;