import React, {useContext, useState} from 'react';
import {TextConText} from '../../context/Textcontext';
import './textlist.css';



const Textlist =  ({valueText}) => {
    const {dispatch} = useContext(TextConText);

    const [text, setText] = useState('');

    const [edit, setEdit] = useState(false);

  

    const toggleForm = () => {
        setEdit(true);
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({type: 'EDIT_TEXT', id: valueText.id, text});
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
                        }} required/>
                        <button>Save</button>
                        <button onClick={() => setEdit(false)}>Cancel</button>
                    </form>
                </td>
            </tr>
        )
    } else {
        result = (
            <tr>
                <td className={valueText.completed ? 'complete' : ''}>{valueText.text}</td>
                <td>
                    {
                        valueText.completed ? (
                            <button onClick={() => dispatch({type: 'COMPLETE_TEXT', id: valueText.id})}>
                                DISABLE COMPLETE!
                            </button>
                        ) : (
                            <button onClick={() => dispatch({type: 'COMPLETE_TEXT', id: valueText.id})}>
                                COMPLETE!
                            </button>
                        )
                    }
                </td>
                {
                    (!valueText.completed )? (
                        <>
                            <td>
                                <button className="Edit" onClick={toggleForm}>Edit</button>
                            </td>
                            <td className="Delete">
                                <button onClick={() => dispatch({type: 'REMOVE_TEXT', id: valueText.id})}>Delete</button>
                            </td> 
                        </>  
                    ) : null
                }   
            </tr>
        )
    }
    return result;
}

export default Textlist;