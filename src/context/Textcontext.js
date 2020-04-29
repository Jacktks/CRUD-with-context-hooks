import React, {createContext, useEffect, useReducer} from 'react';

import axios from 'axios'; 

import {textReducer} from '../reducers/TextReducer';

export const TextConText = createContext();

const TextContextProvider = (props) => {
    const [valueText, dispatch] = useReducer(textReducer, [
        {text: 'hello', id: '1'},
        {text: 'abc', id: '2'}
    ]);
    
    console.log(valueText);

    useEffect(() => {
        async function getApi(){
            try {
                const URL_API = 'https://5e8d7fc422d8cd0016a79566.mockapi.io/api/comments';
                let API = await axios(URL_API);
                const {data} = API;
                console.log(data);
    
                dispatch({type: 'UPDATE_TEXT', data})
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