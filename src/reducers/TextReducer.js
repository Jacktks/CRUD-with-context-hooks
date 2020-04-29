
import { v4 as uuidv4 } from 'uuid';


export const textReducer = (state, action) => {
    switch(action.type){

        case 'UPDATE_TEXT':
            return [...state], action.data

        case 'ADD_TEXT':
            return [...state, {
                text: action.customq.text,
                completed: false,
                id: uuidv4(),
            }]

        case 'REMOVE_TEXT': 
            return state.filter(e => e.id !== action.id);

        case 'EDIT_TEXT':
            return state.map(e => {
                    if(e.id === action.id){
                        return {...e, text: action.text}   
                    } return e;
                });

        case 'COMPLETE_TEXT':
            return state.map(e => {
                if(e.id === action.id){
                    return {...e, completed: !e.completed}
                } return e;
            });
            
        default: 
            return state
    }
} 