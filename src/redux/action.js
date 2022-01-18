import {ADD,DELETE,MOVIES} from "./action-type"




export const addHandler = () => {
    return{
        type: ADD,
    }
}
export const listMovies = (LIST) => {
    return{
        type: MOVIES,
        payload:LIST
    }
}
export const deleteHandler = (ID,ListMovies) => {
    return{
        type: DELETE,
        payload: ID,
        ListMovie:ListMovies
    }
}

