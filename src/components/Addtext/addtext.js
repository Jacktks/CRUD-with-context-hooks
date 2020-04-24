import React, {useContext, useState} from 'react';

import {TextConText} from '../../context/Textcontext';


const AddText = () => {

    const {addText} = useContext(TextConText);
    const [text, setText] = useState('');

    const add = (evt) => {
        evt.preventDefault();
        addText(text);
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