import React, {createContext, useState, useEffect} from 'react';

import axios from 'axios'; 

import { v4 as uuidv4 } from 'uuid';


export const TextConText = createContext();

const TextContextProvider = (props) => {
    const [valueText, setvalueText] = useState([], () => {
        const localData = localStorage.getItem('valueText');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        async function getApi(){
            try {
                const URL_API = 'https://5e8d7fc422d8cd0016a79566.mockapi.io/api/comments';
                let API = await axios(URL_API);
    
                setvalueText(API.data);
            } catch(err) {
                console.log('Error is', err.message)
            }
        }
        getApi();
        localStorage.setItem('valueText', JSON.stringify(valueText));
        console.log(valueText);
    }, [valueText]);

    const removeText = (id) => {
        setvalueText(valueText.filter(e => e.id !== id));
    };

    const updateText = (id, updated) => {
        const update = valueText.map(text => {
            if(text.id === id){
                return {...text, text: updated}   
            } return text;
        });
        setvalueText(update)
    }

    const addText = (text) => {
        setvalueText([...valueText, {text, id: uuidv4()}])
      };

    return(
        <TextConText.Provider value={{valueText, removeText, addText, updateText}}>
            {props.children}
        </TextConText.Provider>
    )
}


export default TextContextProvider;