import React, {useContext, useState} from 'react';

import {TextConText} from '../../context/Textcontext';


const AddText = () => {

    const {dispatch} = useContext(TextConText);
    const [text, setText] = useState('');
    const [completed, setCompleted] = useState(true);

    const add = (evt) => {
        evt.preventDefault();
        dispatch({type: 'ADD_TEXT', customq: {
            text,
            completed
        }});
        setText('');
    }

    return(
        <form className="New Text" onSubmit={add}>
            <label htmlFor="text">New Text!</label>
            <input type="text" id="text" value={text} placeholder="New text" onChange={(evt) => setText(evt.target.value)} required/>
            <button>ADD</button>
        </form>
    )
}

export default AddText;