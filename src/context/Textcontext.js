import React, {createContext, useState, useEffect, useReducer} from 'react';

import axios from 'axios'; 

import {textReducer} from '../reducers/TextReducer';

export const TextConText = createContext();

const TextContextProvider = (props) => {
    const [valueText, dispatch] = useReducer(textReducer, []);
    const [isComplete, setIsComplete] = useState(false)
    console.log(valueText);

    useEffect(() => {
        async function getApi(){
            try {
                const URL_API = 'https://5e8d7fc422d8cd0016a79566.mockapi.io/api/comments';
                let API = await axios(URL_API);
    
                textReducer(API.data);
            } catch(err) {
                console.log('Error is', err.message)
            }
        }
        getApi();
    }, []);

    return(
        <TextConText.Provider value={{valueText, dispatch}}>
            {props.children}
        </TextConText.Provider>
    )
}


export default TextContextProvider;