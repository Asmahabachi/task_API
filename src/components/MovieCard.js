import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {deleteHandler} from "../redux/action"
import {useDispatch,useSelector} from 'react-redux'

function MovieCard({List}) {
    const dispatch = useDispatch()
    const remove = (ID,ListMovies) => {
        dispatch(deleteHandler(ID,ListMovies))
    }
    const ListMovies = useSelector(state => state.Movies)
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={List.imgUrl} />
                <Card.Body>
                    <Card.Title>{List.title}</Card.Title>
                    <Card.Text>
                    {List.description}
                    </Card.Text>
                    <Button variant="danger" onClick={()=>remove(List._id,ListMovies)}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
