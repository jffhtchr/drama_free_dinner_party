import axios from 'axios';

//ACTION TYPES
const ADD_ROOM = "ADD_ROOM"
const DELETE_ROOM = "DELETE_ROOM"

//ACTION CREATORS

export function addARoom(room){
    return{
        type: ADD_ROOM,
        room: room
    }
}

export function deleteRoom(room){
    return {
        type: DELETE_ROOM,
        room: room
    }
}

//THUNKS
export function addRoom(room){
    return function thunk(dispatch){
        return axios.post(`api/rooms/`, room)
        .then((room)=>{
            dispatch(addARoom(room))
        })
    }
}


//REDUCER
const intitialState = [];

function roomReducer(state = intitialState, action){
    switch(action.type){  
        case ADD_ROOM:
            return action.room    
        case DELETE_ROOM:
            return action.room       
        default: 
            return state; 
    }
}

export default roomReducer;