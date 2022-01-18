import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import MovieCard from './MovieCard'
function MovieList() {
    
    const asdsaadasdasd = useSelector(state=> state.Movies)
    
    return (
        <div className="movie-list">   
            {asdsaadasdasd?.map((movie,i)=> <MovieCard List={movie} key={`MovieCard_${i}`}/>)}
        </div>
    )
}

export default MovieList
