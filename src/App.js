
import './App.css';
import NavBar from './components/NavBar'
import AddMovie from './components/AddMovie'
import axios from 'axios'
import { useEffect } from "react"
import {useDispatch} from "react-redux"
import {listMovies} from "./redux/action"
import MovieList from "./components/MovieList"
function App() {
   
  const dispatch = useDispatch()
  
  useEffect(() => {
    axios.get('https://movie-app-gmc.herokuapp.com/api/movies')
    .then(res=> dispatch(listMovies(res.data)))
    .catch(error=> console.log(error))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <AddMovie />
      <MovieList />
    </div>
  );
}

export default App;
