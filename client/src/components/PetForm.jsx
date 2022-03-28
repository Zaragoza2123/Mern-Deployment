import React from 'react';

const PetForm = (props) => {
    const { onSubmitHandler, formErrors, changeHandler, pets } = props;
    return (
        <div style={{display: 'flex'}}>
            <form onSubmit={onSubmitHandler}>
                <div style={{display: 'flex'}}>
                <div style={{margin: '4em' }}>
                    <div>
                        <label>Pet Name:</label>
                        <input type="text" name="name" value={pets?.name} onChange={changeHandler} />
                        <p style={{ color: 'red' }}>{formErrors.name?.message}</p>
                    </div>
                    <div>
                        <label>Pet Type:</label>
                        <input type="text" name="type" value={pets?.type} onChange={changeHandler} />
                        <p style={{ color: 'red' }}>{formErrors.type?.message}</p>
                    </div>
                    <div>
                        <label>Pet Description:</label>
                        <input type="text" name="description" value={pets?.description} onChange={changeHandler} />
                        <p style={{ color: 'red' }}>{formErrors.description?.message}</p>
                    </div>
                    <button style={{backgroundColor: 'blue'}} type="submit">Submit</button>
                </div>
                <div style={{margin: '1em'}}>
                    <h5>Skills(optional)</h5>
                    <div>
                        <label>Skill 1:</label>
                        <input type="text" name="skill1" value={pets?.skill1} onChange={changeHandler} />
                    </div>
                    <div>
                        <label>Skill 2:</label>
                        <input type="text" name="skill2" value={pets?.skill2} onChange={changeHandler} />
                    </div>
                    <div>
                        <label>Skill 3:</label>
                        <input type="text" name="skill3" value={pets?.skill3} onChange={changeHandler} />
                    </div>
                </div>
                </div>
            </form>
        </div>
    )
}
export default PetForm;