import React, {useContext, useState} from 'react';
import {TextConText} from '../../context/Textcontext';



const Textlist =  ({valueText}) => {
    const {removeText, updateText} = useContext(TextConText);

    const [text, setText] = useState('');

    const [edit, setEdit] = useState(false);

    const toggleForm = () => {
        setEdit(true);
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        updateText(valueText.id, text);
        setEdit(false);
    }

    let result;
    if(edit){
        result = (
            <tr>
                <td>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={text} name="text" onChange={(evt) =>{
                            setText(evt.target.value);
                        }}/>
                        <button>Save</button>
                    </form>
                </td>
            </tr>
        )
    } else {
        result = (
            <tr>
                <td>{valueText.text}</td>
                <td>
                    <button className="Edit" onClick={toggleForm}>Edit</button>
                </td>
                <td className="Delete">
                    <button onClick={() => removeText(valueText.id)}>Delete</button>
                </td>      
            </tr>
        )
    }
    return result;
}

export default Textlist;