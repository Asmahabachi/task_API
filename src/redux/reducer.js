import {ADD,DELETE,MOVIES} from "./action-type"


const initialState = {
    Movies:[]
}

export const MoviesReducer = (state=initialState, action) =>{
    switch (action.type) { 
        case ADD:
        case MOVIES:
            return{
            ...state,
            Movies:action.payload.map(movies => movies)
        }
        case DELETE:
            return {  
            ...state,
            Movies:action.ListMovie.filter(onlyOneMovie => onlyOneMovie._id !== action.payload)
        }
        default: return state
    }
}