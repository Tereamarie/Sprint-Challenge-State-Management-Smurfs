import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteSmurf, editSmurf } from '../actions';




const Smurf = props => {
    const [editing, setEditing ] = useState(false);
    const [smurfToEdit, setSmurfToEdit] = useState({name: props.smurf.name, age: props.smurf.age, height: props.smurf.height});

    const handleClick = e => {
        console.log('Time to delete the smurf of id: ', props.smurf.id);
        props.deleteSmurf(props.smurf.id);
    }

    const startEdit = e => {
        console.log('Time to edit the smurf of id: ', props.smurf.id);
        setEditing(!editing);
    }

    const submitForm = e => {
        e.preventDefault();
        console.log('Time to submit the form');
        console.log(smurfToEdit);
        const smurfToSend = {...smurfToEdit, id: props.smurf.id};
        console.log(smurfToSend);
        props.editSmurf(smurfToSend);
        setEditing(false);
    }

    const handleChanges = e => {
        setSmurfToEdit({...smurfToEdit, [e.target.name]: e.target.value});
    }

    return (
        <div className='smurf-box'>
            <button onClick={handleClick}>X</button>
            <button onClick={startEdit}>{editing? 'Cancel Edit': 'Edit'}</button>
            <h3>{props.smurf.name}</h3>
            <div className='imgContainer'>
               
            </div>
            <p>{props.smurf.age} Years Old</p>
            <p>{props.smurf.height} High</p>

            {editing && <form onSubmit={submitForm}>
            <label htmlFor='name'>Name: </label>
            <input
                id='name'
                name='name'
                type='text'
                onChange={handleChanges}
                value={smurfToEdit.name}
            />
            <br />

            <label htmlFor='age'>Age: </label>
            <input
                id='age'
                name='age'
                type='number'
                onChange={handleChanges}
                value={smurfToEdit.age}
            />
            <br />

            <label htmlFor='height'>Height: </label>
            <input
                id='height'
                name='height'
                type='text'
                onChange={handleChanges}
                value={smurfToEdit.height}
            />
            <br />

            <button type='submit'>Submit Smurf Changes</button>

        </form>}
        </div>
    )
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { deleteSmurf, editSmurf })(Smurf);